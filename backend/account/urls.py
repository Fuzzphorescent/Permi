from django.urls import path
from . import views

# URLConf
urlpatterns = [
    path('profile/', views.say_hello),
    path('', views.getID),
    path('post/', views.postID),
]