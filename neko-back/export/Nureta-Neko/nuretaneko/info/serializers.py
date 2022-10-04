from rest_framework import serializers
from .models import News, Restaraunt, Employee


class RestarauntSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaraunt
        fields = '__all__'        
        
class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = '__all__'
        
class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = '__all__'