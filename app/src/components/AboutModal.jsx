import React from 'react';
import { X } from 'lucide-react';

export default function AboutModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs transition-opacity"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-md border border-neutral-700 p-6 text-white shadow-2xl overflow-hidden"
        style={{
          backgroundColor: '#000',
          backgroundImage: 'url("img/mystery-157015_1280.png")',
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-neutral-700/80">
          <h4 className="text-xl font-bold tracking-wide">Acerca de</h4>
          <button
            type="button"
            onClick={onClose}
            className="text-neutral-400 hover:text-white transition-colors p-1 rounded-md"
            aria-label="Cerrar modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Body */}
        <div className="py-4 text-sm leading-relaxed text-neutral-200 space-y-2">
          <p className="font-semibold text-white">
            Derechos Reservados Ministerio de Educación Pública de Costa Rica. DRTE
          </p>
          <p>
            Departamento de Gestión y Producción de Recursos Tecnológicos en Educación.
          </p>
          <p className="pt-2">
            <span className="font-semibold text-yellow-300">Desarrollo:</span><br />
            Patricia Hernández Conejo, Luis Chacón Campos, Oscar Pérez Ramírez.
          </p>
          <p>
            <span className="font-semibold text-yellow-300">Diseño:</span> Marco Brenes López
          </p>
          <p>
            <span className="font-semibold text-yellow-300">Contenido:</span><br />
            M.L. Evelyn Araya Fonseca, Ph. D. Richard Navarro Garro,<br />
            Asesores Nacionales de Español, Departamento de Primero y Segundo Ciclos.
          </p>
        </div>

        {/* Footer */}
        <div className="flex justify-end pt-3 border-t border-neutral-700/80">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-neutral-900 bg-white hover:bg-neutral-200 rounded transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
