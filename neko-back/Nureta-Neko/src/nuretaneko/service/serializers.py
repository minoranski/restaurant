from rest_framework import serializers
from .models import Review, Order, Reservation, OrderDetails


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
        
        
class OrderDetailsSerializer(serializers.ModelSerializer):

    class Meta:
        model = OrderDetails
        fields = ('dish', 'count')


class CreateOrderSerializer(serializers.ModelSerializer):
    dishes = OrderDetailsSerializer(many=True)
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())   
    class Meta:
        model = Order
        fields = ['id','time','dishes','user','client_address','client_phone']

    def create(self, validated_data):
        dishes = validated_data.pop('dishes')
        print(dishes)
        print(self.data)

        price = 0
        for d in dishes:
            price+=d['dish'].price * d['count']
            
        print(price)
        order = Order.objects.create(price=price,**validated_data)
        
        for d in dishes:
            count = d['count']
            dish = d['dish']
            OrderDetails.objects.create(order=order,count=count,dish=dish)

        return order
        
class OrderSerializer(serializers.ModelSerializer):
    dishes = OrderDetailsSerializer(source='orderdetails_set', many=True)
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())
    class Meta:
        model = Order
        fields = '__all__'

class ReservationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reservation
        fields = '__all__'
        
class CreateReservationSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())   
    class Meta:
        model = Reservation
        fields = ['id','time','people_count','user','restaraunt','client_phone']