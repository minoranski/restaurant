# Generated by Django 4.0.5 on 2022-06-13 13:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='price',
            field=models.DecimalField(decimal_places=2, default=0.0, max_digits=6),
        ),
    ]