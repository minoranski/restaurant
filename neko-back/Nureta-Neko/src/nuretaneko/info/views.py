from rest_framework import viewsets
from .serializers import *
from .models import *


class RestarauntViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Restaraunt.objects.filter(active=True)
    serializer_class = RestarauntSerializer
    
class NewsViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = News.objects.filter(active=True)
    serializer_class = NewsSerializer
    
class EmployeeViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Employee.objects.filter(active=True)
    serializer_class = EmployeeSerializer