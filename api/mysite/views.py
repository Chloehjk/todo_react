from django.shortcuts import render
from .models import Profile, Experience, Skill
from .serializer import ProfileSerializer, ExperienceSerializer, SkillSerializer
from rest_framework.viewsets import ModelViewSet, ReadOnlyModelViewSet
from django.shortcuts import render, redirect
from django.http import HttpResponse, Http404



# Create your views here.
class ProfileView(ModelViewSet):
    
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

class ExperienceView(ModelViewSet):
    
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer


class SkillView(ModelViewSet):
    
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer