from django.db import models
from django.utils.safestring import mark_safe


class DishCategory(models.Model):

    class DishStatus(models.TextChoices):
        ACTIVE = 'active'
        INACTIVE = 'inactive'
        DELETED = 'deleted'

    name_ru = models.CharField(max_length=50,verbose_name="Название")
    name_en = models.CharField(max_length=50)
    status = models.CharField(max_length=20, choices=DishStatus.choices,verbose_name="Статус")

    def __str__(self):
        return self.name_ru
    
    class Meta:
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'
        ordering = ['name_ru']


class Dish(models.Model):

    class DishStatus(models.TextChoices):
        ACTIVE = 'active'
        INACTIVE = 'inactive'
        DELETED = 'deleted'

    status = models.CharField(max_length=20, choices=DishStatus.choices,verbose_name="Статус")
    name_ru = models.CharField(max_length=100,verbose_name="Название")
    name_en = models.CharField(max_length=100)
    description_ru = models.CharField(max_length=255)
    description_en = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=6, decimal_places=2,verbose_name="Стоимость")
    photo = models.ImageField(upload_to='nuretaneko/media/dishes')
    category = models.ForeignKey('DishCategory', on_delete=models.RESTRICT,verbose_name="Категория")
    discount = models.PositiveIntegerField(default=0,verbose_name="Скидка")
    portion = models.PositiveIntegerField(default=0,verbose_name="Порция")
    
    def image_tag(self):
        return mark_safe(f'<img src={self.photo.url} height="80">')
    image_tag.short_description = "Фото"

    def __str__(self):
        return self.name_ru
    
    class Meta:
        verbose_name = 'Блюдо'
        verbose_name_plural = 'Блюда'
        ordering = ['name_ru']
