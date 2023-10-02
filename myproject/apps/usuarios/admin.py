from django.contrib import admin
from apps.usuarios.models import * 
# Register your models here.

admin.site.register(Facultad)
admin.site.register(Rol_investigador)
admin.site.register(Tipoestudiante)
admin.site.register(Semilleroinvestigacion)
admin.site.register(Grupodeinvestigacion)
admin.site.register(Usuarios)
admin.site.register(ProyectoxUsuario)