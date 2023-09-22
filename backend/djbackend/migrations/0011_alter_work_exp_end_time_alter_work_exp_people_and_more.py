# Generated by Django 4.2.5 on 2023-09-21 20:28

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('djbackend', '0010_alter_work_exp_end_time_alter_work_exp_start_time'),
    ]

    operations = [
        migrations.AlterField(
            model_name='work_exp',
            name='end_time',
            field=models.DateField(default=datetime.datetime(2023, 9, 22, 1, 58, 36, 61724)),
        ),
        migrations.AlterField(
            model_name='work_exp',
            name='people',
            field=models.ForeignKey(default={'email': 'vv@gmail.com', 'password': '88'}, on_delete=django.db.models.deletion.CASCADE, to='djbackend.people'),
        ),
        migrations.AlterField(
            model_name='work_exp',
            name='start_time',
            field=models.DateField(default=datetime.datetime(2023, 9, 22, 1, 58, 36, 61724)),
        ),
    ]
