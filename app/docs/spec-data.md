# Especificación Técnica: Catálogo de Datos de Leyendas (`src/data/leyendas.js`)

- **Archivo fuente:** [`src/data/leyendas.js`](file:///c:/xampp/htdocs/leyendas_Costa_Rica/app/src/data/leyendas.js)
- **Tipo:** Modelo de Datos Estático (Array de Objetos)
- **Ruta de documentación:** `app/docs/spec-data.md`

---

## 1. Propósito
Define la colección oficial e inmutable en el cliente de las 9 leyendas costarricenses incluidas en el recurso, sus nombres, rutas a las portadas gráficas y rutas a los archivos descargables (PDF y DOCX).

---

## 2. Esquema de Objeto `Leyenda`

```javascript
{
  id: string,          // Identificador alfanumérico único en minúsculas
  titulo: string,      // Título de la leyenda legible por humanos
  imagen: string,      // Ruta relativa a la imagen de portada en public/
  pdf: string,         // Ruta relativa al PDF en public/data/
  respuestas: string   // Ruta relativa al archivo Word de respuestas en public/data/respuestas/
}
```

---

## 3. Catálogo Actual (9 Elementos)

| ID | Título | Portada | Archivo Lectura (PDF) | Archivo Guía (DOCX) |
| :--- | :--- | :--- | :--- | :--- |
| `anancy` | Leyenda Anancy | `img/anancy-01.png` | `data/anayancy.pdf` | `data/respuestas/Anancy.docx` |
| `barva` | Leyenda Barva | `img/barva-01.png` | `data/barva.pdf` | `data/respuestas/Barva.docx` |
| `cascada` | Leyenda Cascada | `img/cascada-01.png` | `data/cascada.pdf` | `data/respuestas/cascada-novia.docx` |
| `diablo` | Leyenda Diablo | `img/diablo-01.png` | `data/diablo.pdf` | `data/respuestas/diablo-piedra.docx` |
| `iztaru` | Leyenda Iztarú | `img/iztaru-01.png` | `data/iztaru.pdf` | `data/respuestas/Iztaru.docx` |
| `pasovaca` | Leyenda Paso Vaca | `img/paso_vaca-01.png` | `data/pasovaca.pdf` | `data/respuestas/pas-vaca.docx` |
| `piedrablanca` | Leyenda Piedra Blanca | `img/misterio-01.png` | `data/piedrablancaf.pdf` | `data/respuestas/misteri-piedra.docx` |
| `sanramon` | Leyenda San Ramón | `img/piedra_snrmon-01.png` | `data/sanramon.pdf` | `data/respuestas/piedraSanR.docx` |
| `turrialba` | Leyenda Turrialba | `img/leyenda-01.png` | `data/turrialba.pdf` | `data/respuestas/turrialba.docx` |

---

## 4. Lineamientos de Mantenimiento
* Para agregar una nueva leyenda, basta con colocar los archivos en `public/img/` y `public/data/` y agregar un nuevo registro al final del array `leyendasData`.
* Los IDs deben ser únicos y utilizar caracteres alfanuméricos en minúsculas sin espacios.
