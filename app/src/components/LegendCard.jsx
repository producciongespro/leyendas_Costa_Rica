import React from 'react';
import { CloudDownload } from 'lucide-react';

export default function LegendCard({ leyenda }) {
  return (
    <div className="flex flex-col items-center">
      {/* Portada / Enlace al PDF */}
      <a
        href={leyenda.pdf}
        target="_blank"
        rel="noopener noreferrer"
        className="block transition-all duration-300 hover:opacity-50 hover:scale-105 cursor-pointer focus:outline-none"
        title={`Abrir leyenda ${leyenda.titulo}`}
      >
        <img
          src={leyenda.imagen}
          alt={leyenda.titulo}
          className="w-full max-w-[280px] h-auto drop-shadow-md mx-auto object-contain"
        />
      </a>

      {/* Botón de descarga de Respuestas */}
      <a
        href={leyenda.respuestas}
        download
        className="mt-3 inline-flex items-center gap-1.5 text-[#FFFF00] hover:text-yellow-300 font-bold text-sm tracking-wide transition-all duration-200 hover:drop-shadow-[0_0_8px_rgba(0,0,255,0.8)] focus:outline-none"
        title={`Descargar respuestas de ${leyenda.titulo}`}
      >
        <CloudDownload className="w-4 h-4 inline-block" />
        <span>Respuestas</span>
      </a>
    </div>
  );
}
