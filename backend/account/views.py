from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import User
from .serializer import UserSerializer

@api_view(['GET'])
def getID(request):
    user = User.objects.all()
    serializer = UserSerializer(user, many = True)
    
    return Response(serializer.data)

@api_view(['POST'])
def postID(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

def say_hello(request):
    # pull account details from the database 
    return HttpResponse('User profile')