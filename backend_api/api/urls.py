from django.contrib import admin
from django.urls import path
from .views import my_api_view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', my_api_view, name="api")
]
