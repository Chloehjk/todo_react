from django.shortcuts import render
from .models import Customer, Country
from .serializer import CustomerSerializer
from rest_framework.viewsets import ModelViewSet, ReadOnlyModelViewSet


# Create your views here.
class CustomerView(ModelViewSet):
    
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer