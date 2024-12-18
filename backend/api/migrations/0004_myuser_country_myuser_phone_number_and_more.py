# Generated by Django 5.0.6 on 2024-05-24 11:52

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_article_img'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AddField(
            model_name='myuser',
            name='country',
            field=models.CharField(blank=True, max_length=50, null=True, verbose_name='Country'),
        ),
        migrations.AddField(
            model_name='myuser',
            name='phone_number',
            field=models.CharField(blank=True, max_length=15, null=True, verbose_name='Phone Number'),
        ),
        migrations.AddField(
            model_name='myuser',
            name='registration_body',
            field=models.CharField(blank=True, max_length=5000000, null=True, verbose_name='Registration Body'),
        ),
        migrations.AddField(
            model_name='myuser',
            name='status',
            field=models.CharField(blank=True, max_length=500000, null=True, verbose_name='Status'),
        ),
        migrations.CreateModel(
            name='MemberShip',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
