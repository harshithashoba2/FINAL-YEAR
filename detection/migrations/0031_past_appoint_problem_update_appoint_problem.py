# Generated by Django 4.1.6 on 2023-03-30 00:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('detection', '0030_past_appoint'),
    ]

    operations = [
        migrations.AddField(
            model_name='past_appoint',
            name='problem',
            field=models.CharField(default='null', max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='update_appoint',
            name='problem',
            field=models.CharField(default='null', max_length=100, null=True),
        ),
    ]
