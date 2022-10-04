from django.db import models
from django.contrib.auth.models import User
from menu.models import Dish
from info.models import Restaraunt



class Review(models.Model):
    text = models.TextField(verbose_name='Текст отзыва')
    active = models.BooleanField(default=True,verbose_name='Активен')
    rating = models.PositiveIntegerField(default=5,verbose_name='Оценка')
    created_date = models.DateTimeField(auto_now=True,verbose_name='Время оправки отзыва')
    user = models.ForeignKey(User,
                             on_delete=models.CASCADE,
                             verbose_name='Клиент')
    
    def __str__(self):
        return 'Отзыв '+ self.created_date.strftime('%Y-%m-%d %H:%M')
    
    class Meta:
        verbose_name = 'Отзыв'
        verbose_name_plural = 'Отзывы'
        ordering = ['created_date','rating']


class Order(models.Model):

    class OrderStatus(models.TextChoices):
        ACTIVE = 'active'
        COMPLETED = 'completed'
        CANCELLED = 'cancelled'

    status = models.CharField(max_length=20,
                              choices=OrderStatus.choices,
                              default=OrderStatus.ACTIVE,
                              verbose_name='Статус')
    created_date = models.DateTimeField(auto_now=True,verbose_name='Время отправки формы')
    time = models.DateTimeField(verbose_name='Заказ на время')
    price = models.DecimalField(max_digits=6, decimal_places=2, null=True,verbose_name='Стоимость')
    dishes = models.ManyToManyField(Dish, through="OrderDetails")
    user = models.ForeignKey(User,
                             on_delete=models.CASCADE,
                             verbose_name='Клиент')
    client_address = models.CharField(max_length=255,verbose_name='Адресс')
    client_phone = models.CharField(max_length=12,verbose_name='Телефон')
    
    def __str__(self):
        return 'Заказ '+ self.created_date.strftime('%Y-%m-%d %H:%M')
    
    class Meta:
        verbose_name = 'Заказ'
        verbose_name_plural = 'Заказы'
        ordering = ['created_date']
        

class OrderDetails(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    dish = models.ForeignKey(Dish, on_delete=models.CASCADE)
    count = models.PositiveIntegerField()


class Reservation(models.Model):

    class ReservationStatus(models.TextChoices):
        ACTIVE = 'active'
        COMPLETED = 'completed'
        CANCELLED = 'cancelled'

    status = models.CharField(max_length=20,
                              choices=ReservationStatus.choices,
                              default=ReservationStatus.ACTIVE,
                              verbose_name='Статус')
    created_date = models.DateTimeField(auto_now=True,verbose_name='Время отправки формы')
    time = models.DateTimeField(verbose_name='Забронированное время')
    people_count = models.PositiveIntegerField(default=1,verbose_name='Кол-во персон')
    user = models.ForeignKey(User,
                             on_delete=models.CASCADE,
                             verbose_name='Клиент')
    restaraunt = models.ForeignKey(Restaraunt,
                             on_delete=models.CASCADE,
                             verbose_name='Ресторан')
    client_phone = models.CharField(max_length=12,verbose_name='Телефон')
    
    def __str__(self):
        return 'Бронирование '+ self.created_date.strftime('%Y-%m-%d %H:%M')
    
    class Meta:
        verbose_name = 'Бронирование'
        verbose_name_plural = 'Бронирования'
        ordering = ['created_date']