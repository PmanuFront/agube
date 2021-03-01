from django.utils import timezone

from drf_yasg.utils import swagger_auto_schema
from rest_framework import generics
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from watermeter.models import WaterMeter, WaterMeterMeasurement
from watermeter.serializers import WaterMeterMeasurementSerializer

TAG = 'water-meter'


class WaterMeterTotalMeasurementView(generics.ListAPIView):
    queryset = WaterMeterMeasurement.objects.all()
    serializer_class = WaterMeterMeasurementSerializer
    permission_classes = [AllowAny]

    @swagger_auto_schema(operation_id="getTotalMeasures", operation_description="get all Measures saved")
    def get(self, request, *args, **kwargs):
        return super().get(request, *args, **kwargs)


class WaterMeterMeasurementView(APIView):
    permission_classes = [AllowAny]

    @swagger_auto_schema(
        operation_id="getWaterMeterMeasures",
        responses={200: WaterMeterMeasurementSerializer(many=True)},
        tags=[TAG],
    )
    def get(self, request, pk):
        """
        Return a list of water meter measures.
        """
        # Get Dwelling
        water_meter = WaterMeter.objects.get(id=pk)
        measurements = water_meter.get_measurements()
        return Response((WaterMeterMeasurementSerializer(measurements, many=True).data))

    @swagger_auto_schema(
        operation_id="addNewWaterMeterMeasure",
        request_body=WaterMeterMeasurementSerializer,
        responses={200: WaterMeterMeasurementSerializer(many=False)},
        tags=[TAG],
    )
    def post(self, request, pk):
        """
        Create a new Measurement for this Water Meter
        """
        # Get Water Meter
        water_meter = WaterMeter.objects.get(id=pk)
        # Extract data
        measurement = request.data.pop('measurement')
        date = None
        if 'date' in request.data:
            date = request.data.pop('date')
        else:
            date = timezone.now()
        # Add Water Meter
        water_meter_measurement = water_meter.add_measurement(
            measurement, date=date)
        return Response((WaterMeterMeasurementSerializer(water_meter_measurement, many=False).data))
