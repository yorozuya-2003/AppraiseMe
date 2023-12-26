# Generated by Django 4.2.1 on 2023-12-26 19:11

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='OTP',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=254)),
                ('otp', models.CharField(max_length=6)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=30)),
                ('first_name', models.CharField(max_length=30)),
                ('second_name', models.CharField(max_length=30)),
                ('dob', models.DateField()),
                ('gender', models.CharField(choices=[('Male', 'Male'), ('Female', 'Female'), ('Other', 'Other')], max_length=20)),
                ('pronouns', models.CharField(choices=[('He/Him', 'He/Him'), ('She/Her', 'She/Her'), ('They/Them', 'They/Them'), ('Other', 'Other')], max_length=20)),
                ('image', models.ImageField(blank=True, null=True, upload_to='profile_images/')),
                ('bio', models.CharField(blank=True, max_length=500, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='WorkExperience',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=40)),
                ('title', models.CharField(max_length=20)),
                ('emp_type', models.CharField(choices=[('Full-time', 'Full-time'), ('Part-time', 'Part-time')], max_length=10)),
                ('company', models.CharField(max_length=30)),
                ('location', models.CharField(max_length=30)),
                ('location_type', models.CharField(choices=[('On-site', 'On-site'), ('Hybrid', 'Hybrid'), ('Remote', 'Remote')], max_length=30)),
                ('currently_working', models.BooleanField(default=True)),
                ('start_time', models.DateField()),
                ('end_time', models.DateField()),
            ],
        ),
        migrations.CreateModel(
            name='Review',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('to_user', models.CharField(max_length=100)),
                ('from_user', models.CharField(max_length=100)),
                ('acquaintance', models.CharField(choices=[('Work', 'Work'), ('Personal', 'Personal'), ('Other', 'Other')], default='H', max_length=20)),
                ('acquaintance_time', models.CharField(choices=[('Less than 1 year', 'Less than 1 year'), ('1 to 3 years', '1 to 3 years'), ('More than 3 years', 'More than 3 years')], default='L', max_length=20)),
                ('relation', models.CharField(choices=[('Boss', 'Boss'), ('Employee', 'Employee'), ('Colleague', 'Colleague'), ('Client', 'Client'), ('Friend', 'Friend'), ('Family or Relative', 'Family or Relative'), ('Other', 'Other')], default='B', max_length=20)),
                ('team_size', models.CharField(choices=[('Less than 5', 'Less than 5'), ('5 to 20', '5 to 20'), ('More than 20', 'More than 20'), ('None', 'None')], default='N', max_length=20)),
                ('slider1', models.IntegerField(default=0)),
                ('slider2', models.IntegerField(default=0)),
                ('slider3', models.IntegerField(default=0)),
                ('slider4', models.IntegerField(default=0)),
                ('slider5', models.IntegerField(default=0)),
                ('slider6', models.IntegerField(default=0)),
                ('slider7', models.IntegerField(default=0)),
                ('slider8', models.IntegerField(default=0)),
                ('slider9', models.IntegerField(default=0)),
                ('sentence', models.TextField(default='', max_length=500)),
                ('is_anonymous', models.BooleanField(default=False)),
                ('downvotes', models.ManyToManyField(blank=True, related_name='downvoted_reviews', to=settings.AUTH_USER_MODEL)),
                ('upvotes', models.ManyToManyField(blank=True, related_name='upvoted_reviews', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'unique_together': {('to_user', 'from_user')},
            },
        ),
    ]
