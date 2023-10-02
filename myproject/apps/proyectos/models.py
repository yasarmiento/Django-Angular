from django.db import models
# Create your models here.

class Convocatoria (models.Model):
    convocatoria = models.CharField(max_length=150)

    def __str__(self):
        return self.convocatoria

class Rol_universidad (models.Model):
    rolU = models.CharField(max_length=150)

    def __str__(self):
        return self.rolU

class Operador (models.Model):
    operador = models.CharField(max_length=150)

    def __str__(self):
        return self.operador

class EntidadFinanciadora (models.Model):
    entidadfinanciadora = models.CharField(max_length=150)

    def __str__(self):
        return self.entidadfinanciadora

class Tipoarchivo (models.Model):
    nombre_archivo = models.CharField(max_length=150)

    def __str__(self):
        return self.nombre_archivo

class Grupoinvestigacion (models.Model):
    grupoinvestigacion = models.CharField(max_length=150)

    def __str__(self):
        return self.grupoinvestigacion


class Proyecto (models.Model):
    proyecto = models.CharField(max_length=150)
    codigo = models.CharField(max_length=150, null=True, default="N/A")
    plazo = models.IntegerField(default=0)
    fechai = models.DateField()
    fechaf = models.DateField()
    convocatoriaid = models.ForeignKey(Convocatoria, on_delete=models.CASCADE)
    roluniversidadid = models.ForeignKey(Rol_universidad, on_delete=models.CASCADE)
    operadorid = models.ForeignKey(Operador, on_delete=models.CASCADE)
    entidadfinanciadora = models.ForeignKey(EntidadFinanciadora, on_delete=models.CASCADE)
    grupoinvestigacionid = models.ForeignKey(Grupoinvestigacion, on_delete=models.CASCADE)

    def __str__(self):
        return self.proyecto

class Archivo (models.Model):
    archivo = models.FileField()
    nombre_archivo_id = models.ForeignKey(Tipoarchivo, on_delete=models.CASCADE)
    proyectoid = models.ForeignKey(Proyecto, on_delete=models.CASCADE)

