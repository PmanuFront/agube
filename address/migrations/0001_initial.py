# Generated by Django 3.1.5 on 2021-03-22 16:34

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Address',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('town', models.TextField()),
                ('street', models.TextField()),
                ('is_external', models.BooleanField(default=False)),
            ],
            options={
                'db_table': 'address',
                'ordering': ['town', 'street'],
            },
        ),
        migrations.CreateModel(
            name='FullAddress',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('number', models.PositiveIntegerField()),
                ('flat', models.TextField(null=True)),
                ('gate', models.TextField(null=True)),
                ('address', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='address.address')),
            ],
            options={
                'db_table': 'full_address',
                'ordering': ['address__town', 'address__street', 'number'],
            },
        ),
    ]
