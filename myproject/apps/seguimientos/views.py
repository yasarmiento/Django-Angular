from rest_framework import generics
from .models import *
from .serializers import *
# Create your views here.

# Vista para la tabla seguimientos
class SeguimientosListView(generics.ListCreateAPIView):
    queryset = Seguimientos.objects.all()
    serializer_class = SeguimientosSerializer

class SeguimientosDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Seguimientos.objects.all()
    serializer_class = SeguimientosSerializer

# Vista para la tabla Tipodependencia
class TipodependenciaListCreateView(generics.ListCreateAPIView):
    queryset = Tipodependencia.objects.all()
    serializer_class = TipodependenciaSerializer

class TipodependenciaDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Tipodependencia.objects.all()
    serializer_class = TipodependenciaSerializer

# Vista para la tabla Pasos
class PasosListCreateView(generics.ListCreateAPIView):
    queryset = Pasos.objects.all()
    serializer_class = PasosSerializer

class PasosDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Pasos.objects.all()
    serializer_class = PasosSerializer

# Vista para la tabla Estado
class EstadoListCreateView(generics.ListCreateAPIView):
    queryset = Estado.objects.all()
    serializer_class = EstadoSerializer

class EstadoDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Estado.objects.all()
    serializer_class = EstadoSerializer