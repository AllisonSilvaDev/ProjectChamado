from django.db import models

class Patrimonios(models.Model):
    localizacao = models.CharField(max_length=8)
    ni = models.CharField(max_length=255)
    descricao = models.TextField()
