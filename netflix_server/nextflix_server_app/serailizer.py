from .models import NetflixModel
from rest_framework import serializers


class NetflixSerializer(serializers.ModelSerializer):
    class Meta:
        model = NetflixModel
        fields = "__all__"