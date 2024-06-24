from django.urls import path
from . import views

urlpatterns = [
    path('get-token/', views.custom_token_obtain_pair, name='get-token'),   
    path('register/', views.register_user, name='register'),
    path('create-article/', views.create_article, name='create-article'),
    path('create-article-category/', views.create_article_category, name='create-article-category'),
    path('get-article-categories/', views.get_categories, name='create-article-category'),
    path('my-articles/', views.get_my_articles, name='get-my-articles'),
    path('delete-article/', views.delete_article, name='delete-article'),
    path('blog/<article_id>', views.get_article, name='get-article'),
    path('edit-article/', views.edit_article, name='edit-article'),
    path('hidden-questions/', views.hidden_questions, name='hidden-questions'),
    path('hide-question/', views.hide_question, name='hide-question'),
    path('show-question/', views.show_question, name='show-question'),
    path('get-user-profile/', views.user_profile, name='user-profile'),
    path('edit-profile/', views.edit_profile, name='edit-profile'),
    path('change-password/', views.change_password, name='change-password'),
    path('get-paginated-blogs/', views.get_paginated_blogs, name='paginated-blogs'),
    path('get-blog/', views.get_blog, name='get-blog'),
    path('categorized-blogs/', views.get_categorized_blogs, name='categorized-blogs'),
    path('latest-blogs/', views.get_latest_blogs, name='latest-blogs'),
    path('validate-token/', views.validate_token, name='validate-token'),
    path('buy-membership/', views.create_membership, name='buy-membership'),
    path('users/<page>', views.get_users, name='users'),
    path('user/<user_id>', views.get_user, name='user'),
    path('memberships/<page>', views.get_memberships, name='memberships'),
    path('all-blogs/<page>', views.get_all_blogs, name='all-blogs'),
    path('approve-blog/', views.approve_blog, name='approve-blog'),
    path('get-blog/<id>', views.get_blog_by_id, name='get-blog-id'),
    path('check-token/', views.check_token, name='check-token'),
    path('search-blogs/', views.search_articles, name='search-articles')
    
]