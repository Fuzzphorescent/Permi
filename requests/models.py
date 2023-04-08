from django.db import models

class User(models.Model):
    reqtype = 'duty leave'
    fromid = 'xyz@gmail.com'
    toid = 'abc@yahoo.com'
    body = 'Test body'
    status = 'Rejected'
    forward_path = 'xyz@gmail.com -> abc@gmail.com -> pyq@gmail.com'
