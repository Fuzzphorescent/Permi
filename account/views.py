from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view

api_view(['GET'])
def getID(request):
    return Response()

def say_hello(request):
    # pull account details from the database 
    return HttpResponse('User profile')