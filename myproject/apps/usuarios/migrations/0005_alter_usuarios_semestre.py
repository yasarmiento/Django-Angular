# Generated by Django 4.2.5 on 2023-09-27 23:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('usuarios', '0004_rename_estudiante_usuarios_usuario'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usuarios',
            name='semestre',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
