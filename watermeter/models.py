from datetime import datetime, timezone

from django.db import models

from dwelling.models import Dwelling


class WaterMeter(models.Model):
    """A class used to represent an Water Meter"""
    dwelling = models.ForeignKey(Dwelling, on_delete=models.RESTRICT)
    code = models.TextField()
    release_date = models.DateTimeField()
    discharge_date = models.DateTimeField(null=True)

    class Meta:
        ordering = ["release_date"]
        db_table = 'dwelling_water_meter'

    def save(self, *args, **kwargs):
        """save the water meter and save release_date datetime.now()"""
        self.release_date = datetime.now().replace(tzinfo=timezone.utc)
        super(WaterMeter, self).save(*args, **kwargs)

    def add_measurement(self, measurement, date=datetime.now().replace(tzinfo=timezone.utc)):
        """water meter add measurement

        Parameters
        ----------
        measurement : str
            measurement read from the water meter
        date : datetime
            date of read measurement"""
        return WaterMeterMeasurement.objects.create(water_meter=self, measurement=measurement, date=date)

    def get_measurements_chunk(self, chunk=5):
        """get list of water meter measurements"""
        return list(WaterMeterMeasurement.objects.filter(water_meter=self).order_by('-date')[:chunk])

    def get_measurements(self):
        """get list of water meter measurements"""
        return list(WaterMeterMeasurement.objects.filter(water_meter=self).order_by('-date'))

    def discharge(self):
        """discharge this water meter"""
        self.discharge_date = datetime.now().replace(tzinfo=timezone.utc)
        self.save()


class WaterMeterMeasurement(models.Model):
    """A class used to represent an Water Meter Measurement"""
    measurement = models.DecimalField(decimal_places=3, max_digits=8)
    date = models.DateTimeField()
    water_meter = models.ForeignKey(WaterMeter, on_delete=models.PROTECT)

    class Meta:
        ordering = ["-date"]
        db_table = 'dwelling_water_meter_measurement'
