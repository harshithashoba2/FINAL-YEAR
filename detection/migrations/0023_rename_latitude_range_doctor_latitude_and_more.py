# Generated by Django 4.1.6 on 2023-03-25 16:12

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('detection', '0022_doctor_latitude_range_doctor_longitude_range'),
    ]

    operations = [
        migrations.RenameField(
            model_name='doctor',
            old_name='latitude_range',
            new_name='latitude',
        ),
        migrations.RenameField(
            model_name='doctor',
            old_name='longitude_range',
            new_name='longitude',
        ),
    ]