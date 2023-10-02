from django.urls import path
from . import views
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('', views.ProyectoListView.as_view(), name='proyecto-list'),
    path('proyectos/<int:pk>', views.ConvocatoriaDetailView.as_view(), name='proyecto-detail'),

    # URLs para la tabla Convocatoria
    path('convocatorias', views.ConvocatoriaListCreateView.as_view(), name='convocatoria-list-create'),
    path('convocatorias/<int:pk>', views.ConvocatoriaDetailView.as_view(), name='convocatoria-detail'),

    # URLs para la tabla Rol_universidad
    path('roles_universidad', views.RolUniversidadListCreateView.as_view(), name='rol-universidad-list-create'),
    path('roles_universidad/<int:pk>', views.RolUniversidadDetailView.as_view(), name='rol-universidad-detail'),

    # URLs para la tabla Operador
    path('operadores', views.OperadorListCreateView.as_view(), name='operador-list-create'),
    path('operadores/<int:pk>', views.OperadorDetailView.as_view(), name='operador-detail'),

    # URLs para la tabla EntidadFinanciadora
    path('entidades_financiadoras', views.EntidadFinanciadoraListCreateView.as_view(), name='entidad-financiadora-list-create'),
    path('entidades_financiadoras/<int:pk>/', views.EntidadFinanciadoraDetailView.as_view(), name='entidad-financiadora-detail'),

    # URLs para la tabla Tipoarchivo
    path('tipos_archivo', views.TipoarchivoListCreateView.as_view(), name='tipo-archivo-list-create'),
    path('tipos_archivo/<int:pk>', views.TipoarchivoDetailView.as_view(), name='tipo-archivo-detail'),

    # URLs para la tabla Grupoinvestigacion
    path('grupos_investigacion', views.GrupoinvestigacionListCreateView.as_view(), name='grupo-investigacion-list-create'),
    path('grupos_investigacion/<int:pk>', views.GrupoinvestigacionDetailView.as_view(), name='grupo-investigacion-detail'),

    # URLs para la tabla Archivo
    path('archivos', views.ArchivoListCreateView.as_view(), name='archivo-list-create'),
    path('archivos/<int:pk>', views.ArchivoDetailView.as_view(), name='archivo-detail'),
]




if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)