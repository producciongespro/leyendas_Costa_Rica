# Especificación Técnica: App (`src/App.jsx`)

- **Archivo fuente:** [`src/App.jsx`](file:///c:/xampp/htdocs/leyendas_Costa_Rica/app/src/App.jsx)
- **Tipo:** Contenedor y Orquestador Principal
- **Ruta de documentación:** `app/docs/spec-app.md`

---

## 1. Propósito
`App` es el componente raíz de la aplicación interactiva. Es responsable de estructurar la grilla principal de navegación de las leyendas, posicionar de forma fija los elementos institucionales (botón de evaluación "Califícame"), montar el reproductor ambiental y gestionar el estado de visualización del modal "Acerca de".

---

## 2. Entradas (Props)
Este componente no recibe props externas ya que es montado por [`src/main.jsx`](file:///c:/xampp/htdocs/leyendas_Costa_Rica/app/src/main.jsx).

---

## 3. Estado Interno (State)

| Estado | Tipo | Valor Inicial | Descripción |
| :--- | :--- | :--- | :--- |
| `isModalOpen` | `boolean` | `false` | Determina si el modal [`AboutModal`](file:///c:/xampp/htdocs/leyendas_Costa_Rica/app/src/components/AboutModal.jsx) está visible o cerrado. |

---

## 4. Subcomponentes Integrados

* [`AudioPlayer`](file:///c:/xampp/htdocs/leyendas_Costa_Rica/app/src/components/AudioPlayer.jsx): Montado en la capa superior para ambientación sonora.
* [`LegendCard`](file:///c:/xampp/htdocs/leyendas_Costa_Rica/app/src/components/LegendCard.jsx): Renderizado en bucle mapeando la lista exportada desde [`src/data/leyendas.js`](file:///c:/xampp/htdocs/leyendas_Costa_Rica/app/src/data/leyendas.js).
* [`AboutModal`](file:///c:/xampp/htdocs/leyendas_Costa_Rica/app/src/components/AboutModal.jsx): Diálogo modal controlado por `isModalOpen`.

---

## 5. Diseño y Disposición (Tailwind CSS)

* **Layout general:** `min-h-screen`, `flex flex-col justify-between`, fondo gobernado por el body en `index.css` con `background-position: top center` y `contain/100% auto` para preservar íntegros los árboles laterales de la ilustración.
* **Enmarcado y Despeje del Título:** Espaciado superior `pt-24 sm:pt-36 md:pt-44 lg:pt-48` y ancho máximo acotado (`max-w-4xl`, `px-6 sm:px-12 md:px-16`) diseñado para situar las tarjetas dentro del claro del bosque sin tapar los árboles de los extremos ni el letrero caligráfico superior.
* **Grilla de Leyendas:**
  * Móvil: `grid-cols-1`.
  * Pantallas medianas y grandes (`sm:`): `grid-cols-3` emulando las columnas `col-xs-4` del diseño original.
  * Separación: `gap-y-12 sm:gap-y-16 gap-x-6`.
* **Botón "Califícame":**
  * Posición: Fija en la esquina superior derecha (`fixed top-5 right-3 z-40`).
  * Destino: Abre el formulario del MEP en pestaña nueva con `rel="noopener noreferrer"`.
* **Botón de Información / Créditos:**
  * Centrado al pie de la grilla de leyendas.
  * Icono: `Info` con color amarillo (`#FFFF00`).

---

## 6. Accesibilidad (A11y)
* Los botones interactivos cuentan con atributos descriptivos `aria-label` y `title`.
* Enlaces externos definen explícitamente `rel="noopener noreferrer"` y `target="_blank"`.
