from rest_framework import serializers 
from apps.proyectos.models import *
 
 
class ProyectoSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Proyecto
        fields = [
            'id',
            'proyecto',
            'codigo',
            'plazo',
            'fechai',
            'fechaf',
            'convocatoriaid',
            'roluniversidadid',
            'operadorid',
            'entidadfinanciadora',
            'grupoinvestigacionid',
        ]

class ConvocatoriaSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Convocatoria
        fields = [
            'id',
            'convocatoria',
        ]

class Rol_universidadSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Rol_universidad
        fields = [
            'id',
            'rolU',
        ]

class OperadorSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Operador
        fields = [
            'id',
            'operador',
        ]

class EntidadFinanciadoraSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = EntidadFinanciadora
        fields = [
            'id',
            'entidadfinanciadora',
        ]

class TipoarchivoSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Tipoarchivo
        fields = [
            'id',
            'nombre_archivo',
        ]

class GrupoinvestigacionSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Grupoinvestigacion
        fields = [
            'id',
            'grupoinvestigacion',
        ]

class ArchivoSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Archivo
        fields = [
            'id',
            'archivo',
            'nombre_archivo_id',
            'proyectoid',
        ]