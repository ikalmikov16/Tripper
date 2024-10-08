from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Trip(models.Model):
    title = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    start_date = models.DateField()
    end_date = models.DateField()
    created = models.DateTimeField(auto_now_add=True)

    user = models.ForeignKey(User, related_name='user', on_delete=models.CASCADE, null=True)

class Event(models.Model):
    title = models.CharField(max_length=100)
    place = models.CharField(max_length=100)
    date = models.DateField()
    start_time = models.TimeField()
    end_time = models.TimeField()
    
    trip = models.ForeignKey(Trip, related_name='events', on_delete=models.CASCADE)