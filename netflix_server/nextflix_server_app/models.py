from django.db import models

# Create your models here.

class UserModel(models.Model):
    username = models.CharField(max_length=200, unique = True)
    password = models.CharField(max_length=200)

    def __str__(self):
        return f"{self.username}"

class NetflixModel(models.Model):
    movieTitle = models.CharField(max_length=200)
    rating = models.DecimalField(decimal_places=1, max_digits=2)
    movieLength = models.IntegerField()
    views = models.IntegerField()
    creator = models.ForeignKey(UserModel, on_delete=models.SET_NULL , null=True,blank=True)