# Mis Lecturas Bíblicas

Sitio estático para lectura bíblica rápida (RSVP), pensado para abrirse directamente desde un enlace de WhatsApp. No requiere cuentas, descargas ni servidores de pago.

## Atmósfera Bíblica

El lector incluye una capa visual local y opcional. El catálogo inicial está en `assets/backgrounds/`, con metadatos en `assets/backgrounds/catalog.json`: cuatro paisajes originales generados para este proyecto. No se presentan como reconstrucciones históricas o escenas bíblicas exactas.

En el lector, el botón **Atmósfera** permite activar o desactivar los fondos, relacionarlos de forma amplia con el libro actual, elegir intensidad, seleccionar un intervalo de 3/5/10/15 minutos o personalizado, avanzar manualmente, pausar la rotación, guardar favoritos y ocultar fondos. Todo se guarda sólo en el navegador de cada persona.

La integración con servicios externos de generación, Wikimedia o Pexels no está activada: requerirá una futura configuración segura del servidor, claves y revisión individual de licencias.

## Contenido verificado

Los 14 textos originales están en `content/` y se sirven desde el propio sitio. Se preservaron sin modificaciones: las copias tienen el mismo hash SHA-256 que los archivos fuente.

| Lectura | Palabras |
| --- | ---: |
| 001 | 13.474 |
| 002 | 13.439 |
| 003 | 13.617 |
| 004 | 13.512 |
| 005 | 13.291 |
| 006 | 13.330 |
| 007 | 13.086 |
| 008 | 13.153 |
| 009 | 13.484 |
| 010 | 13.098 |
| 011 | 13.431 |
| 012 | 13.798 |
| 013 | 14.178 |
| 014 | 4.295 |
| **Total** | **179.186** |

Las palabras se cuentan como grupos separados por espacios, que es la misma unidad que usa el lector RSVP.

## Publicación

GitHub Pages publica este sitio directamente desde la raíz de la rama `main`, sin servicios de pago ni procesos externos.

Una vez publicado, la URL tendrá este formato: `https://<usuario>.github.io/<repositorio>/`.
