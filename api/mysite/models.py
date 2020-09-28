from django.db import models

# Create your models here.
class Profile(models.Model):
    name = models.CharField(max_length=10)
    birthday = models.CharField(max_length=20)
    university = models.CharField(max_length=20)
    major = models.CharField(max_length=20)
    email = models.CharField(max_length=20)
    blog = models.CharField(max_length=50)
    git = models.CharField(max_length=50)

class Experience(models.Model):
    title = models.CharField(max_length=50)
    start_date = models.DateField(auto_now_add=True)
    end_date = models.DateField()
    institution = models.CharField(max_length=20)
    memo = models.CharField(max_length=500)

class Skill(models.Model):
    certification = models.CharField(max_length=50, null=True)
    certification_num = models.CharField(max_length=50, null=True)
    programming = models.CharField(max_length=30, null=True)
    degree = models.CharField(max_length=10, null=True)
    memo = models.CharField(max_length=100, null=True)

