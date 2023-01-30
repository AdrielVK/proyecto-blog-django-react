from django.urls import path 
from .views import * 

urlpatterns = [
    path('', ContactsCreateView.as_view()),

]