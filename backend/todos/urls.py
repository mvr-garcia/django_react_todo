"""ToDos URL Configuration
"""
from django.urls import path
from .views import TodoListView, TodoRetrieveView

app_name = "todos"
urlpatterns = [
    path('', TodoListView.as_view()),
    path('<int:pk>/', TodoRetrieveView.as_view()),
]
