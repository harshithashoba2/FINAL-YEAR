# Generated by Django 4.1.6 on 2023-03-30 10:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('detection', '0037_treatment_remove_past_appoint_session_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='treatment',
            name='doctor',
        ),
    ]
