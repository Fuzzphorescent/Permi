# Generated by Django 3.2.18 on 2023-04-09 22:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0003_rename_user_user1'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='User1',
            new_name='User',
        ),
    ]
