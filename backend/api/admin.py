from django.contrib import admin
from .models import * 



class UserAdmin(admin.ModelAdmin):
    list_display = ['first_name']


admin.site.register(MyUser, UserAdmin)

class MemberAdmin(admin.ModelAdmin):

    list_display = ['user', 'expiration_date']

class BlogAdmin(admin.ModelAdmin):

    list_display = ['name']

admin.site.register(Article, BlogAdmin)
admin.site.register(MemberShip, MemberAdmin)