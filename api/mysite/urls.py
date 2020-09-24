from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register('profile', views.ProfileView)
router.register('experience', views.ExperienceView)
router.register('skill', views.SkillView)

urlpatterns = [
    path('', include(router.urls))
]