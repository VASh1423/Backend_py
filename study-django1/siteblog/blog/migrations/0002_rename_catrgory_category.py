# Generated by Django 3.2.4 on 2021-06-24 12:51

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Catrgory',
            new_name='Category',
        ),
    ]