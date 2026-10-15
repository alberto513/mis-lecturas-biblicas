# Filosofía de diseño: Atmósfera Bíblica

## Intención central

Convertir la lectura rápida en una experiencia visual viva, reverente y cinematográfica, sin competir con la Palabra ni convertir el lector en una pantalla distraída. El escenario acompaña al texto; nunca lo reemplaza.

## Principios rectores

1. **La lectura manda** — La palabra, el progreso y los controles conservan la mayor jerarquía visual y un contraste AA como mínimo.
2. **Renovación serena** — Los cambios son lentos, con fundidos de varios segundos y sin destellos, para romper la monotonía sin interrumpir.
3. **Contexto honesto** — Las escenas son inspiraciones artísticas, no reconstrucciones históricas ni afirmaciones de exactitud bíblica.
4. **Control personal** — El usuario decide intensidad, intervalo, categoría, selección manual y retorno al diseño clásico; las decisiones se guardan localmente.
5. **Catálogo responsable** — El primer catálogo usa arte original generado para este lector y guarda metadatos. Las importaciones de terceros quedan separadas y exigen fuente y licencia verificables.

## Dirección estética

- **Color:** Ámbar y piedra para Jerusalén; azul profundo para Galilea y escenas celestiales; arena para el desierto. Los acentos evolucionan de manera gradual, mientras la superficie de lectura conserva negro translúcido de alto contraste.
- **Tipografía:** La fuente editorial del lector mantiene dignidad y continuidad; los controles usan una tipografía clara y compacta.
- **Espacio:** La imagen ocupa la pantalla como atmósfera periférica. El texto vive en un escenario independiente, centrado y legible.
- **Materialidad:** Luz volumétrica, piedra, agua, arena y cielo se tratan como texturas ambientales suaves, no como decoraciones ruidosas.

## Límites técnicos y éticos

- `prefers-reduced-motion` reduce los fundidos y desactiva la rotación automática.
- La aplicación no consume APIs externas ni claves para los fondos iniciales.
- La generación con IA remota es una arquitectura pendiente: requerirá un servidor y autorización explícita antes de usar un servicio con costo.
- Las imágenes se precargan de una en una y no cambian cuando la pestaña está oculta.
