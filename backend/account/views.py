from .models import CustomUser
from .serializers import RegistrationSerializer
from rest_framework import viewsets


class RegisViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = RegistrationSerializer
