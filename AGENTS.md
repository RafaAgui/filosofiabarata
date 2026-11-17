# Guía para agentes

## Qué es este proyecto

**Filosofía Barata** es un blog en español de ensayos y artículos filosóficos. Es un sitio estático construido con Astro, con React para algunos componentes interactivos. El contenido editorial vive principalmente en Markdown; la interfaz, el diseño y las rutas se implementan en `src/`.

## Antes de cambiar nada

- Lee los archivos implicados y sigue sus convenciones; no des por hecho que la documentación o los comentarios describen el estado actual.
- Haz cambios pequeños y limitados a lo que pide el usuario. No reformes, corrijas ni reescribas artículos por iniciativa propia.
- Conserva los cambios preexistentes del usuario y no sobrescribas contenido sin revisarlo.
- Si una petición editorial puede entenderse como revisión o corrección, sigue las instrucciones de `skills/blog-corrector/SKILL.md`; no edites el texto sin aprobación.
- Si el alcance o el resultado esperado no están claros, pregunta antes de tomar una decisión que cambie el contenido o la experiencia del sitio.
- Actualiza la documentación directamente relacionada cuando cambie el comportamiento o los flujos de trabajo.

## Estructura principal

- `src/content/filosofiabarata/`: artículos del blog en Markdown.
- `src/content/config.ts`: definición y validación del esquema de la colección Astro.
- `src/content/INDICE.md`: índice editorial de artículos, ordenado por fecha descendente.
- `src/pages/`: páginas y rutas. `blog/[id].astro` genera las páginas de artículos; `categorias/` genera el índice y las páginas por categoría.
- `src/components/`: componentes Astro y React.
- `src/layouts/`: estructura compartida de las páginas.
- `src/styles/`: estilos globales, de componentes y tokens de diseño.
- `src/utils/categories.ts`: normalización, presentación y conversión a slug de categorías.
- `src/types/`: tipos TypeScript compartidos.
- `public/`: recursos estáticos servidos desde la raíz del sitio, como `/imagenes/...`.
- `skills/`: instrucciones específicas para tareas editoriales del blog.

Consulta el código actual antes de basarte en esta lista: la estructura puede evolucionar.

## Artículos y metadatos

Cada artículo es un archivo `.md` dentro de `src/content/filosofiabarata/`. El esquema actual requiere:

```yaml
title: "Título del artículo"
date: YYYY-MM-DD
categorias: "Grecia"
```

También admite `description`, `tipo`, `etiquetas` e `img` como campos opcionales. En artículos existentes pueden aparecer otros campos, como `url`; no los elimines ni cambies sin comprobar sus usos y la petición del usuario. Mantén el formato y el estilo del artículo que estés editando.

- Las categorías se escriben como texto separado por comas. Usa `src/utils/categories.ts` para entender cómo se muestran y cómo se generan sus slugs; `Uncategorized` se excluye de la navegación.
- Las imágenes referenciadas con rutas como `/imagenes/archivo.png` deben corresponder a recursos disponibles en el proyecto. Comprueba el recurso antes de cambiar la referencia.
- Al crear una entrada, no olvides el flujo del índice cuando el usuario pida actualizarlo: sigue `skills/blog-index/SKILL.md`, respeta el orden cronológico descendente, evita duplicados y actualiza el contador.
- Para completar metadatos, sigue `skills/blog-meta/SKILL.md`; esa skill limita los cambios a los campos vacíos que indica.
- Para revisar o corregir un artículo, sigue `skills/blog-corrector/SKILL.md` paso a paso. Presenta las propuestas en el formato prescrito y espera aprobación antes de modificar el artículo.

## Tecnología y convenciones

- Node.js y npm; módulos JavaScript ESM (`"type": "module"`).
- Astro 5, React 19, TypeScript y SCSS.
- La salida de Astro es estática y usa el adaptador de Vercel (`astro.config.mjs`).
- Mantén la lógica de contenido en Astro/TypeScript existente. Reutiliza utilidades y tipos antes de duplicar lógica.
- Para estilos, consulta primero los tokens en `src/styles/design/` y las convenciones del componente correspondiente. `DESIGN.md` describe la dirección visual: editorial, sobria y legible, con buen espacio en blanco y sin efectos decorativos innecesarios.
- Los ensayos están en español. Al editarlos, conserva la voz, el sentido y el formato originales; no traduzcas ni alteres argumentos sin que se solicite.
- No añadas dependencias ni cambies configuración global si una modificación localizada resuelve la tarea.

## Comandos útiles

Ejecuta desde la raíz del repositorio:

| Comando | Uso |
| --- | --- |
| `npm install` | Instalar dependencias cuando sea necesario |
| `npm run dev` | Servidor de desarrollo en `localhost:4321` |
| `npm run build` | Compilar el sitio estático |
| `npm run preview` | Previsualizar la compilación |
| `npm run test -- --run` | Ejecutar las pruebas una vez con Vitest |
| `npm run lint` | Ejecutar ESLint |

Ejecuta las comprobaciones pertinentes al cambio: pruebas específicas para lógica o comportamiento, lint para cambios de código y build para validar páginas, contenido Astro y rutas. No afirmes que una comprobación pasó si no la ejecutaste. El proyecto no define actualmente un script separado de type-check en `package.json`.

## Índice y documentación

`README.md` ofrece una introducción rápida a comandos y estructura; `DESIGN.md` detalla la guía visual. Usa estos documentos junto con el código. Los recuentos de entradas y los detalles estructurales pueden quedar desactualizados: compruébalos en `src/content/` y `src/content/INDICE.md` antes de citarlos o modificarlos.

Al terminar, resume brevemente qué cambió y qué validaciones ejecutaste (o por qué no fueron necesarias).
