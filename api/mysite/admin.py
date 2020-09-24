from django.contrib import admin
from .models import Profile, Experience, Skill

# Register your models here.
@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ['name', 'birthday', 'university', 'major', 'email', 'blog', 'git']
    list_display_links = ['name', 'birthday', 'university', 'major', 'email', 'blog', 'git']

@admin.register(Experience)
class ExperienceAdmin(admin.ModelAdmin):
    list_display = ['title', 'when', 'institution', 'memo']
    list_display_links = ['title', 'when', 'institution', 'memo']

@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ['skillname','degree','memo']
    list_display_links = ['skillname','degree','memo']