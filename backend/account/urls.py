from django.urls import path, include
from .views import RegisViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('users', RegisViewSet)

urlpatterns = [
    path('account/', include(router.urls)),
]
