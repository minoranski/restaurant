# Generated by Django 4.0.5 on 2022-06-17 07:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('info', '0002_alter_employee_options_alter_news_options_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='employee',
            name='active',
            field=models.BooleanField(default=True, verbose_name='Активен'),
        ),
        migrations.AlterField(
            model_name='news',
            name='active',
            field=models.BooleanField(default=True, verbose_name='Активен'),
        ),
        migrations.AlterField(
            model_name='restaraunt',
            name='active',
            field=models.BooleanField(default=True, verbose_name='Активен'),
        ),
    ]