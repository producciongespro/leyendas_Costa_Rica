# Especificación Técnica: LegendCard (`src/components/LegendCard.jsx`)

- **Archivo fuente:** [`src/components/LegendCard.jsx`](file:///c:/xampp/htdocs/leyendas_Costa_Rica/app/src/components/LegendCard.jsx)
- **Tipo:** Componente de Presentación
- **Ruta de documentación:** `app/docs/spec-legend-card.md`

---

## 1. Propósito
`LegendCard` representa visual e interactivamente una leyenda costarricense. Provee al estudiante y docente acceso directo al material de lectura (documento PDF interactivo) y a la guía descargable de preguntas/respuestas (documento Word `.docx`).

---

## 2. Entradas (Props)

| Prop | Tipo | Requerido | Descripción |
| :--- | :--- | :--- | :--- |
| `leyenda` | `Object` | Sí | Objeto con los metadatos y rutas del recurso. |
| `leyenda.id` | `string` | Sí | Identificador alfanumérico único (ej. `'anancy'`). |
| `leyenda.titulo` | `string` | Sí | Nombre descriptivo de la leyenda (ej. `'Leyenda Anancy'`). |
| `leyenda.imagen` | `string` | Sí | Ruta relativa a la portada de la leyenda (ej. `'img/anancy-01.png'`). |
| `leyenda.pdf` | `string` | Sí | Ruta relativa al archivo PDF de lectura (ej. `'data/anayancy.pdf'`). |
| `leyenda.respuestas` | `string` | Sí | Ruta relativa al archivo Word descargable (ej. `'data/respuestas/Anancy.docx'`). |

---

## 3. Estado Interno
Este componente es puramente de presentación (Stateless). No gestiona estados locales.

---

## 4. Comportamiento Interactivo y Estilos

* **Carátula (Imagen):**
  * Envuelto en una etiqueta `<a>` con `target="_blank"` y `rel="noopener noreferrer"`.
  * Efecto hover: `hover:opacity-50 hover:scale-105` con transición suave (`transition-all duration-300`), recreando el comportamiento del sitio original.
  * Tamaño: Limitado a un ancho máximo responsivo de `max-w-[280px]` centrado.
* **Enlace de Respuestas:**
  * Envuelto en un enlace directo de descarga.
  * Iconografía: `CloudDownload` de `lucide-react`.
  * Estilo tipográfico: Color amarillo original `#FFFF00`, negrita, con efecto de brillo azul en hover (`hover:drop-shadow-[0_0_8px_rgba(0,0,255,0.8)]`).

---

## 5. Accesibilidad (A11y)
* Atributo `alt` en la imagen que describe claramente el contenido.
* Atributos `title` informativos para lectores de pantalla tanto en la carátula como en el enlace de descarga.
