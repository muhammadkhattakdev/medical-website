# Generated by Django 5.0.6 on 2024-05-31 11:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_articlecategory_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='myuser',
            name='is_member',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.DeleteModel(
            name='MemberShip',
        ),
    ]
