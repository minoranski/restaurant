from .serializers import *
from .models import *
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from rest_framework.authentication import TokenAuthentication


class ReviewAPIList(generics.ListCreateAPIView):
    queryset = Review.objects.filter(active=True)
    serializer_class = ReviewSerializer
    permission_classes = (IsAuthenticatedOrReadOnly, )
    

class ReviewAPIRetrieve(generics.RetrieveAPIView):
    queryset = Review.objects.filter(active=True)
    serializer_class = ReviewSerializer


class OrderAPICreate(generics.CreateAPIView):
    queryset = Order.objects.all()
    serializer_class = CreateOrderSerializer
    permission_classes = (IsAuthenticated, )
    authentication_classes = (TokenAuthentication,)


class OrderAPIRetrieve(generics.RetrieveAPIView):
    queryset = Order.objects.filter(status=Order.OrderStatus.ACTIVE)
    serializer_class = OrderSerializer
    permission_classes = (IsAuthenticated, )
    authentication_classes = (TokenAuthentication,)
    
    def get_queryset(self):
        owner_queryset = self.queryset.filter(user=self.request.user)
        return owner_queryset


class ReservationAPICreate(generics.CreateAPIView):
    queryset = Reservation.objects.filter(
        status=Reservation.ReservationStatus.ACTIVE)
    serializer_class = CreateReservationSerializer
    permission_classes = (IsAuthenticated, )
    authentication_classes = (TokenAuthentication,)


class ReservationAPIRetrieve(generics.RetrieveAPIView):
    queryset = Reservation.objects.filter(
        status=Reservation.ReservationStatus.ACTIVE)
    serializer_class = ReservationSerializer
    permission_classes = (IsAuthenticated, )
    authentication_classes = (TokenAuthentication,)

    def get_queryset(self):
        owner_queryset = self.queryset.filter(user=self.request.user)
        return owner_queryset
