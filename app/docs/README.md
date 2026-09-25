# Índice de Especificaciones del Sistema (docs/)

Este directorio constituye la **única fuente de verdad** funcional y técnica de los componentes y módulos de la aplicación.

---

## Estructura de Especificaciones

| Archivo de Especificación | Componente / Módulo Relacionado | Descripción |
| :--- | :--- | :--- |
| [`spec-app.md`](file:///c:/xampp/htdocs/leyendas_Costa_Rica/app/docs/spec-app.md) | [`src/App.jsx`](file:///c:/xampp/htdocs/leyendas_Costa_Rica/app/src/App.jsx) | Contenedor principal, layout responsivo, enlace Califícame y orquestación. |
| [`spec-legend-card.md`](file:///c:/xampp/htdocs/leyendas_Costa_Rica/app/docs/spec-legend-card.md) | [`src/components/LegendCard.jsx`](file:///c:/xampp/htdocs/leyendas_Costa_Rica/app/src/components/LegendCard.jsx) | Tarjeta individual de leyenda, carátula con enlace al PDF y descarga de respuestas. |
| [`spec-audio-player.md`](file:///c:/xampp/htdocs/leyendas_Costa_Rica/app/docs/spec-audio-player.md) | [`src/components/AudioPlayer.jsx`](file:///c:/xampp/htdocs/leyendas_Costa_Rica/app/src/components/AudioPlayer.jsx) | Reproductor de música ambiental, botón interactivo y manejo de políticas de autoplay. |
| [`spec-about-modal.md`](file:///c:/xampp/htdocs/leyendas_Costa_Rica/app/docs/spec-about-modal.md) | [`src/components/AboutModal.jsx`](file:///c:/xampp/htdocs/leyendas_Costa_Rica/app/src/components/AboutModal.jsx) | Diálogo modal de información institucional y créditos (MEP - GESPRO). |
| [`spec-data.md`](file:///c:/xampp/htdocs/leyendas_Costa_Rica/app/docs/spec-data.md) | [`src/data/leyendas.js`](file:///c:/xampp/htdocs/leyendas_Costa_Rica/app/src/data/leyendas.js) | Esquema y catálogo estático de datos con las 9 leyendas. |

---

## Reglas para Mantener esta Documentación
1. **Regla de Sincronización:** Cada vez que se agregue o altere una propiedad (prop), estado o comportamiento en un componente, debe actualizarse inmediatamente su correspondiente archivo `spec-*.md`.
2. **Estructura Estándar de una Especificación:**
   * **Descripción y Propósito**
   * **Props / Entradas** (nombre, tipo, requerido, valor por defecto, descripción)
   * **Estados Internos**
   * **Eventos y Métodos**
   * **Comportamiento Visual y Accesibilidad**
   * **Dependencias**
