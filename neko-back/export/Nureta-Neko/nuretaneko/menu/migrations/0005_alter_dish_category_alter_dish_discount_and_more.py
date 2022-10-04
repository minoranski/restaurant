# Generated by Django 4.0.5 on 2022-06-17 07:55

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('menu', '0004_alter_dish_options_alter_dishcategory_options'),
    ]

    operations = [
        migrations.AlterField(
            model_name='dish',
            name='category',
            field=models.ForeignKey(on_delete=django.db.models.deletion.RESTRICT, to='menu.dishcategory', verbose_name='Категория'),
        ),
        migrations.AlterField(
            model_name='dish',
            name='discount',
            field=models.PositiveIntegerField(default=0, verbose_name='Скидка'),
        ),
        migrations.AlterField(
            model_name='dish',
            name='name_ru',
            field=models.CharField(max_length=100, verbose_name='Название'),
        ),
        migrations.AlterField(
            model_name='dish',
            name='portion',
            field=models.PositiveIntegerField(default=0, verbose_name='Порция'),
        ),
        migrations.AlterField(
            model_name='dish',
            name='price',
            field=models.DecimalField(decimal_places=2, max_digits=6, verbose_name='Стоимость'),
        ),
        migrations.AlterField(
            model_name='dish',
            name='status',
            field=models.CharField(choices=[('active', 'Active'), ('inactive', 'Inactive'), ('deleted', 'Deleted')], max_length=20, verbose_name='Статус'),
        ),
        migrations.AlterField(
            model_name='dishcategory',
            name='name_ru',
            field=models.CharField(max_length=50, verbose_name='Название'),
        ),
        migrations.AlterField(
            model_name='dishcategory',
            name='status',
            field=models.CharField(choices=[('active', 'Active'), ('inactive', 'Inactive'), ('deleted', 'Deleted')], max_length=20, verbose_name='Статус'),
        ),
    ]