from rest_framework import viewsets
from rest_framework.decorators import action 
from .serializers import DishSerializer,DishCategorySerializer
from .models import Dish, DishCategory
from rest_framework.response import Response


class DishViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Dish.objects.all()
    serializer_class = DishSerializer
    

class DishCategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = DishCategory.objects.all()
    serializer_class = DishCategorySerializer
    
    @action(methods=['get'], detail=True)
    def dishes(self, request, pk):
        dishes = Dish.objects.filter(category = pk)
        serializer = DishSerializer(dishes, many=True)
        return Response({'dishes':  serializer.data})