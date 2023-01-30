from django.db import models
from apps.category.models import Category
from django.utils import timezone
from ckeditor.fields import RichTextField
from django.conf import settings
import uuid
User = settings.AUTH_USER_MODEL

def blog_thumbnail_directory(instance, filename):
    return 'blog/{0}/{1}'.format(instance.title, filename)

class Case(models.Model):
    title =         models.CharField(max_length=126, blank=True, null=True)
    thumbnail =     models.ImageField(upload_to=blog_thumbnail_directory, max_length=600, blank=True, null=True)
    slug=           models.SlugField(max_length=126, default=(uuid.uuid4), unique=True)
    category=       models.ForeignKey(Category, on_delete=models.PROTECT,blank=True, null=True)
    description=    models.TextField(max_length=252, blank=True, null=True)
    content =       RichTextField(blank=True, null=True)

    def __str__(self):
        return self.title

class Post(models.Model):

    class PostObjects(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(status='published')

    options = (
        ('draft', 'Draft'),
        ('published', 'Published'),
    )

    author =        models.ForeignKey(User, on_delete=models.CASCADE)
    title =         models.CharField(max_length=126, blank=True, null=True)
    thumbnail =     models.ImageField(upload_to=blog_thumbnail_directory, max_length=600, blank=True, null=True)
    slug=           models.SlugField(max_length=126, default=(uuid.uuid4), unique=True)
    category=       models.ForeignKey(Category, on_delete=models.PROTECT,blank=True, null=True)
    published=      models.DateTimeField(default=timezone.now)
    time_read=      models.IntegerField(blank=True, null=True)
    description=    models.TextField(max_length=252, blank=True, null=True)
    content =       RichTextField(blank=True, null=True)
    views =         models.IntegerField(default=0, blank=True)
    status =        models.CharField(max_length=10, choices=options, default='draft')
    objects =       models.Manager()    #default manager
    postobjects =   PostObjects() #custom manager

    class Meta:
        ordering = ('-published',)

    def __str__(self):
        return self.title

    def get_view_count(self):
        views = ViewCount.objects.filter(post=self).count()
        return views

    def get_status(self):
        status = self.status
        return status

class ViewCount(models.Model):
    post =  models.ForeignKey(Post, related_name='blogpost_view_count', on_delete=models.CASCADE)
    ip_address = models.CharField(max_length=126)

    def __str__(self):
        return f"{self.ip_address}"

