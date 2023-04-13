# Generated by Django 4.1.6 on 2023-03-13 13:54

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('detection', '0011_acute_profile_acute_ans_profile_gad_profile_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='acute',
            old_name='ques1',
            new_name='ques',
        ),
        migrations.RenameField(
            model_name='gad',
            old_name='ques1',
            new_name='ques',
        ),
        migrations.RenameField(
            model_name='panic',
            old_name='ques1',
            new_name='ques',
        ),
        migrations.RenameField(
            model_name='ptsd',
            old_name='ques1',
            new_name='ques',
        ),
        migrations.RemoveField(
            model_name='acute',
            name='ques2',
        ),
        migrations.RemoveField(
            model_name='acute',
            name='ques3',
        ),
        migrations.RemoveField(
            model_name='acute',
            name='ques4',
        ),
        migrations.RemoveField(
            model_name='acute',
            name='ques5',
        ),
        migrations.RemoveField(
            model_name='acute',
            name='ques6',
        ),
        migrations.RemoveField(
            model_name='acute',
            name='ques7',
        ),
        migrations.RemoveField(
            model_name='gad',
            name='ques2',
        ),
        migrations.RemoveField(
            model_name='gad',
            name='ques3',
        ),
        migrations.RemoveField(
            model_name='gad',
            name='ques4',
        ),
        migrations.RemoveField(
            model_name='gad',
            name='ques5',
        ),
        migrations.RemoveField(
            model_name='gad',
            name='ques6',
        ),
        migrations.RemoveField(
            model_name='gad',
            name='ques7',
        ),
        migrations.RemoveField(
            model_name='panic',
            name='ques10',
        ),
        migrations.RemoveField(
            model_name='panic',
            name='ques2',
        ),
        migrations.RemoveField(
            model_name='panic',
            name='ques3',
        ),
        migrations.RemoveField(
            model_name='panic',
            name='ques4',
        ),
        migrations.RemoveField(
            model_name='panic',
            name='ques5',
        ),
        migrations.RemoveField(
            model_name='panic',
            name='ques6',
        ),
        migrations.RemoveField(
            model_name='panic',
            name='ques7',
        ),
        migrations.RemoveField(
            model_name='panic',
            name='ques8',
        ),
        migrations.RemoveField(
            model_name='panic',
            name='ques9',
        ),
        migrations.RemoveField(
            model_name='ptsd',
            name='ques10',
        ),
        migrations.RemoveField(
            model_name='ptsd',
            name='ques11',
        ),
        migrations.RemoveField(
            model_name='ptsd',
            name='ques12',
        ),
        migrations.RemoveField(
            model_name='ptsd',
            name='ques13',
        ),
        migrations.RemoveField(
            model_name='ptsd',
            name='ques14',
        ),
        migrations.RemoveField(
            model_name='ptsd',
            name='ques15',
        ),
        migrations.RemoveField(
            model_name='ptsd',
            name='ques16',
        ),
        migrations.RemoveField(
            model_name='ptsd',
            name='ques17',
        ),
        migrations.RemoveField(
            model_name='ptsd',
            name='ques18',
        ),
        migrations.RemoveField(
            model_name='ptsd',
            name='ques19',
        ),
        migrations.RemoveField(
            model_name='ptsd',
            name='ques2',
        ),
        migrations.RemoveField(
            model_name='ptsd',
            name='ques20',
        ),
        migrations.RemoveField(
            model_name='ptsd',
            name='ques3',
        ),
        migrations.RemoveField(
            model_name='ptsd',
            name='ques4',
        ),
        migrations.RemoveField(
            model_name='ptsd',
            name='ques5',
        ),
        migrations.RemoveField(
            model_name='ptsd',
            name='ques6',
        ),
        migrations.RemoveField(
            model_name='ptsd',
            name='ques7',
        ),
        migrations.RemoveField(
            model_name='ptsd',
            name='ques8',
        ),
        migrations.RemoveField(
            model_name='ptsd',
            name='ques9',
        ),
    ]
