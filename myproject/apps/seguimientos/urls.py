from django.urls import path
from . import views


urlpatterns = [
    path('seguimientos', views.SeguimientosListView.as_view(), name='seguimientos-list'),
    path('seguimientos/<int:pk>', views.SeguimientosDetailView.as_view(), name='seguimientos-detail'),

    # URLs para la tabla Tipodependencia
    path('tipodependencias', views.TipodependenciaListCreateView.as_view(), name='tipodependencia-list-create'),
    path('tipodependencias/<int:pk>', views.TipodependenciaDetailView.as_view(), name='tipodependencia-detail'),

    # URLs para la tabla Pasos
    path('pasos', views.PasosListCreateView.as_view(), name='pasos-list-create'),
    path('pasos/<int:pk>', views.PasosDetailView.as_view(), name='pasos-detail'),

    # URLs para la tabla Estado
    path('estados', views.EstadoListCreateView.as_view(), name='estado-list-create'),
    path('estados/<int:pk>', views.EstadoDetailView.as_view(), name='estado-detail'),
]

