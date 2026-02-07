from rest_framework import serializers
from .models import StatusCheck

class StatusCheckSerializer(serializers.ModelSerializer):
    class Meta:
        model = StatusCheck
        fields = ["id", "client_name", "timestamp"]
        read_only_fields = ["id", "timestamp"]
