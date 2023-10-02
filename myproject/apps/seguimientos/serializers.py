from rest_framework import serializers 
from apps.seguimientos.models import *
 
 
class SeguimientosSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Seguimientos
        fields = [
            'id',
            'descripciontarea',
            'duracion',
            'tareadependencia',
            'diasdependencia',
            'inicio',
            'fin',
            'estadoid',
            'responsable',
            'fechafin',
            'pasosid',
            'tarea_anterior',
            'proyectoid',
        ]

class TipodependenciaSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Tipodependencia
        fields = [
            'id',
            'tipodependencia',
        ]

class PasosSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Pasos
        fields = [
            'id',
            'nivel',
            'nombre',
            'descripcion',
        ]

class EstadoSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Estado
        fields = [
            'id',
            'estado',
        ]