import React, { useState } from 'react';
import { Info } from 'lucide-react';
import { leyendasData } from './data/leyendas';
import LegendCard from './components/LegendCard';
import AboutModal from './components/AboutModal';
import AudioPlayer from './components/AudioPlayer';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen text-white flex flex-col justify-between selection:bg-purple-600 selection:text-white">
      {/* Botón flotante Califícame */}
      <aside id="calificame" className="fixed top-5 right-3 z-40">
        <a
          title="Califícame"
          id="enlace_calificame"
          target="_blank"
          rel="noopener noreferrer"
          href="https://recursos.mep.go.cr/0_calificame/app/index.html?id_app=3"
          className="inline-block transition-transform duration-200 hover:scale-105"
        >
          <img
            className="w-16 sm:w-20 md:w-24 h-auto drop-shadow-md cursor-pointer hover:opacity-80"
            src="img/calificame_byn.png"
            alt="Califica este recurso"
          />
        </a>
      </aside>

      {/* Reproductor de audio misterio */}
      <AudioPlayer />

      {/* Contenedor principal con espacio suficiente para despejar el titulo del fondo y enmarcarse entre los arboles */}
      <main className="container mx-auto px-6 sm:px-12 md:px-16 pt-24 sm:pt-36 md:pt-44 lg:pt-48 pb-12 max-w-4xl">
        {/* Rejilla de 9 leyendas: 3 columnas idéntico a col-xs-4 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-12 sm:gap-y-16 gap-x-6">
          {leyendasData.map((leyenda) => (
            <LegendCard key={leyenda.id} leyenda={leyenda} />
          ))}
        </div>

        {/* Botón de Información / Acerca de centrado */}
        <div className="mt-14 mb-8 flex justify-center">
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="p-3 bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-600 rounded-lg shadow-lg hover:shadow-yellow-500/20 transition-all hover:scale-110 cursor-pointer focus:outline-none"
            title="Acerca de este recurso"
            aria-label="Abrir modal Acerca de"
          >
            <Info className="w-6 h-6 text-[#FFFF00]" />
          </button>
        </div>
      </main>

      {/* Modal Acerca De */}
      <AboutModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
