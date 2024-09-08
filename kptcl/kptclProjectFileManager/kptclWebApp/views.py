from django.shortcuts import render
from . import models
# Create your views here.

def dashboard(request):
    return render(request, "dashboard/Contractor_dash.html", None)

