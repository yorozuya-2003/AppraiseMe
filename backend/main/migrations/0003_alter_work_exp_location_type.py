# Generated by Django 4.2.1 on 2023-12-22 23:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0002_alter_profiles_pronouns'),
    ]

    operations = [
        migrations.AlterField(
            model_name='work_exp',
            name='location_type',
            field=models.CharField(choices=[('On-site', 'On-site'), ('Hybrid', 'Hybrid'), ('Remote', 'Remote')], max_length=30),
        ),
    ]