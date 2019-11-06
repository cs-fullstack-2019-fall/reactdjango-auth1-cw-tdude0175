from django.urls import include, path
from rest_framework import routers
from . import api
from . import views


router = routers.DefaultRouter()
router.register('movies', api.NetflixViewSet)
router.register('users',api.UserViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = \
    [
        path('', include(router.urls)),
        path('user_authentication/', views.userAuthentication , name="userAuthentication"),

    ]
