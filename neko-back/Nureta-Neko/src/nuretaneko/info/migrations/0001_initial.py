# Generated by Django 4.0.5 on 2022-06-18 21:14

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Employee',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name_ru', models.CharField(max_length=100, verbose_name='ФИО')),
                ('name_en', models.CharField(max_length=100)),
                ('position_ru', models.CharField(max_length=50, verbose_name='Должность')),
                ('position_en', models.CharField(max_length=50)),
                ('photo', models.ImageField(upload_to='nuretaneko/media/employees', verbose_name='Фото')),
                ('description_ru', models.CharField(max_length=255, verbose_name='Описание')),
                ('description_en', models.CharField(max_length=255)),
                ('created_date', models.DateTimeField(auto_now=True, verbose_name='Время добавления')),
                ('active', models.BooleanField(default=True, verbose_name='Активен')),
            ],
            options={
                'verbose_name': 'Сотрудник',
                'verbose_name_plural': 'Сотрудники',
                'ordering': ['name_ru'],
            },
        ),
        migrations.CreateModel(
            name='News',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title_ru', models.CharField(max_length=100, verbose_name='Заголовок')),
                ('title_en', models.CharField(max_length=100)),
                ('photo', models.ImageField(upload_to='nuretaneko/media/news', verbose_name='Фото')),
                ('text_ru', models.TextField(verbose_name='Текст объявления')),
                ('text_en', models.TextField()),
                ('created_date', models.DateTimeField(auto_now=True, verbose_name='Время добавления')),
                ('active', models.BooleanField(default=True, verbose_name='Активен')),
            ],
            options={
                'verbose_name': 'Объявление',
                'verbose_name_plural': 'Объявления',
                'ordering': ['title_ru'],
            },
        ),
        migrations.CreateModel(
            name='Restaraunt',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name_ru', models.CharField(max_length=100, verbose_name='Название')),
                ('name_en', models.CharField(max_length=100)),
                ('address_ru', models.CharField(max_length=100, verbose_name='Адрес')),
                ('address_en', models.CharField(max_length=100)),
                ('description_ru', models.CharField(max_length=255, verbose_name='Описание')),
                ('description_en', models.CharField(max_length=255)),
                ('photo', models.ImageField(upload_to='nuretaneko/media/restaraunts', verbose_name='Фото')),
                ('created_date', models.DateTimeField(auto_now=True, verbose_name='Время добавления')),
                ('active', models.BooleanField(default=True, verbose_name='Активен')),
            ],
            options={
                'verbose_name': 'Ресторан',
                'verbose_name_plural': 'Рестораны',
                'ordering': ['name_ru'],
            },
        ),
    ]