from django.db import models
from apps.proyectos.models import Proyecto, Grupoinvestigacion
# Create your models here.

class Facultad (models.Model):
    facultad = models.CharField(max_length=150)

    def __str__(self):
        return self.facultad

class Rol_investigador (models.Model):
    rolinvestigador = models.CharField(max_length=150)

    def __str__(self):
        return self.rolinvestigador

class Tipoestudiante (models.Model):
    tipoestudiante = models.CharField(max_length=150)

    def __str__(self):
        return self.tipoestudiante

class Semilleroinvestigacion (models.Model):
    semilleroinvestigacion = models.CharField(max_length=150)

    def __str__(self):
        return self.semilleroinvestigacion



class Usuarios (models.Model):
    usuario = models.CharField(max_length=150)
    identificacion = models.CharField(max_length=30)
    email = models.EmailField(max_length=40)
    telefono = models.CharField(max_length=20)
    programa = models.CharField(max_length=150)
    semestre = models.IntegerField(null=True, blank=True)
    tipoestudianteid = models.ForeignKey(Tipoestudiante, on_delete=models.CASCADE, null=True, blank=True)
    facultadid = models.ForeignKey(Facultad, on_delete=models.CASCADE)
    rolinvestigadorid = models.ForeignKey(Rol_investigador, on_delete=models.CASCADE, null=True, blank=True)
    grupoinvestigacionid = models.ForeignKey(Grupoinvestigacion, on_delete=models.CASCADE)
    semilleroinvestigacionid = models.ForeignKey(Semilleroinvestigacion, on_delete=models.CASCADE)
    proyectoid = models.ManyToManyField(Proyecto, through='ProyectoxUsuario')
    
    def __str__(self):
        return self.usuario
    
class ProyectoxUsuario(models.Model):
    proyectoid = models.ForeignKey(Proyecto, on_delete=models.CASCADE)
    usuariosid = models.ForeignKey(Usuarios, on_delete=models.CASCADE)


