# Generated by Django 4.2.5 on 2023-10-17 15:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('seguimientos', '0007_remove_seguimientos_fin'),
    ]

    operations = [
        migrations.AddField(
            model_name='seguimientos',
            name='fin',
            field=models.DateField(blank=True, null=True),
        ),
    ]