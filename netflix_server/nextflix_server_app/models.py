from django.db import models

# Create your models here.
class NetflixModel(models.Model):
    movieTitle = models.CharField(max_length=200)
    rating = models.DecimalField(decimal_places=1, max_digits=2)
    movieLength = models.IntegerField()
    views = models.IntegerField()