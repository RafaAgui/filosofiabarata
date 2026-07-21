---
name: blog-meta
description: Genera automáticamente los metadatos (title, img, description, date, url, tipo, categorias, etiquetas) para entradas del blog filosófico "Filosofía Barata". Úsalo cuando el usuario cree una entrada nueva y quiera rellenar el frontmatter, o cuando diga "genera los metadatos", "rellena la descripción/categorías/etiquetas", "completa el frontmatter" o "blog-meta". Si hay un archivo .md abierto en el IDE con campos de frontmatter vacíos, úsalo automáticamente sin esperar que el usuario lo pida explícitamente.
---

# Skill: blog-meta

Rellena los campos `description`, `categorias` y `etiquetas` vacíos en el frontmatter de una entrada del blog.

## Pasos

### 1. Identificar el archivo

- Si el usuario pasó una ruta como argumento, úsala.
- Si no, usa el archivo `.md` que esté abierto en el IDE (visible en el contexto como `ide_opened_file`).
- Si ninguno aplica, pregunta qué archivo procesar.

### 2. Leer el archivo

Lee el archivo completo. Extrae:
- `title` del frontmatter
- Todo el cuerpo del artículo (debajo del segundo `---`)

### 3. Generar los metadatos

Con el título y el contenido como contexto, genera los tres campos:

#### `description`
- 1-2 frases en español que resuman de qué trata la entrada.
- Menciona el filósofo, concepto o tema central, y el enfoque o argumento principal.
- Tono neutro y enciclopédico, similar a estos ejemplos del blog:
  - *"Análisis del imperativo categórico de Kant y su aplicación práctica en dilemas morales cotidianos."*
  - *"Reseña entusiasta de la novela gráfica Logicomix sobre Bertrand Russell y su búsqueda de fundamentos lógicos para las matemáticas."*
  - *"Reflexión sobre la distinción existencial entre quienes tienen un destino vital y quienes no tienen rumbo."*

#### `categorias`
Elige **una o dos** de estas categorías canónicas del blog, siguiendo la cronología filosófica. Si el contenido encaja claramente en varias, sepáralas con coma y espacio:

| Categoría | Período / Cuándo usarla |
|---|---|
| `Mesopotamia` | Civilizaciones mesopotámicas (Sumeria, Babilonia, Asiria…) |
| `Oriental` | Filosofía oriental: budismo, hinduismo, taoísmo, confucianismo… |
| `Grecia` | Filosofía griega clásica: presocráticos, Sócrates, Platón, Aristóteles, estoicos, cínicos, epicúreos |
| `Árabe` | Filosofía árabe e islámica: Al-Kindi, Averroes, Avicena… |
| `Edad Media` | Patrística y escolástica cristiana (San Agustín, Tomás de Aquino, Ockham…) |
| `Renacimiento` | Filosofía renacentista, S. XV–XVI (Erasmo, Maquiavelo, Moro, Giordano Bruno…) |
| `Moderna` | Filosofía moderna, S. XVII: Racionalismo y Empirismo (Descartes, Spinoza, Leibniz, Locke, Hume…) |
| `Ilustración` | Ilustración, S. XVIII (Kant, Rousseau, Voltaire, Montesquieu…) |
| `Idealismo` | Idealismo alemán, S. XVIII–XIX (Fichte, Schelling, Hegel…) |
| `S. XIX` | Filosofía del siglo XIX: Marx, Nietzsche, Schopenhauer, Mill, positivismo… |
| `S. XX` | Filosofía del siglo XX: analítica, continental, estructuralismo, Frankfurt… |
| `Existencialismo` | Existencialismo y fenomenología (Sartre, Camus, Heidegger, Merleau-Ponty…) |
| `Educación` | Filosofía de la educación y pedagogía |
| `ética` | Reflexiones éticas transversales, dilemas morales o metaética sin adscripción a un período concreto |
| `Actualidad` | Temas contemporáneos (política, tecnología, sociedad, cultura) analizados desde la filosofía |
| `Uncategorized` | Solo si no encaja en ninguna otra |

#### `etiquetas`
- Lista de 3–6 etiquetas en español separadas por coma y espacio.
- Incluye: nombre(s) del filósofo/a protagonista, conceptos filosóficos clave, tipo de contenido si aplica (`libros`, `Cine`, `Cómic`, `citas`, `fotografía`…).
- Usa mayúscula inicial en nombres propios y nombres de filósofos; minúscula en conceptos genéricos.
- Ejemplos de etiquetas existentes en el blog: `Kant, ética, Ilustración, libertad`, `Cómic, filosofía con humor, Grecia`, `Bob Black, citas, trabajo, libros`.

### 4. Actualizar el frontmatter

Edita el archivo reemplazando únicamente los campos vacíos (`""`) con los valores generados. No toques campos que ya tengan contenido.

Resultado esperado en el frontmatter:
```yaml
description: "Frase generada en español."
categorias: "Categoría"
etiquetas: "etiqueta1, etiqueta2, etiqueta3"
```

### 5. Confirmar

Muestra al usuario los tres valores generados en un mensaje corto. No expliques el proceso, solo el resultado.

### 6. Ejemplo

title: "Andar por andar"
img: "/imagenes/andar-por-andar.png"
date: 2026-06-11
url: /blog/2026-06-11-andar-por-andar
tipo: entrada
description: "Reflexión sobre el libro 'Andar por andar' de Adriana Herreros: el caminar como acto de rebeldía contra la productividad y la velocidad modernas, una forma de reclamar espacios públicos y una práctica transformadora que conecta lo relajante, lo político y lo cultural."
categorias: "Actualidad"
etiquetas: "Adriana Herreros, caminar, espacio público, rebeldía, libros, tiempo"
