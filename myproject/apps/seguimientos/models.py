from django.db import models
from apps.proyectos.models import Proyecto
# Create your models here.

class Tipodependencia (models.Model):
    tipodependencia = models.CharField(max_length=150)

    def __str__(self):
        return self.tipodependencia

class Estado (models.Model):
    estado = models.CharField(max_length=150)

    def __str__(self):
        return self.estado

class Pasos (models.Model):
    nivel = models.IntegerField()
    nombre = models.CharField(max_length=50)
    descripcion = models.CharField(max_length=250)

    def __str__(self):
        return self.nombre


class Seguimientos (models.Model):
    descripciontarea = models.CharField(max_length=150)
    duracion = models.IntegerField()
    tareadependencia = models.CharField(max_length=40, null=True, blank=True)
    diasdependencia = models.IntegerField()
    tipodependenciaid = models.ForeignKey(Tipodependencia, on_delete=models.CASCADE, null=True, blank=True)
    inicio = models.DateField()
    fin = models.DateField()
    responsable = models.CharField(max_length=40)
    fechafin = models.DateField()
    estadoid = models.ForeignKey(Estado, on_delete=models.CASCADE, null=True, blank=True)
    pasosid = models.ForeignKey(Pasos, on_delete=models.CASCADE)
    tarea_anterior = models.ForeignKey('self', on_delete=models.SET_NULL, blank=True, null=True)
    proyectoid = models.ForeignKey(Proyecto, on_delete=models.CASCADE)

    def __str__(self):
        return self.descripciontarea