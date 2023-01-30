from .views import *
from django.urls import path
from django.views.decorators.csrf import csrf_protect


urlpatterns = [
    path('list', BlogListView.as_view()),
    path('by_category', ListPostsByCategoryView.as_view()),
    path('detail/<slug>', PostDetailView.as_view()),
    path('search', SearchBlogView.as_view()),
    path('author_list', AuthorBlogListView.as_view()),
    path('edit', EditBlogPostView.as_view()),
    path('draft', DraftBlogPostView.as_view()),
    path('publish', PublishBlogPostView.as_view()),
    path('delete/<slug>', DeleteBlogPostView.as_view()),
    path('create',CreateBlogPostView.as_view()),
    path('cases/<slug>', CreateCase.as_view()),
    path('cases', DeleteCase.as_view()),
]