from rest_framework import serializers
from .models import CustomUser
from rest_framework.authtoken.views import Token


class RegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = [
            "email",
            "username",
            "password",
        ]

        extra_kwargs = {"password": {
            "write_only": True,
            "required": True
        }}

    def create(self, validated_data):
        # print(validated_data)
        # print(self.context['request'].data)
        user = CustomUser(
            username=validated_data['username'],
            email=validated_data['email']
        )
        user.set_password(validated_data['password'])
        user.save()
        Token.objects.create(user=user)
        return user
