from rest_framework import serializers 
from apps.usuarios.models import *
 
 
class EstudiantesSerializer(serializers.ModelSerializer):
    #grupoinvestigacionid = serializers.ReadOnlyField(source='semilleroinvestigacionid.semilleroinvestigacion')
    #testudiante = serializers.ReadOnlyField(source='tipoestudianteid.tipoestudiante')
    #facultad = serializers.ReadOnlyField(source='facultadid.facultad')
    #ginvestigacion = serializers.ReadOnlyField(source='grupoinvestigacionid.grupoinvestigacion')
 
    class Meta:
        model = Usuarios
        fields = [
            'id',
            'usuario',
            'identificacion',
            'email',
            'telefono',
            'programa',
            'semestre',
            'tipoestudianteid',
            'facultadid',
            'grupoinvestigacionid',
            'semilleroinvestigacionid',
        ]

class InvestigadoresSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Usuarios
        fields = [
            'id',
            'usuario',
            'identificacion',
            'email',
            'telefono',
            'programa',
            'rolinvestigadorid',
            'facultadid',
            'grupoinvestigacionid',
            'semilleroinvestigacionid',
        ]

class FacultadSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Facultad
        fields = [
            'id',
            'facultad',
        ]

class Rol_investigadorSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Rol_investigador
        fields = [
            'id',
            'rolinvestigador',
        ]

class TipoestudianteSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Tipoestudiante
        fields = [
            'id',
            'tipoestudiante',
        ]

class SemilleroinvestigacionSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Semilleroinvestigacion
        fields = [
            'id',
            'semilleroinvestigacion',
        ]


class ProyectoxUsuarioSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = ProyectoxUsuario
        fields = [
            'id',
            'proyectoid',
            'usuariosid',
        ]