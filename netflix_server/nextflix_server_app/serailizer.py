from .models import NetflixModel , UserModel
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model= UserModel
        fields = "__all__"


class NetflixSerializer(serializers.ModelSerializer):
    class Meta:
        model = NetflixModel
        fields = "__all__"