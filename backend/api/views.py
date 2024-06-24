from django.shortcuts import render
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import * 
from rest_framework import status
from .models import *
from rest_framework.decorators import permission_classes, api_view
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
import json 
from django.contrib.auth import authenticate
from django.core.paginator import Paginator
from rest_framework.decorators import api_view
from django.contrib.auth.hashers import check_password, make_password
from rest_framework.pagination import PageNumberPagination
from django.db import transaction
from rest_framework_simplejwt.tokens import UntypedToken
from rest_framework_simplejwt.exceptions import InvalidToken, TokenError
from django.contrib.auth import get_user_model
from datetime import timedelta
from django.utils import timezone

User = get_user_model()
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from django.utils.encoding import force_str
from .serializers import MyTokenObtainPairSerializer
from .models import MyUser  # Adjust import as needed

@api_view(['POST'])
def custom_token_obtain_pair(request):
    email = request.data.get('email')
    password = request.data.get('password')
    try:
        user = MyUser.objects.get(email=email)
    except Exception as e:
        return Response({'message':'Invalid Credentials'}, status=status.HTTP_401_UNAUTHORIZED)

    if user is not None and user.check_password(password):
        refresh = RefreshToken.for_user(user)
        print(user)
        # Add custom claims
        refresh['email'] = user.email
        refresh['is_superuser'] = user.is_superuser
        refresh['is_member'] = user.is_member
        refresh['is_active'] = user.is_active

        data = {
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        }

        # Handle superuser token lifetime
        if user.is_superuser:
            new_token = refresh.access_token
            new_token.set_exp(lifetime=SUPERUSER_LIFETIME)
            data['access'] = str(new_token)
        
        return Response(data, status=status.HTTP_200_OK)
    else:
        return Response({'message': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def validate_token(request):
    
    return Response({'message':'Token is Valid' })


@api_view(['GET'])
def get_articles(request):
    articles = Article.objects.all()
    paginator = PageNumberPagination()
    paginator.page_size = 20
    result_page = paginator.paginate_queryset(articles, request)
    serializer = ArticleSerializer(result_page, many=True)
    return paginator.get_paginated_response(serializer.data)


@api_view(['GET'])
def get_article(request, article_id):
    if article_id:
        article_id = int(article_id)
        article = Article.objects.get(id=article_id)
        article = ArticleSerializer(article, many=False)
        article = article.data
        return Response({'message':'Everything was successful', 'article':article}, status=status.HTTP_200_OK)
    elif not article_id:
        return Response({'message':'Article Name was not provided', 'article':article}, status=status.HTTP_400_BAD_REQUEST)



@permission_classes([IsAuthenticated])
@api_view(['POST'])
def create_article(request):
    message = None 
    response_status = None 
    content = request.POST.get('content')
    user = request.user
    article_name = request.POST.get('article_name')
    article_category = request.POST.get('article_category')
    if article_category:
        article_category = int(article_category)
    article_img = request.FILES.get('article_img')
    category = ArticleCategory.objects.get(id=article_category)
    if category and article_name and content and user:
        new_article = Article.objects.create(
            user=user,
            name=article_name,
            category=category,
            img=article_img,
            content=content,
        )
        if request.user.is_superuser:
            new_article.approved = True
        else:
            new_article.approved = False

        new_article.save()
        response_status = status.HTTP_200_OK
        message = "Everything went successfully"
    else:
        response_status = status.HTTP_400_BAD_REQUEST
        message = "Something went wrong"

    return Response({'message':message,}, status=response_status)

@permission_classes([IsAuthenticated])
@api_view(['POST'])
def create_article_category(request):
    try:
        request_body = json.loads(request.body)
        name = request_body.get('category_name')
        user = request.user 
        if name and user:
            article_category = ArticleCategory.objects.create(
                name=name,
                user=user,
            )
            article_category.save()

            return Response({'message':'Success', })
    except Exception as e:
        print(e)
        return Response({'message':str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['GET'])
def get_categories(request):
        categories = ArticleCategory.objects.all()
        categories = ArticleCategorySerializer(categories, many=True)
        return Response({'message':'Success', 'categories':categories.data}, status=status.HTTP_200_OK)



@api_view(['GET'])
def search_articles(request):

    message = None 
    response_status = None 
    articles = None
    query = request.GET.get('search-query')

    if query:
        articles = Article.objects.filter(name__icontains=query)
        articles = ArticleSerializer(articles, many=True)
        articles = articles.data
        message = "Everything went successfullY"
        response_status = status.HTTP_200_OK

    if not query:
        message = "Search Que was not provided"
        response_status = status.HTTP_400_BAD_REQUEST

    return Response({'message':message, 'blogs':articles}, status=response_status)


@api_view(['POST'])
def register_user(request):
    
    request_body = json.loads(request.body)

    email = request_body.get('email')
    password = request_body.get('password')
    first_name = request_body.get('firstName')
    last_name = request_body.get('lastName')
    speciality = request_body.get('speciality')
    user_status = request_body.get('status')
    country = request_body.get('country')
    phoneNumber = request_body.get('phoneNumber')
    registrationBody = request_body.get('registrationBody')

    if not email or not password:
        return Response({'message': 'Email and password are required'}, status=status.HTTP_400_BAD_REQUEST)

    if User.objects.filter(email=email).exists():
        return Response({'message': 'User already exists'}, status=status.HTTP_409_CONFLICT)
    try:
        user = User.objects.create_user(
                email=email,
                password=password,
                first_name=first_name,
                last_name=last_name,
                speciality=speciality,
                status=user_status,
                registration_body=registrationBody,
                country=country,
                phone_number=phoneNumber,
            )
        user.save()
        return Response({'message': 'User account created successfully'}, status=status.HTTP_201_CREATED)
    except Exception as e:
        print(e)
        return Response({'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)



@api_view(['POST'])
def hide_questions(request):
    try:
        request_body = json.loads(request.body)
        text = request_body.get('q_text')
        user = request.user

        new_hidden_question = HiddenQuestion.objects.create(
            text=text,
            user=user,
        )
        new_hidden_question.save()

        return Response({'message':'Success'}, status=status.HTTP_200_OK)
    except Exception as e:
        print('Error is :', e)
        return Response({'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['GET'])
def get_user_hidden_questions(request):
    try:
        user = request.user
        hidden_questions = HiddenQuestion.objects.filter(user=user)
        hidden_questions = HiddenQuestionSerializer(hidden_questions, many=True)
        return Response({'message':'success', 'questions':hidden_questions.data}, status=status.HTTP_200_OK)
    except Exception as e:
        print('Error is :', e)
        return Response({'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['POST'])
def edit_article(request):

    try:
        request_body = json.loads(request.body)
        article_id = request_body.get('art_id')
        new_text = request_body.get('text')
        if article_id:
            article_id = int(article_id)
            article = Article.objects.get(id=article_id)
            article.content = new_text
            article.save()
        else:
            return Response({'message':'Article Id was not provided'}, status=status.HTTP_400_BAD_REQUEST)

        return Response({'message':'Success', 'article':article})
    except Exception as e:
        print("Error is ", e)
        return Response({'message':str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_my_articles(request):
    try:
        articles = Article.objects.filter(user=request.user)
        articles = ArticleSerializer(articles, many=True)

        return Response({'message':'Success', 'articles':articles.data}, status=status.HTTP_200_OK)
    except Exception as e:
        print(e)
        return Response({'message':str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def delete_article(request):
    user = request.user
    request_body = json.loads(request.body)
    article_id = request_body.get('id')
    if article_id:
        article_id = int(article_id)
    else:
        return Response({'message':'Article Id was not provided',}, status=status.HTTP_400_BAD_REQUEST)    
    article = Article.objects.get(id=article_id)
    
    if article.user == user:
        article.delete()

    return Response({'message':'Success',}, status=status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def edit_article(request):
    id = request.POST.get('id')
    img = request.FILES.get('article_img')
    category_id = request.POST.get('article_category')
    name = request.POST.get('article_name')
    content = request.POST.get('content')

    if id:
        id = int(id)
        article = Article.objects.get(id=id)
        if category_id:
            category_id = int(category_id)
            category = ArticleCategory(id=category_id)
        article.category = category
        article.name = name
        article.content = content
        if img:
            article.img = img
        article.save();
        article = ArticleSerializer(article, many=False).data
    return Response({'message':'Sucess', 'article':article}, status=status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def hidden_questions(request):
    try:
        questions = HiddenQuestion.objects.filter(user=request.user)
        questions = HiddenQuestionSerializer(questions, many=True).data
        return Response({'message':'Success', 'questions':questions}, status=status.HTTP_200_OK)
    except Exception as e:
        print(e)
        return Response({'message':str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def hide_question(request):
    try:
        request_body = json.loads(request.body)
        text = request_body.get('text')
        user = request.user

        new_question_to_hide = HiddenQuestion.objects.create(
            user=user,
            text=text        
        )

        new_question_to_hide.save()
        questions = HiddenQuestion.objects.filter(user=user)
        questions = HiddenQuestionSerializer(questions, many=True).data

        return Response({'message': 'Success', 'questions':questions}, status=status.HTTP_200_OK)
    except Exception as e:
        print(e)
        return Response({'message':str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def show_question(request):
    try:    
        user = request.user
        request_body = json.loads(request.body)
        text = request_body.get('text')
        question = HiddenQuestion.objects.get(user=user, text=text)
        if question:
            question.delete()
        questions = HiddenQuestion.objects.filter(user=user)
        questions = HiddenQuestionSerializer(questions, many=True).data
        return Response({'message':'Success', 'questions':questions}, status=status.HTTP_200_OK)    
    except Exception as e:
        print(e)
        return Response({'message':str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)



@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_profile(request):
    profile = MyUser.objects.get(id=int(request.user.id))
    profile = MyUserSerializer(profile, many=False).data

    return Response({'message': 'Success', 'profile': profile}, status=status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def edit_profile(request):
    try:
        request_body = json.loads(request.body)
        first_name = request_body.get('first_name')
        last_name = request_body.get('last_name')
        email = request_body.get('email')
        country = request_body.get('country')
        phone_number = request_body.get('phone_number')
        my_status = request_body.get('status')
        speciality = request_body.get('speciality')
        registration_body = request_body.get('registration_body')

        profile = MyUser.objects.get(id=int(request.user.id))

        if profile:
            profile.first_name = first_name
            profile.last_name = last_name
            profile.email = email
            profile.registration_body = registration_body
            profile.status = my_status
            profile.speciality = speciality
            profile.phone_number = phone_number
            profile.country = country
            profile.save()

        return Response({'message':'Success', }, status=status.HTTP_200_OK)
    except Exception as e:
        print(e)
        return Response({'message':str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def change_password(request):
    request_body = json.loads(request.body)

    current_password = request_body.get('current_password')
    new_password = request_body.get('password')  

    if not current_password or not new_password:
        return Response({'message': 'Current password and new password are required.'}, status=status.HTTP_400_BAD_REQUEST)

    try:
        profile = MyUser.objects.get(id=request.user.id)

        if not check_password(current_password, profile.password):
            return Response({'message': 'Current password is incorrect.'}, status=status.HTTP_400_BAD_REQUEST)

        profile.set_password(new_password)
        profile.save()

        return Response({'message': 'Password changed successfully.'}, status=status.HTTP_200_OK)
    except MyUser.DoesNotExist:
        return Response({'message': 'User not found.'}, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        return Response({'message': f'An error occurred: {str(e)}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['GET'])
def get_paginated_blogs(request):
    blogs = None
    blogs = Article.objects.all()
    paginator = Paginator(blogs, 3)
    page_number = request.GET.get("page")
    blogs = paginator.get_page(page_number)
    blogs = ArticleSerializer(blogs, many=True).data

    return Response({'message': 'Success', 'blogs':blogs}, status=status.HTTP_200_OK)


@api_view(['GET'])
def get_blog(request):
    try:
        name = request.GET.get('blog_name')
        blog = Article.objects.get(name=name)

        return Response({'message':'Success', 'blog':blog}, status=status.HTTP_200_OK)
    except Exception as e:
        print(e)
        return Response({'message':str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['GET'])
def get_categorized_blogs(request):
    try:
        category_name = request.GET.get('category_name')

        category = ArticleCategory.objects.get(name=category_name)
        blogs = Article.objects.filter(category=category)
        blogs = ArticleSerializer(blogs, many=True).data
        return Response({'message':'Success', 'blogs':blogs}, status=status.HTTP_200_OK)
    except Exception as e:
        print(e)
        return Response({'message':str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['GET'])
def get_latest_blogs(request):
    try:
        blogs = Article.objects.all().order_by('-added_on')[:5]
        blogs = ArticleSerializer(blogs, many=True).data
        return Response({'message':'Success', 'blogs':blogs}, status=status.HTTP_200_OK)
    except Exception as e:
        print(e)
        return Response({'message':str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)



@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_membership(request):
    user = request.user
    request_body = json.loads(request.body)
    duration = request_body.get('duration')
    order_id = request_body.get('order_id')
    
    if duration == 'Year':
        duration = 365
    elif duration == 'Month':
        duration = 30
    else:
        return Response({'error': 'Invalid duration value.'}, status=status.HTTP_400_BAD_REQUEST)

    if not order_id:
        return Response({'error': 'Order ID is required.'}, status=status.HTTP_400_BAD_REQUEST)
    
    with transaction.atomic():
        if not user.is_member:
            expiration_date = timezone.now().date() + timedelta(days=duration)
            new_membership = MemberShip.objects.create(
                user=user,
                order_id=order_id,
                expiration_date=expiration_date
            )
            user.is_member = True
            user.save()
        else:
            try:
                user_membership = MemberShip.objects.get(user=user)
                user_membership.expiration_date += timedelta(days=duration)
                user_membership.save()
            except MemberShip.DoesNotExist:
                return Response({'error': 'Membership record not found.'}, status=status.HTTP_404_NOT_FOUND)

    return Response({'message': 'Success'}, status=status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_users(request, page):
    try:
        if request.user.is_superuser:
            users = MyUser.objects.all()
            count = users.count()
            paginator = Paginator(users, 3)
            users = paginator.get_page(int(page))
            users = MyUserSerializer(users, many=True).data
            return Response({'message':'Success', 'users':users, 'count':count}, status=status.HTTP_200_OK)
        else:
            return Response({'message':'User is not Admin'}, status=status.HTTP_401_UNAUTHORIZED)
    except Exception as e:
        print(e)
        return Response({'message':str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)    
    


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_user(request, user_id):
    try:
        if user_id:
            user_id = int(user_id)
        user = MyUser.objects.get(id=user_id)
        user = MyUserSerializer(user, many=False).data
        return Response({'message':'Success', 'user':user}, status=status.HTTP_200_OK)
    except Exception as e:
        print(e)
        return Response({'message':str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_memberships(request, page):

    memberships = MemberShip.objects.all()
    count = memberships.count()
    paginator = Paginator(memberships, 2)
    memberships = paginator.get_page(int(page))
    memberships = MembershipSerializer(memberships, many=True).data

    return Response({'message':'Success', 'count':count, 'memberships':memberships}, status=status.HTTP_200_OK)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_all_blogs(request, page):

    blogs = Article.objects.all()
    count = blogs.count()
    paginator = Paginator(blogs, 2)
    blogs = paginator.get_page(int(page))
    blogs = ArticleSerializer(blogs, many=True).data

    return Response({'message':'Success', 'count':count, 'blogs':blogs}, status=status.HTTP_200_OK)



@api_view(['POST'])
@permission_classes([IsAuthenticated])
def approve_blog(request):
        request_body = json.loads(request.body) 
        blog_id = request_body.get('blog_id')

        if blog_id:
            blog_id = int(blog_id)
            blog = Article.objects.get(id=blog_id)

            if blog.approved:
                blog.approved = False
                blog.save()
            else:
                blog.approved = True
                blog.save()
            blog = ArticleSerializer(blog, many=False).data    
        else:
            return Response({'message':'Blog Id was not provided'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
        return Response({'message':'Success', 'blog':blog}, status=status.HTTP_200_OK)


@api_view(['GET'])
def get_blog_by_id(request, id):

        if id:
            id = int(id)        
            blog = Article.objects.get(id=id)
            blog = ArticleSerializer(blog, many=False).data 
        return Response({'message':'Success', 'blog':blog}, status=status.HTTP_200_OK)


@api_view(['POST'])
def check_token(request):
    request_body = json.loads(request.body)
    token = request_body.get('token')
    try:
        UntypedToken(token)
        return Response({'valid': True}, status=status.HTTP_200_OK)
    except (InvalidToken, TokenError):
        return Response({'valid': False}, status=status.HTTP_401_UNAUTHORIZED)