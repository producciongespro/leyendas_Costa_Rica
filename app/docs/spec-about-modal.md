# Especificación Técnica: AboutModal (`src/components/AboutModal.jsx`)

- **Archivo fuente:** [`src/components/AboutModal.jsx`](file:///c:/xampp/htdocs/leyendas_Costa_Rica/app/src/components/AboutModal.jsx)
- **Tipo:** Componente de Diálogo / Modal
- **Ruta de documentación:** `app/docs/spec-about-modal.md`

---

## 1. Propósito
`AboutModal` despliega la ficha informativa de propiedad intelectual, autoría y créditos institucionales del Ministerio de Educación Pública de Costa Rica (MEP - GESPRO) con la estética temática original.

---

## 2. Entradas (Props)

| Prop | Tipo | Requerido | Descripción |
| :--- | :--- | :--- | :--- |
| `isOpen` | `boolean` | Sí | Controla si el modal se renderiza en pantalla o retorna `null`. |
| `onClose` | `function` | Sí | Callback disparado al hacer clic en el botón de cerrar (`X`), en el botón "Close" o en el fondo oscuro. |

---

## 3. Estado Interno
Componente controlado (Stateless). Su visibilidad depende enteramente de la prop `isOpen`.

---

## 4. Comportamiento y Eventos

* **Cierre por Backdrop:** Al hacer clic en el overlay semitransparente oscuro (`bg-black/70 backdrop-blur-xs`), se invoca `onClose`.
* **Detención de Propagación:** El contenedor de contenido ejecuta `e.stopPropagation()` para evitar que un clic dentro del cuadro cierre accidentalmente el diálogo.
* **Cierre por Botones:** Cuenta con botón superior con icono `X` (`lucide-react`) y botón inferior clásico "Close".

---

## 5. Diseño y Disposición (Tailwind CSS)

* **Overlay:** `fixed inset-0 z-50 flex items-center justify-center p-4`.
* **Caja de Contenido:**
  * Fondo: Color negro con la textura original `img/mystery-157015_1280.png` con tamaño ajustado al 100%.
  * Borde y sombras: `border border-neutral-700 shadow-2xl rounded-md`.
  * Ancho responsivo: `w-full max-w-lg`.
  * Tipografía y destacados: Texto claro con etiquetas destacadas en amarillo (`text-yellow-300`).

---

## 6. Accesibilidad (A11y)
* Atributos semánticos: `role="dialog"` y `aria-modal="true"`.
* Botón de cierre provisto de `aria-label="Cerrar modal"`.
