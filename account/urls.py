from django.urls import path
from . import views

# URLConf
urlpatterns = [
    path('profile/', views.say_hello)
]