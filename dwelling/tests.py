from django.contrib.auth.models import User
from django.test import TestCase

from dwelling.exceptions import NullIbanError
from dwelling.models import Paymaster


class PaymentTestCase(TestCase):

    def test_payment_cash(self):
        """test payment cash created correctly"""
        ironman = User.objects.create(
            username='ironman',
            first_name='tony',
            last_name='stark',
            email='ironman@avenger.com')
        self.assertEqual(Paymaster.objects.filter().all().count(), 0)
        Paymaster.objects.create(payment_type=Paymaster.PaymentType.CASH, user=ironman)
        self.assertEqual(Paymaster.objects.filter().all().count(), 1)

    def test_payment_bank(self):
        """test payment cash created correctly"""
        hulk = User.objects.create(
            username='hulk',
            first_name='bruce',
            last_name='banner',
            email='hulk@avenger.com')
        self.assertEqual(Paymaster.objects.filter().all().count(), 0)
        Paymaster.objects.create(
            payment_type=Paymaster.PaymentType.BANK, iban="IBAN", user=hulk)
        self.assertEqual(Paymaster.objects.filter().all().count(), 1)

    def test_payment_error(self):
        """test payment raise error correctly"""
        with self.assertRaises(NullIbanError):
            Paymaster.objects.create(payment_type=Paymaster.PaymentType.BANK)
