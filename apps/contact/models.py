from django.db import models
from django.utils import timezone

class Contact(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=255)
    message = models.TextField(blank=True, max_length=1000)
    budget = models.CharField(max_length=255, blank=True)
    date = models.DateTimeField(default=timezone.now)
    subject =       models.CharField(max_length=100, blank=True)
    class Meta:
        ordering = ('-date', )

    def __str__(self):
        return self.email 