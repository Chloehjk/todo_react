from .models import Customer, Country

class CustomerSerializer(ModelSerializer):
    
    class Meta:
        model = Customer
        fields = ['seq', '나이', '성별', '이름','국적', '국가명']
