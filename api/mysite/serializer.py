from rest_framework.serializers import ModelSerializer
from .models import Profile, Experience, Skill

class ProfileSerializer(ModelSerializer):
    
    class Meta:
        model = Profile
        fields = '__all__'
        
class ExperienceSerializer(ModelSerializer):
    
    class Meta:
        model = Experience
        fields = '__all__'
        
class SkillSerializer(ModelSerializer):
    
    class Meta:
        model = Skill
        fields = '__all__'
        