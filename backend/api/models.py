import uuid
from django.db import models

class StatusCheck(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    client_name = models.CharField(max_length=255)
    timestamp = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = "status_checks"
        ordering = ["-timestamp"]

    def __str__(self):
        return f"{self.client_name} @ {self.timestamp.isoformat()}"
