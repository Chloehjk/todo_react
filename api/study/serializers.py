from rest_framework.serializers import ModelSerializer,Serializer
from rest_framework import serializers
from rest_framework.validators import ValidationError
from .models import Students, Scores
from django.contrib.auth import get_user_model
from account.models import User
import re


class StudentBasicSerializer(Serializer):
    name = serializers.CharField()
    address = serializers.CharField()
    email = serializers.CharField()
    reg_user_id = serializers.IntegerField()
    
    def create(self, validated_data):
        Students.objects.create()
        return Students.objects.create(**validated_data)

    
    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.address = validated_data.get('name', instance.address)
        instance.email = validated_data.get('name', instance.email)
        instance.save()
        return instance


class ScoreBasicSerializer(Serializer):
    name = serializers.CharField()
    math = serializers.IntegerField()
    english = serializers.IntegerField()
    science = serializers.IntegerField()
    
    def create(self, validated_data):
        Scores.objects.create()
        return Scores.objects.create(**validated_data)

    
    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.math = validated_data.get('name', instance.math)
        instance.english = validated_data.get('name', instance.english)
        instance.science = validated_data.get('name', instance.science)
        instance.save()
        return instance


class UserSerializer(ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ['username']


class StudentSerializer(ModelSerializer):

   #reg_user = UserSerializer(read_only=True) #등록 때 사용하지 않겟다
    reg_user_username = serializers.ReadOnlyField(source='reg_user.username')
    reg_user_email = serializers.ReadOnlyField(source='reg_user.email')
    reg_phone_number = serializers.ReadOnlyField(source='reg_user.phone_number')
    reg_user = UserSerializer()

    
    class Meta:
        model = Students
        fields = '__all__'

    
    def validate_email(self, value):
        text = re.match('.+@.*\..+', value)
        if text == None:
            raise ValidationError('제대로 된 이메일 형식을 지켜주세요!')
        return value
            

    def validate_phone_number(self, value):
        result = re.match('01+[0-9]{3}-[0-9]{3,4}-[0-9]{3,4}', value)
        if result == None:
            raise ValidationError('전화번호 형식을 지켜주세요!')
        return value['phone_number']


class ScoreSerializer(ModelSerializer):
    
    username = serializers.ReadOnlyField(source='reg_user.username')
    email = serializers.ReadOnlyField(source='reg_user.email')
    phone_number = serializers.ReadOnlyField(source='reg_user.phone_number')
    

    class Meta:
        model = Scores
        fields = ['name', 'math', 'english', 'science', 'reg_user', 'username', 'email', 'phone_number']

        # def validate_name(self, value):
        #     #정규표현식, 숫자체크
        #     if len(value) < 3:
        #         raise ValidationError('3글자 이상 입력해주세요!')
        #     return value

    def validate_math(self, math):
        if not(0 < math < 100):
            raise ValidationError('0에서 100사이의 값만 입력해주세요')
        return math