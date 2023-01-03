from .views import *
from django.urls import path

urlpatterns = [
    path('list', BlogListView.as_view()),
    path('by_category', ListPostByCategoryView.as_view()),
    path('detail/<slug>', PostDetailView.as_view()),
    path('search', SearchBlogView.as_view()),
]