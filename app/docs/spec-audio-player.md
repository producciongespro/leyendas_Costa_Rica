# Especificación Técnica: AudioPlayer (`src/components/AudioPlayer.jsx`)

- **Archivo fuente:** [`src/components/AudioPlayer.jsx`](file:///c:/xampp/htdocs/leyendas_Costa_Rica/app/src/components/AudioPlayer.jsx)
- **Tipo:** Componente de Control Multimedia
- **Ruta de documentación:** `app/docs/spec-audio-player.md`

---

## 1. Propósito
`AudioPlayer` gestiona la reproducción de la pista de ambientación (`audio/mystery.mp3`). Soluciona de manera elegante las restricciones de reproducción automática (*Autoplay Policy*) de los navegadores modernos, proveyendo al usuario un botón flotante accesible para pausar o reactivar el sonido en cualquier momento.

---

## 2. Entradas (Props)
No requiere props directas. Utiliza la referencia del elemento `<audio>` embebido.

---

## 3. Estado Interno (State) y Referencias

| Variable | Tipo | Inicial | Descripción |
| :--- | :--- | :--- | :--- |
| `isPlaying` | `boolean` | `false` | Indica si la pista se encuentra sonando activamente. |
| `audioRef` | `useRef` | `null` | Referencia directa al nodo DOM `<audio>`. |

---

## 4. Ciclo de Vida y Manejo de Autoplay

1. **Intento de inicio automático (`useEffect`):**
   * Al montar el componente, invoca `audioRef.current.play()`.
   * Si el navegador permite la reproducción sin restricciones, actualiza `isPlaying = true`.
2. **Fallback por bloqueo de navegador:**
   * Si la promesa de `play()` es rechazada (error `NotAllowedError`), se agregan listeners globales temporales para los eventos `'click'` y `'keydown'`.
   * Tan pronto el usuario interactúa con la página, la reproducción inicia suavemente y los listeners se desuscriben para prevenir fugas de memoria.
3. **Control Manual:**
   * El usuario puede alternar la reproducción llamando a `toggleSound()`.

---

## 5. Diseño y Disposición (Tailwind CSS)

* **Botón flotante:**
  * Posicionado en la esquina inferior izquierda: `fixed bottom-4 left-4 z-50`.
  * Estilo: `bg-black/75 hover:bg-black border border-yellow-400/50 rounded-full backdrop-blur-sm`.
  * Iconos: Alterna entre `Volume2` (con animación de pulso) y `VolumeX`.
  * Texto responsivo: Oculto en pantallas ultra compactas (`hidden sm:inline`) para optimizar espacio en móviles.
