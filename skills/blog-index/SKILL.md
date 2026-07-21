---
name: blog-index
description: Añade una nueva entrada al índice del blog (INDICE.md) cuando se crea un archivo .md en src/content/filosofiabarata/. Úsalo cuando el usuario cree una entrada nueva y diga "añádela al índice", "actualiza el índice" o "blog-index". También úsalo automáticamente si hay un archivo .md recién creado abierto en el IDE que no aparece en INDICE.md.
---

# Skill: blog-index

Registra una entrada nueva en `src/content/INDICE.md` manteniendo el orden cronológico descendente y el contador actualizado.

## Pasos

### 1. Identificar el archivo nuevo

- Si el usuario pasó una ruta como argumento, úsala.
- Si no, usa el archivo `.md` abierto en el IDE (`ide_opened_file`).
- Si ninguno aplica, pregunta qué archivo registrar.

### 2. Leer el frontmatter del archivo nuevo

Extrae:
- `title`: el título de la entrada
- `date`: la fecha en formato `YYYY-MM-DD`
- El nombre del archivo (solo el basename, p. ej. `2026-06-04-la-utilidad-de-lo-inutil.md`)

### 3. Leer INDICE.md

Ruta: `src/content/INDICE.md`

Extrae:
- El número actual en la línea `Total de archivos: N`
- La lista completa de entradas para encontrar la posición de inserción correcta

### 4. Comprobar si ya está registrada

Si la línea `(nombre-del-archivo.md)` ya existe en el índice, avisa al usuario y no hagas nada más.

### 5. Determinar la posición de inserción

El índice está ordenado por fecha **descendente** (más reciente arriba). Encuentra la primera entrada cuya fecha sea **anterior** a la del archivo nuevo: la nueva entrada se inserta justo **antes** de esa línea.

Si la fecha es la más reciente de todas, insértala en la primera posición de la lista (línea 4, justo después de `Total de archivos: N`).

### 6. Construir la línea nueva

Formato exacto:
```
- [YYYY-MM-DD - Título](nombre-del-archivo.md)
```

Ejemplo:
```
- [2026-06-04 - La utilidad de lo inútil](2026-06-04-la-utilidad-de-lo-inutil.md)
```

### 7. Actualizar INDICE.md

Dos cambios en el archivo:
1. Insertar la línea nueva en la posición correcta.
2. Incrementar en 1 el número de la línea `Total de archivos: N`.

### 8. Confirmar

Muestra al usuario en una línea qué entrada se añadió y cuál es el nuevo total.
