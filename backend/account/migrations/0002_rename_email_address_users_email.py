# Generated by Django 4.0 on 2021-12-16 10:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='users',
            old_name='Email_Address',
            new_name='email',
        ),
    ]
