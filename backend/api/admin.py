from django.contrib import admin
from .models import StatusCheck

@admin.register(StatusCheck)
class StatusCheckAdmin(admin.ModelAdmin):
    list_display = ("id", "client_name", "timestamp")
    search_fields = ("client_name",)
    ordering = ("-timestamp",)
