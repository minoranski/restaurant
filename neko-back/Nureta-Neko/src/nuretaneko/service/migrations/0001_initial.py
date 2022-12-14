# Generated by Django 4.0.5 on 2022-06-18 21:14

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('info', '0001_initial'),
        ('menu', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.CharField(choices=[('active', 'Active'), ('completed', 'Completed'), ('cancelled', 'Cancelled')], default='active', max_length=20, verbose_name='Статус')),
                ('created_date', models.DateTimeField(auto_now=True, verbose_name='Время отправки формы')),
                ('time', models.DateTimeField(verbose_name='Заказ на время')),
                ('price', models.DecimalField(decimal_places=2, max_digits=6, null=True, verbose_name='Стоимость')),
                ('client_address', models.CharField(max_length=255, verbose_name='Адресс')),
                ('client_phone', models.CharField(max_length=12, verbose_name='Телефон')),
            ],
            options={
                'verbose_name': 'Заказ',
                'verbose_name_plural': 'Заказы',
                'ordering': ['created_date'],
            },
        ),
        migrations.CreateModel(
            name='Review',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.TextField(verbose_name='Текст отзыва')),
                ('active', models.BooleanField(default=True, verbose_name='Активен')),
                ('rating', models.PositiveIntegerField(default=5, verbose_name='Оценка')),
                ('created_date', models.DateTimeField(auto_now=True, verbose_name='Время оправки отзыва')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='Клиент')),
            ],
            options={
                'verbose_name': 'Отзыв',
                'verbose_name_plural': 'Отзывы',
                'ordering': ['created_date', 'rating'],
            },
        ),
        migrations.CreateModel(
            name='Reservation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.CharField(choices=[('active', 'Active'), ('completed', 'Completed'), ('cancelled', 'Cancelled')], default='active', max_length=20, verbose_name='Статус')),
                ('created_date', models.DateTimeField(auto_now=True, verbose_name='Время отправки формы')),
                ('time', models.DateTimeField(verbose_name='Забронированное время')),
                ('people_count', models.PositiveIntegerField(default=1, verbose_name='Кол-во персон')),
                ('client_phone', models.CharField(max_length=12, verbose_name='Телефон')),
                ('restaraunt', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='info.restaraunt', verbose_name='Ресторан')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='Клиент')),
            ],
            options={
                'verbose_name': 'Бронирование',
                'verbose_name_plural': 'Бронирования',
                'ordering': ['created_date'],
            },
        ),
        migrations.CreateModel(
            name='OrderDetails',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('count', models.PositiveIntegerField()),
                ('dish', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='menu.dish')),
                ('order', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='service.order')),
            ],
        ),
        migrations.AddField(
            model_name='order',
            name='dishes',
            field=models.ManyToManyField(through='service.OrderDetails', to='menu.dish'),
        ),
        migrations.AddField(
            model_name='order',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='Клиент'),
        ),
    ]
