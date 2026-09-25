# Leyendas de Costa Rica (Versión Moderna 2026)

Recurso interactivo educativo diseñado para el rescate y estudio de las leyendas costarricenses, enfocado para estudiantes de primaria y docentes.

Originalmente desarrollado por el Ministerio de Educación Pública de Costa Rica (MEP - GESPRO).

---

## 🚀 Tecnologías Principales

* **React 19**
* **Vite**
* **Tailwind CSS v4**
* **Lucide React** (iconos accesibles)
* **Google Tag Manager / Analytics** (`G-TFY8PCJN35`)

---

## 📖 Documentación y Reglas

El proyecto cuenta con un sistema estricto de documentación:

1. **Reglas para Desarrolladores y Agentes de IA:** Consulta [`AGENTS.md`](./AGENTS.md) para conocer las convenciones del código, arquitectura sin base de datos y lineamientos de multimedia.
2. **Especificaciones por Componente (Única Fuente de Verdad):** Toda la arquitectura detallada se encuentra en la carpeta [`docs/`](./docs/):
   * [`docs/spec-app.md`](./docs/spec-app.md): Layout principal y orquestación.
   * [`docs/spec-legend-card.md`](./docs/spec-legend-card.md): Tarjetas interactivas de las leyendas.
   * [`docs/spec-audio-player.md`](./docs/spec-audio-player.md): Reproductor ambiental y políticas de autoplay.
   * [`docs/spec-about-modal.md`](./docs/spec-about-modal.md): Modal institucional de créditos.
   * [`docs/spec-data.md`](./docs/spec-data.md): Esquema y catálogo estático de datos.

---

## 🛠️ Comandos de Instalación y Ejecución

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo en http://localhost:5173
npm run dev

# Compilar para producción en dist/
npm run build

# Previsualizar el build de producción
npm run preview
```
