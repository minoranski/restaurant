from rest_framework import serializers

from menu.serializers import DishSerializer
from .models import Review, Order, Reservation


class ReviewSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())
    username = serializers.SerializerMethodField('get_user_name')

    def get_user_name(self, obj):
        if obj.user:
            return obj.user.username
        return 
    
    class Meta:
        model = Review
        fields = ['id','text','user','rating','created_date','username']   
        
        
class OrderSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())
    class Meta:
        model = Order
        fields = '__all__'
        
class CreateOrderSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())   
    class Meta:
        model = Order
        fields = ['id','time','dishes','user','client_address','client_phone']
        
class ReservationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reservation
        fields = '__all__'
        
class CreateReservationSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())   
    class Meta:
        model = Reservation
        fields = ['id','time','people_count','user','restaraunt','client_phone']