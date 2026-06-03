# La filosofía barata

Blog de ensayos filosóficos construido con [Astro](https://astro.build). Pensamiento en búsqueda de la verdad, presentado de forma clara y sin pretensiones.

## Comandos

| Comando           | Acción                                        |
| :---------------- | :-------------------------------------------- |
| `npm install`     | Instala dependencias                          |
| `npm run dev`     | Servidor de desarrollo en `localhost:4321`    |
| `npm run build`   | Build de producción en `./dist/`              |
| `npm run preview` | Previsualiza el build antes de desplegar      |

## Sistema de diseño

- **Tipografía:** Playfair Display (display) · Source Serif 4 (cuerpo) · Inter (UI)
- **Paleta:** Crema `oklch(97.8% 0.003 70)` · Verde bosque `oklch(31% 0.075 155)`
- **Tokens:** `src/styles/design/` — colores, tipografía, espaciado, radio y mixins SCSS

## Estructura

```
src/
├── components/
│   ├── blog/
│   │   ├── FilosofiabarataPosts.tsx   # Lista de posts con "Ver más" (React)
│   │   └── PostList.astro             # Carga y organiza los posts del blog
│   └── layout/
│       ├── Header.astro               # Navegación con menú responsive
│       └── Footer.astro
│
├── content/
│   ├── config.ts                      # Schema Zod de la colección
│   └── filosofiabarata/               # Posts en Markdown (235 entradas)
│       └── imagenes/
│
├── layouts/
│   └── Layout.astro                   # Layout base (HTML, header, footer)
│
├── pages/
│   ├── index.astro                    # Inicio (/)
│   ├── blog/
│   │   └── [id].astro                 # Página de post (/blog/[slug])
│   └── categorias/
│       ├── index.astro                # Índice de categorías
│       └── [categoria].astro          # Posts por categoría
│
├── styles/
│   ├── global.scss                    # Estilos globales
│   ├── variables.scss                 # Punto de entrada de tokens
│   ├── components/                    # Estilos por componente
│   └── design/                        # Tokens: colores, tipografía, espaciado
│
├── types/
│   └── blog.ts                        # Tipos compartidos (interfaz Post)
│
└── utils/
    └── categories.ts                  # Parsing y slugs de categorías
```
