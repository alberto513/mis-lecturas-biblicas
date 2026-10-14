# Mis Lecturas Bíblicas

Sitio estático para lectura bíblica rápida (RSVP), pensado para abrirse directamente desde un enlace de WhatsApp. No requiere cuentas, descargas ni servidores de pago.

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

El flujo de trabajo `.github/workflows/deploy-pages.yml` publica automáticamente este sitio cuando la rama `main` se sube al repositorio. En GitHub, selecciona **Settings → Pages → Source: GitHub Actions** si la plataforma no lo activa automáticamente.

Una vez publicado, la URL tendrá este formato: `https://<usuario>.github.io/<repositorio>/`.
