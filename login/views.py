from address.models import Address, FullAddress
from django.contrib.auth.models import User
from django.core.exceptions import ObjectDoesNotExist
from drf_yasg.utils import swagger_auto_schema
from dwelling.models import Dwelling, DwellingOwner, DwellingResident
from login.serializers_external import UserDwellingDetailSerializer
from phone.models import Phone
from manager.permissions import IsManagerAuthenticated
from login.permissions import IsManagerOfUser, IsUserMatch
from rest_framework.response import Response
from rest_framework.status import HTTP_404_NOT_FOUND
from rest_framework.views import APIView

from login.assemblers import (get_all_user_full_address_serialized,
                              get_all_user_phones_serialized)
from login.models import (UserAddress, UserPhone, update_address_to_not_main,
                          update_phone_to_not_main)
from login.serializers import (UserAddressUpdateSerializer,
                               UserCustomDetailSerializer,
                               UserPhoneUpdateSerializer)

TAG_USER = 'user'


class UserCustomDetailListView(APIView):
    permission_classes = [IsManagerAuthenticated]

    @swagger_auto_schema(
        operation_id="getUsersDetails",
        responses={200: UserCustomDetailSerializer(many=True)},
        tags=[TAG_USER],
    )
    def get(self, request):
        """
        Return list of users with custom details.
        """
        list_of_serialized: list[UserCustomDetailSerializer] = []
        for user in User.objects.all():

            try:
                # FIXME: if user is manager, user_address is null...
                # TODO: allow that user manager add a main address
                town = ''
                street = ''
                number = ''
                flat = ''
                gate = ''
                user_address = UserAddress.objects.get(user=user,
                                                       main=True).full_address
                if user_address:
                    town = user_address.address.town,
                    street = user_address.address.street,
                    number = user_address.number,
                    flat = user_address.flat,
                    gate = user_address.gate
            except ObjectDoesNotExist:
                pass

            user_phone_number = ''
            try:
                user_phone: UserPhone = UserPhone.objects.get(user=user,
                                                              main=True)
                if user_phone:
                    user_phone_number = user_phone.phone.phone_number
            except ObjectDoesNotExist:
                pass

            data = {
                "id": user.id,
                "first_name": user.first_name,
                "last_name": user.last_name,
                "phone": user_phone_number,
                "email": user.email,
                "town": town,
                "street": street,
                "number": number,
                "flat": flat,
                "gate": gate
            }
            list_of_serialized.append(
                UserCustomDetailSerializer(data, many=False).data)

        return Response(list_of_serialized)


class UserDwellingDetailView(APIView):
    permission_classes = [IsManagerOfUser | IsUserMatch]

    @swagger_auto_schema(
        operation_id="getDwellingDetail",
        responses={200: UserDwellingDetailSerializer(many=True)},
        tags=[TAG_USER],
    )
    def get(self, request, pk):
        """
        Return list of Dwelling assigned to this user
        """
        dwelling_list_as_owner: list[Dwelling] = list(
            map(lambda owner: owner.dwelling,
                DwellingOwner.objects.filter(user__id=pk)))

        dwelling_list_as_resident: list[Dwelling] = list(
            map(lambda resident: resident.dwelling,
                DwellingResident.objects.filter(user__id=pk)))

        serialized_data_list: list[UserDwellingDetailSerializer] = []
        dwelling_owner_resident_set = set(dwelling_list_as_owner).intersection(
            dwelling_list_as_resident)
        serialized_data_list.extend(
            self.__serialize_user_dwelling_data(dwelling_owner_resident_set,
                                                True, True))

        dwelling_owner_set = set(dwelling_list_as_owner).difference(
            dwelling_owner_resident_set)
        serialized_data_list.extend(
            self.__serialize_user_dwelling_data(dwelling_owner_set,
                                                is_owner=True,
                                                is_resident=False))

        dwelling_resident_set = set(dwelling_list_as_resident).difference(
            dwelling_owner_resident_set)
        serialized_data_list.extend(
            self.__serialize_user_dwelling_data(dwelling_resident_set,
                                                is_resident=True,
                                                is_owner=False))

        return Response(serialized_data_list)

    def __serialize_user_dwelling_data(self, dwelling_list_set, is_owner,
                                       is_resident):
        list_of_serialized: list[UserDwellingDetailSerializer] = []
        for dwelling in dwelling_list_set:
            water_meter_code = dwelling.get_current_water_meter().code

            resident_first_name = ''
            resident_phone_number = ''
            dwelling_resident: DwellingResident = dwelling.get_current_resident(
            )
            if dwelling_resident != None:
                resident_first_name = dwelling_resident.user.first_name
                try:
                    user_phone: UserPhone = UserPhone.objects.get(
                        user=dwelling_resident.user, main=True)
                    if user_phone:
                        resident_phone_number = user_phone.phone.phone_number
                except ObjectDoesNotExist:
                    pass

            data = {
                'id': dwelling.id,
                'water_meter_code': water_meter_code,
                'town': dwelling.full_address.address.town,
                'street': dwelling.full_address.address.street,
                'number': dwelling.full_address.number,
                'flat': dwelling.full_address.flat,
                'gate': dwelling.full_address.gate,
                'resident_first_name': resident_first_name,
                'resident_phone': resident_phone_number,
                'is_owner': is_owner,
                'is_resident': is_resident
            }
            list_of_serialized.append(
                UserDwellingDetailSerializer(data, many=False).data)

        return list_of_serialized


class UserCreatePhoneView(APIView):
    permission_classes = [IsManagerOfUser | IsUserMatch]

    @swagger_auto_schema(
        operation_id="addUserPhone",
        request_body=UserPhoneUpdateSerializer,
        responses={200: UserPhoneUpdateSerializer(many=False)},
        tags=[TAG_USER],
    )
    def post(self, request, pk):
        """
        Add new Phone to User
        """
        try:
            user: User = User.objects.get(id=pk)
        except ObjectDoesNotExist:
            return Response({'status': 'cannot find user'},
                            status=HTTP_404_NOT_FOUND)
        # extract data
        new_phone = request.data.pop('phone')
        main = request.data.pop('main')
        # if new is main change others as not main
        if main:
            update_phone_to_not_main(pk)

        # create a new user phone
        userPhone = UserPhone.objects.create(
            user=user,
            phone=Phone.objects.create(phone_number=new_phone),
            main=main)

        data = {
            "phone_id": userPhone.phone.id,
            "phone": userPhone.phone.phone_number,
            "main": userPhone.main,
        }

        return Response(UserPhoneUpdateSerializer(data, many=False))

    @swagger_auto_schema(
        operation_id="getUserPhone",
        responses={200: UserPhoneUpdateSerializer(many=True)},
        tags=[TAG_USER],
    )
    def get(self, request, pk):
        """
        Return list of user Phones
        """
        try:
            user: User = User.objects.get(id=pk)
            return Response(get_all_user_phones_serialized(user))
        except ObjectDoesNotExist:
            return Response({'status': 'cannot find user'},
                            status=HTTP_404_NOT_FOUND)


class UserPhoneUpdateDeleteView(APIView):
    permission_classes = [IsManagerOfUser | IsUserMatch]

    @swagger_auto_schema(
        operation_id="updateUserPhone",
        request_body=UserPhoneUpdateSerializer,
        responses={200: UserPhoneUpdateSerializer(many=True)},
        tags=[TAG_USER],
    )
    def put(self, request, pk, phone_id):
        """
        Update phone of user
        """
        # get current user phone
        current_user_phone: UserPhone = UserPhone.objects.get(
            user__id=pk, phone__id=phone_id)
        # extract data
        new_phone = request.data.pop('phone')
        main = request.data.pop('main')
        # if new is main change others as not main
        if main:
            update_phone_to_not_main(pk)
        # update phone with new data
        current_user_phone.phone.phone_number = new_phone
        current_user_phone.phone.save()
        current_user_phone.main = main
        current_user_phone.save()

        data = {
            "phone": current_user_phone.phone.phone_number,
            "main": current_user_phone.main,
        }

        return Response(UserPhoneUpdateSerializer(data, many=False).data)

    @swagger_auto_schema(
        operation_id="deleteUserPhone",
        tags=[TAG_USER],
    )
    def delete(self, request, pk, phone_id):
        """
        Delete Phone of User
        """
        user_phone: UserPhone = UserPhone.objects.get(user__id=pk,
                                                      phone__id=phone_id)
        if user_phone.main:
            return Response({'status': 'cannot delete main phone'},
                            status=HTTP_404_NOT_FOUND)
        user_phone.delete()
        user_phone.phone.delete()
        return Response({'status': 'delete successfull!'})


class UserCreateAddressView(APIView):
    permission_classes = [IsManagerOfUser | IsUserMatch]

    @swagger_auto_schema(
        operation_id="addUserAddress",
        request_body=UserAddressUpdateSerializer,
        responses={200: UserAddressUpdateSerializer(many=True)},
        tags=[TAG_USER],
    )
    def post(self, request, pk):
        """
        Add new User Full Address
        """
        try:
            user = User.objects.get(id=pk)
        except ObjectDoesNotExist:
            return Response({'status': 'cannot find user'},
                            status=HTTP_404_NOT_FOUND)
        # extract data
        full_address = request.data.pop('full_address')
        main = request.data.pop('main')
        # if new is main change others as not main
        if main:
            update_address_to_not_main(pk)
        # create a new full address
        self.create_address(user, full_address, main)

        return Response(get_all_user_full_address_serialized(user))

    @classmethod
    def create_address(cls, user, validated_data, main):
        # Extract Address data
        address_data = validated_data.pop('address')
        town = address_data.pop('town')
        street = address_data.pop('street')
        is_external = address_data.pop('is_external')

        # Create Address
        new_address = Address.objects.create(town=town,
                                             street=street,
                                             is_external=is_external)

        # Extract Full Address data
        number = validated_data.pop('number')
        flat = validated_data.pop('flat')
        gate = validated_data.pop('gate')

        # Create Full Address
        new_full_address: FullAddress = FullAddress.objects.create(
            address=new_address, number=number, flat=flat, gate=gate)

        # Create User Full Address
        UserAddress.objects.create(user=user,
                                   full_address=new_full_address,
                                   main=main)

    @swagger_auto_schema(
        operation_id="getUserAddress",
        responses={200: UserAddressUpdateSerializer(many=True)},
        tags=[TAG_USER],
    )
    def get(self, request, pk):
        """
        Return list of User Full Address
        """
        try:
            user: User = User.objects.get(id=pk)
            return Response(get_all_user_full_address_serialized(user))
        except ObjectDoesNotExist:
            return Response({'status': 'cannot find user'},
                            status=HTTP_404_NOT_FOUND)


class UserAddressUpdateDeleteView(APIView):
    permission_classes = [IsManagerOfUser | IsUserMatch]

    @swagger_auto_schema(
        operation_id="updateUserAddress",
        request_body=UserAddressUpdateSerializer,
        responses={200: UserAddressUpdateSerializer(many=True)},
        tags=[TAG_USER],
    )
    def put(self, request, pk, full_address_id):
        """
        Update user address
        """
        try:
            user: User = User.objects.get(id=pk)
        except ObjectDoesNotExist:
            return Response({'status': 'cannot find user'},
                            status=HTTP_404_NOT_FOUND)
        # extract data
        full_address = request.data.pop('full_address')
        main = request.data.pop('main')
        # if new is main change others as not main
        if main:
            update_address_to_not_main(pk)
        # update phone with new data
        try:
            user_address: UserAddress = UserAddress.objects.get(
                user__id=pk, full_address__id=full_address_id)
        except ObjectDoesNotExist:
            return Response({'status': 'cannot find user full address'},
                            status=HTTP_404_NOT_FOUND)
        address = full_address.pop('address')
        user_address.full_address.address.town = address.pop('town')
        user_address.full_address.address.street = address.pop('street')
        user_address.full_address.address.is_external = address.pop(
            'is_external')
        user_address.full_address.address.save()
        user_address.full_address.number = full_address.pop('number')
        user_address.full_address.flat = full_address.pop('flat')
        user_address.full_address.gate = full_address.pop('gate')
        user_address.full_address.save()
        user_address.main = main
        user_address.save()

        return Response(get_all_user_full_address_serialized(user))

    @swagger_auto_schema(
        operation_id="deleteUserAddress",
        tags=[TAG_USER],
    )
    def delete(self, request, pk, full_address_id):
        """
        Delete User address
        """
        try:
            user_address: UserAddress = UserAddress.objects.get(
                user__id=pk, full_address__id=full_address_id)
        except ObjectDoesNotExist:
            return Response({'status': 'cannot find user full address'},
                            status=HTTP_404_NOT_FOUND)
        user_address = UserAddress.objects.get(
            user__id=pk, full_address__id=full_address_id)
        if user_address.main:
            return Response({'status': 'cannot delete main address'},
                            status=HTTP_404_NOT_FOUND)
        full_address = user_address.full_address
        user_address.delete()
        if full_address.address.is_external:
            full_address.delete()
            full_address.address.delete()
        return Response({'status': 'delete successfull!'})
