from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from api.views import StatusCheckViewSet, root

router = DefaultRouter()
router.register(r"status", StatusCheckViewSet, basename="status")

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include([
        path("", root, name="root"),
        path("", include(router.urls)),
    ])),
]
