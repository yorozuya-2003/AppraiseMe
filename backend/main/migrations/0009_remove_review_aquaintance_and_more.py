# Generated by Django 4.2.1 on 2023-11-06 08:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0008_review_alter_work_exp_currently_working'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='review',
            name='aquaintance',
        ),
        migrations.RemoveField(
            model_name='review',
            name='aquaintance_time',
        ),
        migrations.RemoveField(
            model_name='review',
            name='relationship',
        ),
        migrations.AddField(
            model_name='review',
            name='acquaintance',
            field=models.CharField(choices=[('Work', 'Work'), ('Personal', 'Personal'), ('Other', 'Other')], default='H', max_length=20),
        ),
        migrations.AddField(
            model_name='review',
            name='acquaintance_time',
            field=models.CharField(choices=[('Less than 1 year', 'Less than 1 year'), ('1 to 3 years', '1 to 3 years'), ('More than 3 years', 'More than 3 years')], default='L', max_length=20),
        ),
        migrations.AddField(
            model_name='review',
            name='relation',
            field=models.CharField(choices=[('Boss', 'Boss'), ('Employee', 'Employee'), ('Colleague', 'Colleague'), ('Client', 'Client'), ('Friend', 'Friend'), ('Family or Relative', 'Family or Relative'), ('Other', 'Other')], default='B', max_length=20),
        ),
        migrations.AlterField(
            model_name='review',
            name='team_size',
            field=models.CharField(choices=[('Less than 5', 'Less than 5'), ('5 to 20', '5 to 20'), ('More than 20', 'More than 20'), ('None', 'None')], default='N', max_length=20),
        ),
    ]