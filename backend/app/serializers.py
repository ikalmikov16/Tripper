from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Trip, Event

class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'password']

class SignupSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'username', 'password']

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'
        # ['id', 'title']
        # , 'place', 'start_time', 'end_time']

class TripSerializer(serializers.ModelSerializer):
    events = EventSerializer(many=True)

    class Meta:
        model = Trip
        fields = '__all__'
        # ['id', 'title', 'events']
        # , 'location', 'start_date', 'end_date', 'events', 'created', 'user']

    # def update():



class SignupSerializer(serializers.ModelSerializer):
    username = serializers.CharField(required=True)
    password = serializers.CharField(write_only=True, required=True, style={'input_type': 'password'})

    class Meta:
        model = User
        fields = ['username', 'password']

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            password=validated_data['password']
        )
        return user
