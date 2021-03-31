from django.shortcuts import render
from drf_yasg.utils import swagger_auto_schema
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from manager.models import ManagerConfiguration, Person
from manager.serializers import (ManagerConfigurationSerializer,
                                 ManagerSerializer)

TAG_MANAGER = 'manager'


class ManagerView(APIView):
    permission_classes = [IsAuthenticated]

    @swagger_auto_schema(
        operation_id="getManagerByUser",
        responses={200: ManagerSerializer(many=False)},
        tags=[TAG_MANAGER],
    )
    def get(self, request):
        """
        Get Manager
        """
        manager = Person.objects.get(user__id=self.request.user.id).manager
        return Response(
            ManagerSerializer(manager, many=False).data)


class ManagerConfigurationView(APIView):
    permission_classes = [AllowAny]

    @swagger_auto_schema(
        operation_id="getManagerConfiguration",
        responses={200: ManagerConfigurationSerializer(many=False)},
        tags=[TAG_MANAGER],
    )
    def get(self, request, pk):
        """
        Get Manager Configuration
        """
        configuration = ManagerConfiguration.objects.get(manager__user_id=pk)
        return Response(
            ManagerConfigurationSerializer(configuration, many=False).data)

    @ swagger_auto_schema(
        operation_id="updateManagerConfiguration",
        request_body=ManagerConfigurationSerializer,
        responses={200: ManagerConfigurationSerializer(many=False)},
        tags=[TAG_MANAGER],
    )
    def post(self, request, pk):
        """
        Update manager configuration
        """
        configuration = ManagerConfiguration.objects.get(manager__user_id=pk)
        configuration.max_daily_consumption = request.data.pop(
            'max_daily_consumption')
        configuration.save()
        configuration.create_hook(request.data.pop('hook_price')['hook_price'])
        return Response(
            ManagerConfigurationSerializer(configuration, many=False).data)