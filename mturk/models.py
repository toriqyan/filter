from __future__ import unicode_literals

from django.db import models

# Create your models here.

class Task(models.Model):
	occasion = models.IntegerField(default=0)
	season = models.IntegerField(default=0)
	style = models.IntegerField(default=0)
	ethnicity = models.IntegerField(default=0)
	body_shape = models.IntegerField(default=0)
