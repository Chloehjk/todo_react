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
    when = models.CharField(max_length=50)
    institution = models.CharField(max_length=20, null=True)
    memo = models.CharField(max_length=500)

class Skill(models.Model):
    skillname = models.CharField(max_length=50)
    degree = models.CharField(max_length=30)
    memo = models.CharField(max_length=100)