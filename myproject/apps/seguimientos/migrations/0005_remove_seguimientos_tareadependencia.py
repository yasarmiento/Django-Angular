# Generated by Django 4.2.5 on 2023-10-04 16:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('seguimientos', '0004_alter_seguimientos_tareadependencia'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='seguimientos',
            name='tareadependencia',
        ),
    ]
