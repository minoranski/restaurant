from django.db import models
from django.utils.safestring import mark_safe


class Restaraunt(models.Model):
    name_ru = models.CharField(max_length=100,verbose_name='Название')
    name_en = models.CharField(max_length=100)
    address_ru = models.CharField(max_length=100,verbose_name='Адрес')
    address_en = models.CharField(max_length=100)
    description_ru = models.CharField(max_length=255,verbose_name='Описание')
    description_en = models.CharField(max_length=255)    
    photo = models.ImageField(upload_to='nuretaneko/media/restaraunts',verbose_name='Фото')
    created_date = models.DateTimeField(auto_now=True,verbose_name='Время добавления')
    active = models.BooleanField(default=True,verbose_name='Активен')
    
    def image_tag(self):
        return mark_safe(f'<img src={self.photo.url} height="80">')
    image_tag.short_description = "Фото"
    
    def __str__(self):
        return self.name_ru
    
    class Meta:
        verbose_name = 'Ресторан'
        verbose_name_plural = 'Рестораны'
        ordering = ['name_ru']

class News(models.Model):
    title_ru = models.CharField(max_length=100,verbose_name='Заголовок')
    title_en = models.CharField(max_length=100)
    photo = models.ImageField(upload_to='nuretaneko/media/news',verbose_name='Фото')
    text_ru = models.TextField(verbose_name='Текст объявления')
    text_en = models.TextField()    
    created_date = models.DateTimeField(auto_now=True,verbose_name='Время добавления')
    active = models.BooleanField(default=True,verbose_name='Активен')
    
    def image_tag(self):
        return mark_safe(f'<img src={self.photo.url} height="80">')
    image_tag.short_description = "Фото"
    
    def __str__(self):
        return self.title_ru
    
    class Meta:
        verbose_name = 'Объявление'
        verbose_name_plural = 'Объявления'
        ordering = ['title_ru']
    
class Employee(models.Model):
    name_ru = models.CharField(max_length=100,verbose_name='ФИО')
    name_en = models.CharField(max_length=100)
    position_ru = models.CharField(max_length=50,verbose_name='Должность')
    position_en = models.CharField(max_length=50)
    photo = models.ImageField(upload_to='nuretaneko/media/employees',verbose_name='Фото')
    description_ru = models.CharField(max_length=255,verbose_name='Описание')
    description_en = models.CharField(max_length=255)   
    created_date = models.DateTimeField(auto_now=True,verbose_name='Время добавления')
    active = models.BooleanField(default=True,verbose_name='Активен')
    
    def image_tag(self):
        return mark_safe(f'<img src={self.photo.url} height="80">')
    image_tag.short_description = "Фото"
    
    def __str__(self):
        return self.name_ru
    
    class Meta:
        verbose_name = 'Сотрудник'
        verbose_name_plural = 'Сотрудники'
        ordering = ['name_ru']