from django.shortcuts import render
from django.http import HttpResponse
from .models import NetflixModel , UserModel
from .serailizer import NetflixSerializer
from json import loads
# Create your views here.

def userAuthentication(req):
    bodyInformation = loads(req.body);

    userInformation = UserModel.objects.filter(username = bodyInformation['username'])
    if(userInformation):
        if(userInformation[0].password == bodyInformation['password']):
            return HttpResponse(userInformation[0].id)
        else:
            return HttpResponse(False)

    return HttpResponse(False);