from django.urls import path
from . import views

urlpatterns = [
    path('', views.ContractorDash, name = 'ContractDash'),
    path('', views.VendorDash, name='VendorDash'),
]