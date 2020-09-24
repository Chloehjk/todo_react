from rest_framework.serializers import ModelSerializer
from .models import Profile, Experience, Skill

class ProfileSerializer(serializer.ModelSerializer):
    
    class Meta:
        model = Profile
        fields = '__all__'
        
class ExperienceSerializer(serializer.ModelSerializer):
    
    class Meta:
        model = Experience
        fields = '__all__'
        
class SkillSerializer(serializer.ModelSerializer):
    
    class Meta:
        model = Skill
        fields = '__all__'