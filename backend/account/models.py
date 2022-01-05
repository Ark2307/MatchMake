from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    about = models.TextField(max_length=100)
    addr = models.TextField(max_length=75)
