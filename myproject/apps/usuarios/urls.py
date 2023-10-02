from django.urls import path
from . import views


urlpatterns = [
    # URLs para Estudiantes
    path('estudiantes', views.EstudiantesListView.as_view(), name='estudiantes-list-create'),
    path('estudiantes/<int:pk>', views.EstudiantesDetailView.as_view(), name='estudiantes-detail'),

    # URLs para Investigadores
    path('investigadores', views.InvestigadoresListView.as_view(), name='investigadores-list-create'),
    path('investigadores/<int:pk>', views.InvestigadoresDetailView.as_view(), name='investigadores-detail'),

    # URLs para la tabla Facultad
    path('facultades', views.FacultadListCreateView.as_view(), name='facultad-list-create'),
    path('facultades/<int:pk>', views.FacultadDetailView.as_view(), name='facultad-detail'),

    # URLs para la tabla Rol_investigador
    path('roles_investigador', views.RolInvestigadorListCreateView.as_view(), name='rol-investigador-list-create'),
    path('roles_investigador/<int:pk>', views.RolInvestigadorDetailView.as_view(), name='rol-investigador-detail'),

    # URLs para la tabla Tipoestudiante
    path('tipos_estudiante', views.TipoestudianteListCreateView.as_view(), name='tipo-estudiante-list-create'),
    path('tipos_estudiante/<int:pk>', views.TipoestudianteDetailView.as_view(), name='tipo-estudiante-detail'),

    # URLs para la tabla Semilleroinvestigacion
    path('semilleros_investigacion', views.SemilleroinvestigacionListCreateView.as_view(), name='semillero-investigacion-list-create'),
    path('semilleros_investigacion/<int:pk>', views.SemilleroinvestigacionDetailView.as_view(), name='semillero-investigacion-detail'),

    # URLs para la tabla Grupodeinvestigacion
    path('grupos_investigacion', views.GrupodeinvestigacionListCreateView.as_view(), name='grupo-investigacion-list-create'),
    path('grupos_investigacion/<int:pk>', views.GrupodeinvestigacionDetailView.as_view(), name='grupo-investigacion-detail'),

    # URLs para la tabla ProyectoxUsuario
    path('proyectos_usuarios', views.ProyectoxUsuarioListCreateView.as_view(), name='proyecto-usuario-list-create'),
    path('proyectos_usuarios/<int:pk>', views.ProyectoxUsuarioDetailView.as_view(), name='proyecto-usuario-detail'),
]

