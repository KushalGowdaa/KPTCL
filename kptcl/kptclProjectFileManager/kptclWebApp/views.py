from django.shortcuts import render
from . import models
import datetime
# Create your views here.

def ContractorDash (request):
    return render(request, "dashboard/Contractor_dash.html", None)


def VendorDash (request) :
    return render(request, "dashboard/Vendor_dash.html", None)