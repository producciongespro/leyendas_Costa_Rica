import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function AudioPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Try autoplay
    const promise = audio.play();
    if (promise !== undefined) {
      promise
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // Autoplay blocked by browser policy: play on first user interaction
          const handleFirstClick = () => {
            audio.play().then(() => {
              setIsPlaying(true);
            }).catch(() => {});
            window.removeEventListener('click', handleFirstClick);
            window.removeEventListener('keydown', handleFirstClick);
          };

          window.addEventListener('click', handleFirstClick);
          window.addEventListener('keydown', handleFirstClick);
        });
    }
  }, []);

  const toggleSound = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {});
    }
  };

  return (
    <>
      <audio ref={audioRef} src="audio/mystery.mp3" loop />
      <button
        type="button"
        onClick={toggleSound}
        className="fixed bottom-4 left-4 z-50 flex items-center gap-2 px-3 py-2 text-xs font-semibold tracking-wide text-yellow-300 bg-black/75 hover:bg-black border border-yellow-400/50 rounded-full shadow-lg transition-all hover:scale-105 backdrop-blur-sm cursor-pointer"
        title={isPlaying ? 'Silenciar música de fondo' : 'Activar música de fondo'}
        aria-label={isPlaying ? 'Silenciar música de fondo' : 'Activar música de fondo'}
      >
        {isPlaying ? (
          <>
            <Volume2 className="w-4 h-4 text-yellow-400 animate-pulse" />
            <span className="hidden sm:inline">Música On</span>
          </>
        ) : (
          <>
            <VolumeX className="w-4 h-4 text-gray-400" />
            <span className="hidden sm:inline text-gray-300">Música Off</span>
          </>
        )}
      </button>
    </>
  );
}
