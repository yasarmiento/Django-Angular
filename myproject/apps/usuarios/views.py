from rest_framework import generics
from .models import *
from .serializers import *
# Create your views here.


# Vista para Estudiantes
class EstudiantesListView(generics.ListCreateAPIView):
    serializer_class = EstudiantesSerializer

    def get_queryset(self):
        # Filtrar Usuarios que son estudiantes (tipoestudianteid no está vacío) y rolinvestigadorid está vacío
        return Usuarios.objects.filter(tipoestudianteid__isnull=False, rolinvestigadorid__isnull=True)

class EstudiantesDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = EstudiantesSerializer

    def get_queryset(self):
        # Filtrar Usuarios que son estudiantes (tipoestudianteid no está vacío) y rolinvestigadorid está vacío
        return Usuarios.objects.filter(tipoestudianteid__isnull=False, rolinvestigadorid__isnull=True)

# Vista para Investigadores
class InvestigadoresListView(generics.ListCreateAPIView):
    serializer_class = InvestigadoresSerializer

    def get_queryset(self):
        # Filtrar Usuarios que son investigadores (rolinvestigadorid no está vacío) y tipoestudianteid está vacío
        return Usuarios.objects.filter(tipoestudianteid__isnull=True, rolinvestigadorid__isnull=False)

class InvestigadoresDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = InvestigadoresSerializer

    def get_queryset(self):
        # Filtrar Usuarios que son investigadores (rolinvestigadorid no está vacío) y tipoestudianteid está vacío
        return Usuarios.objects.filter(tipoestudianteid__isnull=True, rolinvestigadorid__isnull=False)


# Vista para la tabla Facultad
class FacultadListCreateView(generics.ListCreateAPIView):
    queryset = Facultad.objects.all()
    serializer_class = FacultadSerializer

class FacultadDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Facultad.objects.all()
    serializer_class = FacultadSerializer

# Vista para la tabla Rol_investigador
class RolInvestigadorListCreateView(generics.ListCreateAPIView):
    queryset = Rol_investigador.objects.all()
    serializer_class = Rol_investigadorSerializer

class RolInvestigadorDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Rol_investigador.objects.all()
    serializer_class = Rol_investigadorSerializer

# Vista para la tabla Tipoestudiante
class TipoestudianteListCreateView(generics.ListCreateAPIView):
    queryset = Tipoestudiante.objects.all()
    serializer_class = TipoestudianteSerializer

class TipoestudianteDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Tipoestudiante.objects.all()
    serializer_class = TipoestudianteSerializer

# Vista para la tabla Semilleroinvestigacion
class SemilleroinvestigacionListCreateView(generics.ListCreateAPIView):
    queryset = Semilleroinvestigacion.objects.all()
    serializer_class = SemilleroinvestigacionSerializer

class SemilleroinvestigacionDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Semilleroinvestigacion.objects.all()
    serializer_class = SemilleroinvestigacionSerializer

# Vista para la tabla ProyectoxUsuario
class ProyectoxUsuarioListCreateView(generics.ListCreateAPIView):
    queryset = ProyectoxUsuario.objects.all()
    serializer_class = ProyectoxUsuarioSerializer

class ProyectoxUsuarioDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ProyectoxUsuario.objects.all()
    serializer_class = ProyectoxUsuarioSerializer