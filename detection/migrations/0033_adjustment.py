# Generated by Django 4.1.6 on 2023-03-30 06:05

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('detection', '0032_sias'),
    ]

    operations = [
        migrations.CreateModel(
            name='Adjustment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ans1', models.CharField(max_length=100)),
                ('ans2', models.CharField(max_length=100)),
                ('ans3', models.CharField(max_length=100)),
                ('ans4', models.CharField(max_length=100)),
                ('ans5', models.CharField(max_length=100)),
                ('ans6', models.CharField(max_length=100)),
                ('ans7', models.CharField(max_length=100)),
                ('ans8', models.CharField(max_length=100)),
                ('ans9', models.CharField(max_length=100)),
                ('ans10', models.CharField(max_length=100)),
                ('Profile', models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, to='detection.profile')),
            ],
        ),
    ]
