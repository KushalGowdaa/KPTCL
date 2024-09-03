from django.shortcuts import render

# Create your views here.
def dashboard(request):
    return render(request, "dashboard/Contractor_dash.html", None)