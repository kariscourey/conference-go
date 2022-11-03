from django.utils import timezone

from common.json import ModelEncoder

from .models import User


class AccountListEncoder(ModelEncoder):
    model = User
    properties = ["email", "first_name", "last_name"]


class AccountDetailEncoder(ModelEncoder):
    model = User
    properties = ["email", "first_name", "last_name", "is_active"]

    def get_extra_data(self, o):
        return {"updated": timezone.now()}
