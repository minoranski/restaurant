from rest_framework import serializers
from .models import Dish, DishCategory 

class DishSerializer(serializers.ModelSerializer):
    category_name_ru = serializers.SerializerMethodField('get_category_name_ru')
    category_name_en = serializers.SerializerMethodField('get_category_name_en')

    def get_category_name_ru(self, obj):
        if obj.category:
            return obj.category.name_ru
        return 

    def get_category_name_en(self, obj):
        if obj.category:
            return obj.category.name_en
        return 
    
    class Meta:
        model = Dish
        fields = '__all__'
        

class DishCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = DishCategory
        fields = '__all__'