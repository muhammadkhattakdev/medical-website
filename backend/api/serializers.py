from rest_framework import serializers
from .models import *
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from six import text_type
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
import datetime
SUPERUSER_LIFETIME = datetime.timedelta(minutes=50)

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from django.utils.encoding import force_str

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):

    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['email'] = user.email
        token['is_superuser'] = user.is_superuser
        token['is_member'] = user.is_member
        token['is_active'] = user.is_active
        return token

    def validate(self, attrs):
        print("Attributes:", attrs)
        data = super().validate(attrs)
        print("Validated Data:", data)
        refresh = self.get_token(self.user)
        print("Refresh Token:", refresh)
        data['refresh'] = str(refresh)
        
        if self.user.is_superuser:
            new_token = refresh.access_token
            new_token.set_exp(lifetime=SUPERUSER_LIFETIME)
            print("New Access Token for Superuser:", new_token)
            data['access'] = str(new_token)
        else:
            data['access'] = str(refresh.access_token)
        
        print("Final Data:", data)
        return data



class FavoriteArticles(serializers.ModelSerializer):

    class Meta:
        model = FavoriteArticles
        fields = "__all__"

class MyUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyUser
        fields = [
            'id', 'email', 'first_name', 'last_name', 'phone_number', 'country',
            'registration_body', 'is_superuser', 'is_member', 'status', 'speciality', 'is_active', 'is_staff', 'date_joined'
        ]
        read_only_fields = ['is_active', 'is_staff', 'date_joined']


class HiddenQuestionSerializer(serializers.ModelSerializer):

    class Meta:
        model = HiddenQuestion
        fields = "__all__"

class ArticleCategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = ArticleCategory
        fields = "__all__"

class MembershipSerializer(serializers.ModelSerializer):
    user = MyUserSerializer()
    class Meta:
        model = MemberShip
        fields = "__all__"


class ArticleSerializer(serializers.ModelSerializer):
    img = serializers.SerializerMethodField()
    user = MyUserSerializer()
    category = ArticleCategorySerializer()

    class Meta:
        model = Article
        fields = "__all__"

    def get_img(self, obj):
        request = self.context.get('request')
        if obj.img and hasattr(obj.img, 'url'):
            img_url = obj.img.url
            return request.build_absolute_uri(img_url) if request else img_url
        else:
            return None
