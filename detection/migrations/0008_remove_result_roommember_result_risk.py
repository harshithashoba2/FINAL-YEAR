# Generated by Django 4.1.6 on 2023-03-05 07:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('detection', '0007_remove_gad_res1_remove_gad_res2_remove_gad_res3_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='result',
            name='RoomMember',
        ),
        migrations.AddField(
            model_name='result',
            name='risk',
            field=models.CharField(default='null', max_length=100),
        ),
    ]