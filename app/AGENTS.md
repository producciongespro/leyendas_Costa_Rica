# Guía y Estándares del Proyecto (AGENTS.md)

Estándares arquitectónicos y reglas técnicas obligatorias para el proyecto **Leyendas de Costa Rica (versión moderna 2026)**.

---

## 1. Stack Tecnológico
* **Framework:** React 19 (`react`, `react-dom`) + JavaScript ESM nativo.
* **Empaquetador:** Vite con `@vitejs/plugin-react` y `base: './'`.
* **Estilos:** Tailwind CSS v4 con `@tailwindcss/vite` (estilos base en `src/index.css`).
* **Iconos:** Lucide React (`lucide-react`).
* **Analítica:** Google Tag Manager / Analytics (`G-TFY8PCJN35` en `index.html`).
* **Pruebas:** Vitest + React Testing Library + jsdom.

---

## 2. Estructura del Proyecto

```text
leyendas_Costa_Rica/
└── app/
    ├── docs/                 <-- Única fuente de verdad: especificaciones (spec-*.md)
    ├── public/               <-- Activos estáticos públicos (audio, data/PDFs, img)
    │   ├── audio/            <-- mystery.mp3
    │   ├── data/             <-- PDFs de lectura y subcarpeta respuestas/ (.docx)
    │   └── img/              <-- Portadas, fondo y elementos gráficos
    ├── src/                  <-- Código fuente React
    │   ├── components/       <-- App.jsx, LegendCard.jsx, AudioPlayer.jsx, AboutModal.jsx
    │   ├── data/             <-- leyendas.js (modelo estático de 9 leyendas)
    │   ├── __tests__/        <-- responsive-and-components.test.jsx (15 resoluciones)
    │   ├── index.css         <-- @import "tailwindcss" y fondo
    │   └── main.jsx          <-- Punto de entrada DOM
    ├── AGENTS.md             <-- Reglas del proyecto
    ├── index.html            <-- Shell HTML con SEO y Google Analytics
    └── package.json
```

---

## 3. Reglas Críticas de Desarrollo

1. **Sin base de datos ni backend:** Todos los datos se gestionan exclusivamente en [`src/data/leyendas.js`](file:///c:/xampp/htdocs/leyendas_Costa_Rica/app/src/data/leyendas.js). Cualquier cambio en leyendas o rutas debe reflejarse en dicho archivo y en [`docs/spec-data.md`](file:///c:/xampp/htdocs/leyendas_Costa_Rica/app/docs/spec-data.md).
2. **Única Fuente de Verdad (`app/docs/`):** Todo componente tiene un archivo de especificación `docs/spec-[nombre].md` que debe mantenerse sincronizado al alterar props, estados o comportamiento.
3. **Estilos y Fondo:** Usar utilidades de Tailwind v4. El fondo (`fondo-01.jpg`) debe mantener `background-position: top center` y `contain` en pantallas anchas para no recortar los árboles laterales de la ilustración.
4. **Multimedia:** El reproductor de audio maneja el bloqueo de autoplay de los navegadores iniciando automáticamente al primer clic o mediante el botón flotante inferior.
5. **Descargas:** Los enlaces a respuestas Word (`.docx`) deben conservar el atributo `download` y respetar el casing exacto del archivo en disco.

---

## 4. Comandos de Trabajo

Ejecutar siempre desde la carpeta `app/`:

```bash
npm run dev      # Servidor local de desarrollo
npm run lint     # Linter rápido (Oxlint)
npm test         # Pruebas unitarias y responsivas (Vitest)
npm run build    # Compilación para producción (genera dist/)
npm run preview  # Previsualizar build de producción
```

---

## 5. Regla Obligatoria de Codificación y Anti-Mojibake

- Todo archivo de texto debe mantenerse en **UTF-8 sin mojibake**.
- Queda prohibido introducir caracteres corruptos como `Ã`, `Â`, `â€™`, `â€œ`, `\uFFFD` o signos de interrogación en lugar de tildes y `ñ`.
- Comando de verificación obligatoria desde `app/`:
  `node -e "const fs=require('fs'),path=require('path');let err=0;['src','docs','public','index.html','README.md'].forEach(function scan(p){if(!fs.existsSync(p))return;if(fs.statSync(p).isDirectory())fs.readdirSync(p).forEach(f=>scan(path.join(p,f)));else if(/\.(js|jsx|md|json|html|css)$/.test(p)&&/[\u00C3\u00C2\uFFFD]|â€™|â€œ|â€/.test(fs.readFileSync(p,'utf8'))){console.log('Mojibake:',p);err++;}});if(err)process.exit(1);console.log('UTF-8 OK');"`

---

## 6. Reglas de Git

1. **Commits solo a petición del usuario:** No realizar commits automáticos sin indicación explícita.
2. **Formato de Commit:**
   * Encabezado con fecha en formato `DD-MM-YYYY` (ej. `tipo: descripción (DD-MM-YYYY)`).
   * Cuerpo descriptivo detallando cambios específicos y validaciones ejecutadas.
3. **Sincronización:** Comprobar el estado real local y remoto antes de ejecutar `push` o `pull`.