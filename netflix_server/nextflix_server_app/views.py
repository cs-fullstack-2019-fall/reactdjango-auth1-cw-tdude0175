from django.shortcuts import render
from django.http import HttpResponse
from .models import NetflixModel
from .serailizer import NetflixSerializer
# Create your views here.

def userAuthentication(req):
    return HttpResponse("false");