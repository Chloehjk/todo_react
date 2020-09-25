from django.db import models

# Create your models here.
class Customer(models.Model):
    seq = models.IntegerField(primary_key=seq)
    나이 = models.IntegerField()
    성별 = models.CharField(max_length=6)
    이름 = models.CharField(max_length=10)
    국적 = models.ForeignKey(Country())

class Country(models.Model):
    seq = models.IntegerField(primary_key=seq)
    국가명 = models.IntegerField(max_length=20)
