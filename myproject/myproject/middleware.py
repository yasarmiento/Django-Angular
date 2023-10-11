from rest_framework.views import exception_handler
from django.http import JsonResponse
from requests import ConnectionError
import logging

def custom_exception_handler(exc, context):
    # Llama al manejador de excepciones por defecto de REST framework
    response = exception_handler(exc, context)

    # Verifica si la excepción levantada es del tipo que quieres manejar
    if isinstance(exc, ConnectionError):
        # Define los datos de respuesta personalizados
        err_data = {'MSG_HEADER': 'some custom error messaging'}

        # Registra los detalles de la excepción que se está manejando
        logging.error(f"Original error detail and callstack: {exc}")

        # Devuelve una JsonResponse
        return JsonResponse(err_data, safe=False, status=503)

    # Devuelve la respuesta como normalmente lo haría el framework
    return response
