# Generated by Django 4.1.6 on 2023-03-30 17:32

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('detection', '0039_past_appoint_session'),
    ]

    operations = [
        migrations.CreateModel(
            name='Answers',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ans_id', models.CharField(max_length=100, null=True)),
                ('ques_id', models.CharField(max_length=100, null=True)),
                ('ques_category', models.CharField(max_length=100, null=True)),
                ('stage', models.CharField(max_length=100, null=True)),
                ('profile', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='detection.profile')),
            ],
        ),
    ]