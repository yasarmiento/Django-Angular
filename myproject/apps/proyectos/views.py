from rest_framework import generics
from .models import *
from .serializers import *
# Create your views here.


class ProyectoListView(generics.ListCreateAPIView):
    queryset = Proyecto.objects.all()
    serializer_class = ProyectoSerializer

class ProyectoDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Proyecto.objects.all()
    serializer_class = ProyectoSerializer

# Vista para la tabla Convocatoria
class ConvocatoriaListCreateView(generics.ListCreateAPIView):
    queryset = Convocatoria.objects.all()
    serializer_class = ConvocatoriaSerializer

class ConvocatoriaDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Convocatoria.objects.all()
    serializer_class = ConvocatoriaSerializer

# Vista para la tabla Rol_universidad
class RolUniversidadListCreateView(generics.ListCreateAPIView):
    queryset = Rol_universidad.objects.all()
    serializer_class = Rol_universidadSerializer

class RolUniversidadDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Rol_universidad.objects.all()
    serializer_class = Rol_universidadSerializer

# Vista para la tabla Operador
class OperadorListCreateView(generics.ListCreateAPIView):
    queryset = Operador.objects.all()
    serializer_class = OperadorSerializer

class OperadorDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Operador.objects.all()
    serializer_class = OperadorSerializer

# Vista para la tabla EntidadFinanciadora
class EntidadFinanciadoraListCreateView(generics.ListCreateAPIView):
    queryset = EntidadFinanciadora.objects.all()
    serializer_class = EntidadFinanciadoraSerializer

class EntidadFinanciadoraDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = EntidadFinanciadora.objects.all()
    serializer_class = EntidadFinanciadoraSerializer

# Vista para la tabla Tipoarchivo
class TipoarchivoListCreateView(generics.ListCreateAPIView):
    queryset = Tipoarchivo.objects.all()
    serializer_class = TipoarchivoSerializer

class TipoarchivoDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Tipoarchivo.objects.all()
    serializer_class = TipoarchivoSerializer

# Vista para la tabla Grupoinvestigacion
class GrupoinvestigacionListCreateView(generics.ListCreateAPIView):
    queryset = Grupoinvestigacion.objects.all()
    serializer_class = GrupoinvestigacionSerializer

class GrupoinvestigacionDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Grupoinvestigacion.objects.all()
    serializer_class = GrupoinvestigacionSerializer

# Vista para la tabla Archivo
class ArchivoListCreateView(generics.ListCreateAPIView):
    queryset = Archivo.objects.all()
    serializer_class = ArchivoSerializer

class ArchivoDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Archivo.objects.all()
    serializer_class = ArchivoSerializer