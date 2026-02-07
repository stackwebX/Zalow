from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import StatusCheck
from .serializers import StatusCheckSerializer

@api_view(["GET"])
def root(request):
    return Response({"message": "Hello World"})

class StatusCheckViewSet(viewsets.ModelViewSet):
    queryset = StatusCheck.objects.all()
    serializer_class = StatusCheckSerializer
