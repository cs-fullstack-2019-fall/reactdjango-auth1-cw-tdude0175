from .models import NetflixModel
from rest_framework import viewsets
from .serailizer import NetflixSerializer

class NetflixViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = NetflixModel.objects.all()
    serializer_class = NetflixSerializer