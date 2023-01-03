from django.db import models

class Category(models.Model):
    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'
    
    name = models.CharField(unique=True, max_length=126)
    slug = models.SlugField(unique=True, max_length=252)
    parent = models.ForeignKey('self', related_name='children', on_delete=models.CASCADE, blank=True, null=True)
    views = models.IntegerField(default=0, blank=True)

    def __str__(self):
        return self.name

    def get_view_count(self):
        views = ViewCount.objects.filter(category=self).count()
        return views

class ViewCount(models.Model):
    category = models.ForeignKey(Category, related_name='category_view_count', on_delete=models.CASCADE)
    ip_address = models.CharField(max_length=126)

    def __str__(self):
        return f"{self.ip_address}"
