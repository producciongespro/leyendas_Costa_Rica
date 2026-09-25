# Guía de Reglas y Lineamientos para Agentes y Desarrolladores (AGENTS.md)

Este documento define los estándares arquitectónicos, convenciones de código y reglas de evolución técnica para el proyecto **Leyendas de Costa Rica (versión moderna 2026)**.

---

## 1. Visión y Propósito del Proyecto
* **Objetivo:** Modernizar el recurso educativo interactivo institucional de *Leyendas Costarricenses* (original del Ministerio de Educación Pública - GESPRO), preservando la fidelidad visual y temática del sitio original, pero empleando un stack moderno, reactivo, accesible y de alto rendimiento.
* **Stack Tecnológico:**
  * **Framework / Runtime:** React 19 (`react`, `react-dom`) + JavaScript (ESM nativo).
  * **Empaquetador y Servidor Dev:** Vite (con `@vitejs/plugin-react`).
  * **Motor de Estilos:** Tailwind CSS v4 (utilizando `@tailwindcss/vite`).
  * **Iconografía:** Lucide React (`lucide-react`).
  * **Analítica:** Google Tag Manager / Analytics (`gtag.js` - ID `G-TFY8PCJN35`).

---

## 2. Estructura de Directorios

```text
leyendas_Costa_Rica/
├── app/                      <-- Raíz de la aplicación moderna
│   ├── docs/                 <-- ÚNICA FUENTE DE VERDAD: especificaciones por componente (spec-*.md)
│   ├── public/               <-- Activos estáticos públicos (audio, data/PDFs, img)
│   │   ├── audio/
│   │   ├── data/
│   │   │   └── respuestas/
│   │   └── img/
│   ├── src/                  <-- Código fuente React
│   │   ├── components/       <-- Componentes modulares
│   │   ├── data/             <-- Modelos y catálogos de datos estáticos
│   │   ├── App.jsx           <-- Orquestador principal
│   │   ├── index.css         <-- Import Tailwind v4 y estilos base
│   │   └── main.jsx          <-- Punto de entrada DOM
│   ├── AGENTS.md             <-- Este archivo de reglas
│   ├── index.html            <-- Shell HTML con SEO y Google Tag
│   ├── package.json
│   └── vite.config.js
├── app_old/                  <-- Resguardo histórico del proyecto original (Bootstrap 3/jQuery)
└── documentacion/            <-- Documentación institucional externa adicional
```

---

## 3. Reglas Críticas de Arquitectura y Desarrollo

### 3.1. Sin Base de Datos (Static Data Model)
* El proyecto no utiliza ni requiere backend dinámico ni bases de datos.
* Todo el catálogo de leyendas debe ser administrado a través de [`src/data/leyendas.js`](file:///c:/xampp/htdocs/leyendas_Costa_Rica/app/src/data/leyendas.js). Si se agregan nuevas leyendas o se modifican rutas, debe actualizarse dicho archivo y su correspondiente especificación en `docs/spec-data.md`.

### 3.2. Única Fuente de Verdad para Componentes (`app/docs/`)
* **Regla estricta:** Cada componente nuevo o modificado debe tener su archivo de especificación correspondiente en `app/docs/spec-[nombre-componente].md`.
* Los archivos `spec-*.md` deben detallar:
  * Propósito del componente.
  * Props y tipos esperados.
  * Estados internos y ciclo de vida.
  * Clases de estilo / diseño responsive.
  * Consideraciones de accesibilidad (ARIA, contrastes) y dependencias.

### 3.3. Estilos y Diseño Visual
* Utilizar **Tailwind CSS v4** siempre que sea posible.
* Evitar agregar archivos `.css` dispersos. Modificar únicamente [`src/index.css`](file:///c:/xampp/htdocs/leyendas_Costa_Rica/app/src/index.css) si se requieren directivas globales o configuraciones `@theme`.
* Mantener la temática visual mística (fondos oscuros, tipografías legibles y acentos en amarillo `#FFFF00` y morado característicos de la versión institucional).

### 3.4. Manejo de Multimedia y Autoplay
* Los navegadores modernos bloquean la reproducción automática de audio con sonido si el usuario no ha interactuado previamente.
* Cualquier control de audio debe contemplar fallback elegante: silenciado/desactivado hasta que haya interacción del usuario o activación manual mediante el control visual flotante.

---

## 4. Comandos de Trabajo Habituales

* Iniciar servidor de desarrollo:
  ```bash
  npm run dev
  ```
* Compilar para producción:
  ```bash
  npm run build
  ```
* Vista previa del build local:
  ```bash
  npm run preview
  ```

## 5. Regla obligatoria de codificación y anti-mojibake

- Todo archivo de texto del proyecto debe mantenerse en **UTF-8 sin mojibake**.
- Ningún cambio puede introducir cadenas visibles con patrones de mojibake como
  `Ã`, `Â`, `â€™`, `â€œ`, `â€`, el carácter de reemplazo Unicode U+FFFD o signos de interrogación en lugar de tildes y `ñ`.
- La regla aplica a código fuente, documentación, datos JSON, HTML y CSS:
  `.js`, `.jsx`, `.md`, `.json`, `.html`, `.css` y archivos de configuración.
- No se deben reescribir archivos con comandos que puedan reinterpretar mal
  UTF-8, especialmente rondas `Get-Content` -> `Set-Content` de PowerShell
  sobre archivos con tildes, `ñ`, `ü`, signos `¿` o `¡`.
- Para editar texto con caracteres en español se debe preferir `apply_patch`.
  Si se requiere un script, debe leer y escribir explícitamente en UTF-8 real,
  por ejemplo con APIs que reciban encoding `utf8` y sin depender de la
  codificación por defecto de la terminal.
- Después de cualquier cambio que toque texto visible, documentación, datos o
  atributos accesibles, es obligatorio ejecutar esta verificación desde `app/`:
  `rg -n --glob '*.{js,jsx,md,json,html,css}' 'Ã|Â|â€™|â€œ|â€|\x{FFFD}' src docs public index.html README.md`
- El comando anterior debe terminar sin coincidencias. Si devuelve resultados,
  esos textos deben corregirse antes de cerrar la tarea. La única excepción son
  ejemplos intencionales dentro de esta regla.
- Antes de cerrar la tarea, revisar visualmente al menos un texto afectado con
  tildes, eñes y signos propios del español en el archivo fuente, no solo en la
  consola, porque algunas terminales pueden mostrar mal contenido UTF-8 válido.

## 6. Regla de commits

- Cuando la persona usuaria pida un commit, se debe revisar el estado real de
  Git antes de redactar el mensaje.
- El commit debe describir de forma amplia y clara todos los cambios incluidos
  en esa iteración, salvo que la persona usuaria delimite otro alcance.
- El encabezado debe incluir la **fecha actual** en formato `DD-MM-YYYY`.
- Añadir un cuerpo con el detalle de los cambios y las validaciones realizadas,
  indicando limitaciones o comprobaciones pendientes cuando corresponda.
- Si la persona usuaria pide un prefijo específico adicional, debe respetarse.

## 7. Regla de sincronización con GitHub

- No asumir que “sincronizar” significa solo `push` o solo `pull`.
- Primero se debe revisar el estado real entre la rama local y la remota.
- Si hay divergencia o cambios locales no confirmados, se debe actuar de forma
  segura y explicarlo con claridad.