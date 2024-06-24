from django.db import models
from django.contrib.auth.models import User 
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin, Group, Permission
from django.db import models
from django.utils import timezone
from django.utils import timezone
from datetime import timedelta


class MyUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self.create_user(email, password, **extra_fields)

class MyUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=30, verbose_name='First Name')
    last_name = models.CharField(max_length=30, verbose_name='Last Name')
    phone_number = models.CharField(max_length=15, verbose_name='Phone Number', blank=True, null=True)
    country = models.CharField(max_length=50, verbose_name='Country', blank=True, null=True)
    registration_body = models.CharField(max_length=5000000, verbose_name='Registration Body', blank=True, null=True)
    status = models.CharField(max_length=500000, verbose_name='Status', blank=True, null=True)
    speciality = models.CharField(max_length=1000000, verbose_name='Speciality', blank=True, null=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_member = models.BooleanField(default=False, null=True)  # Added is_member field
    date_joined = models.DateTimeField(default=timezone.now)

    groups = models.ManyToManyField(
        Group,
        related_name='myuser_set',  # Custom related_name to avoid clashes
        blank=True,
        help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.',
        related_query_name='myuser',
    )
    user_permissions = models.ManyToManyField(
        Permission,
        related_name='myuser_set',  # Custom related_name to avoid clashes
        blank=True,
        help_text='Specific permissions for this user.',
        related_query_name='myuser',
    )

    objects = MyUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.email

class ArticleCategory(models.Model):

    name = models.CharField(max_length=10000)
    user = models.ForeignKey(to=MyUser, on_delete=models.DO_NOTHING, null=True)

    def __str__(self):

        return f"{self.name} + {self.user.email}"


class Article(models.Model):

    name = models.CharField(max_length=100000)
    img = models.ImageField(upload_to='blog_imgs', default='', blank=False, null=True)
    user = models.ForeignKey(to=MyUser, on_delete=models.CASCADE)
    content = models.TextField()
    category = models.ForeignKey(to=ArticleCategory, on_delete=models.CASCADE)
    added_on = models.DateField(auto_now_add=True)
    approved = models.BooleanField(default=False, null=False)
    last_updated = models.DateField(blank=True, null=True)

    def __str__(self):

        return self.name


class FavoriteArticles(models.Model):

    user = models.ForeignKey(to=MyUser, on_delete=models.CASCADE)
    articles = models.ManyToManyField(to=Article)

    def __str__(self):

        return self.user.username


class MemberShip(models.Model):
    user = models.ForeignKey(to=MyUser, on_delete=models.CASCADE)
    purchase_date = models.DateField(auto_now_add=True,null=True)
    order_id = models.CharField(max_length=100, null=True)
    expiration_date = models.DateField(null=True, blank=True)

    def __str__(self):
        return f"Membership of {self.user.email}"

    def is_active(self):
        return timezone.now().date() <= self.expiration_date if self.expiration_date else False

    def extend_membership(self, days):
        self.expiration_date += timedelta(days=days)
        self.save()

class HiddenQuestion(models.Model):
    text = models.TextField()
    user = models.ForeignKey(to=MyUser, on_delete=models.CASCADE)

    def __str__(self):

        return f"{self.user.first_name} {self.user.last_name}"






