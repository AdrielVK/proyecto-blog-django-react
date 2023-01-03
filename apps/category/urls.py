from .views import *
from django.urls import path
from .views import ListCategoriesView

urlpatterns = [
    path('list', ListCategoriesView.as_view())
]