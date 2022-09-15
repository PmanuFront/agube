from django.contrib.auth.models import User
from django.db import models
from django.utils import timezone
from django_prometheus.models import ExportModelOperationsMixin
from django.db.models import Q


class Manager(ExportModelOperationsMixin('Manager'), models.Model):
    user: User = models.OneToOneField(User,
                                      primary_key=True,
                                      on_delete=models.RESTRICT)
    dwelling_limit = models.PositiveIntegerField(default=5)

    class Meta:
        db_table = 'agube_manager_manager'

    def save(self, *args, **kwargs):
        __default_max_daily_consumption = 1000
        __default_hook_price = 100
        """save the Manager and create default config"""
        super(Manager, self).save(*args, **kwargs)
        self.create_configuration(__default_max_daily_consumption,
                                  __default_hook_price)
        # create manager message
        if self.pk is None:
            ManagerMessage.objects.get_or_create(manager=self)

    def create_configuration(self, max_daily_consumption, hook_price):
        # type: (float, float) -> ManagerConfiguration
        """create Manager Configuration and discharge others"""
        # discharge old configurations
        for configuration in ManagerConfiguration.objects.filter(
                discharge_date__isnull=True, manager=self):
            configuration.discharge()
        return ManagerConfiguration.objects.create(
            manager=self,
            max_daily_consumption=max_daily_consumption,
            hook_price=hook_price)

    def has_exceeded_limit(self):
        from dwelling.models import Dwelling
        return Dwelling.objects.filter(
            manager=self).count() >= self.dwelling_limit

    def get_closest_config(self, date):
        # date is before from configured, return the first configuration
        query1 = Q(manager=self)
        query1.add(Q(discharge_date__gte=date), Q.AND)
        query1.add(Q(release_date__gte=date), Q.AND)

        # date is between, return it
        query2 = Q(manager=self)
        query2.add(Q(discharge_date__gte=date), Q.AND)
        query2.add(Q(release_date__lt=date), Q.AND)

        # date is less than or equal actual config, return actual configuration
        query3 = Q(manager=self)
        query3.add(Q(discharge_date__isnull=True), Q.AND)
        query3.add(Q(release_date__lte=date), Q.AND)

        # date is grater than actual config, return actual configuration
        query4 = Q(manager=self)
        query4.add(Q(discharge_date__isnull=True), Q.AND)
        query4.add(Q(release_date__gt=date), Q.AND)

        queryset = ManagerConfiguration.objects.filter(query1 | query2 | query3
                                                       | query4)
        return queryset.first()

    def get_current_configuration(self):
        # type: (Manager) -> ManagerConfiguration
        return ManagerConfiguration.objects.filter(
            discharge_date__isnull=True, manager=self).latest('release_date')

    def get_current_message(self):
        # type: (Manager) -> ManagerMessage
        return ManagerMessage.objects.filter(manager=self)


class ManagerConfiguration(ExportModelOperationsMixin('ManagerConfiguration'),
                           models.Model):
    manager: Manager = models.ForeignKey(Manager,
                                         on_delete=models.RESTRICT,
                                         unique=False)
    max_daily_consumption = models.DecimalField(decimal_places=3, max_digits=8)
    hook_price = models.DecimalField(decimal_places=2, max_digits=8)
    release_date = models.DateTimeField()
    discharge_date = models.DateTimeField(null=True)

    class Meta:
        db_table = 'agube_manager_configuration'

    def save(self, *args, **kwargs):
        """save the Manager and discharge old configurations"""
        if not self.pk:
            self.release_date = timezone.now()
        super(ManagerConfiguration, self).save(*args, **kwargs)

    def discharge(self):
        """discharge this Configuration"""
        self.discharge_date = timezone.now()
        self.save()


class ManagerMessage(ExportModelOperationsMixin('ManagerMessage'),
                     models.Model):
    manager: Manager = models.OneToOneField(Manager, on_delete=models.RESTRICT)
    is_active = models.BooleanField(default=False)
    message = models.TextField(max_length=500, null=True, default=None)

    class Meta:
        db_table = 'agube_manager_message'
