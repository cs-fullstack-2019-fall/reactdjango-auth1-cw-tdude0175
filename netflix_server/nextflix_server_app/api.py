from .models import NetflixModel , UserModel
from rest_framework import viewsets
from .serailizer import NetflixSerializer , UserSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = UserModel.objects.all()
    serializer_class = UserSerializer


class NetflixViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = NetflixModel.objects.all()
    serializer_class = NetflixSerializer