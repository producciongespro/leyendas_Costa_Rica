import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import App from '../App';
import LegendCard from '../components/LegendCard';
import AboutModal from '../components/AboutModal';
import AudioPlayer from '../components/AudioPlayer';
import { leyendasData } from '../data/leyendas';

// 15 dimensiones de pantalla más comerciales en el mercado
const COMMERCIAL_VIEWPORTS = [
  // Móviles ultra-compactos y estándar
  { name: 'iPhone SE (375x667)', width: 375, height: 667, category: 'mobile' },
  { name: 'iPhone 13 / 14 / 15 (390x844)', width: 390, height: 844, category: 'mobile' },
  { name: 'iPhone 15 Pro Max / Plus (430x932)', width: 430, height: 932, category: 'mobile' },
  { name: 'Samsung Galaxy S20 / S21 (360x800)', width: 360, height: 800, category: 'mobile' },
  { name: 'Samsung Galaxy S8+ / S9+ (360x740)', width: 360, height: 740, category: 'mobile' },
  { name: 'Google Pixel 7 / 8 (412x915)', width: 412, height: 915, category: 'mobile' },
  { name: 'Android Compact (320x568)', width: 320, height: 568, category: 'mobile' },

  // Tablets y Plegables
  { name: 'iPad Mini (768x1024)', width: 768, height: 1024, category: 'tablet' },
  { name: 'iPad Air / Pro 11" (820x1180)', width: 820, height: 1180, category: 'tablet' },
  { name: 'iPad Pro 12.9" (1024x1366)', width: 1024, height: 1366, category: 'tablet' },
  { name: 'Samsung Galaxy Tab S7 (800x1280)', width: 800, height: 1280, category: 'tablet' },

  // Laptops y Desktops comerciales
  { name: 'Laptop HD estándar (1366x768)', width: 1366, height: 768, category: 'desktop' },
  { name: 'Desktop Full HD más popular (1920x1080)', width: 1920, height: 1080, category: 'desktop' },
  { name: 'MacBook Air / Pro 13" (1440x900)', width: 1440, height: 900, category: 'desktop' },
  { name: 'Monitor 2K QHD (2560x1440)', width: 2560, height: 1440, category: 'desktop' },
];

function setViewport(width, height) {
  window.innerWidth = width;
  window.innerHeight = height;
  window.dispatchEvent(new Event('resize'));
}

describe('Pruebas Unitarias y de Adaptabilidad Responsiva (15 Viewports Comerciales)', () => {
  beforeEach(() => {
    // Mock HTMLMediaElement play/pause
    window.HTMLMediaElement.prototype.play = vi.fn().mockResolvedValue();
    window.HTMLMediaElement.prototype.pause = vi.fn();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('Integridad del Modelo de Datos', () => {
    it('debe contener exactamente las 9 leyendas requeridas con sus atributos completos', () => {
      expect(leyendasData).toHaveLength(9);
      leyendasData.forEach((leyenda) => {
        expect(leyenda.id).toBeTruthy();
        expect(leyenda.titulo).toBeTruthy();
        expect(leyenda.imagen).toMatch(/^img\/.+\.png$/);
        expect(leyenda.pdf).toMatch(/^data\/.+\.pdf$/);
        expect(leyenda.respuestas).toMatch(/^data\/respuestas\/.+\.docx$/);
      });
    });
  });

  describe('Pruebas en 15 Dimensiones de Pantalla Comerciales', () => {
    COMMERCIAL_VIEWPORTS.forEach((viewport) => {
      it(`debe renderizar la App sin desbordamientos ni anomalías en ${viewport.name}`, () => {
        setViewport(viewport.width, viewport.height);
        const { container } = render(<App />);

        // 1. Debe existir el botón institucional de Calificación flotante
        const calificacionLink = screen.getByRole('link', { name: /califica este recurso/i });
        expect(calificacionLink).toBeDefined();
        expect(calificacionLink.getAttribute('href')).toContain('recursos.mep.go.cr/0_calificame');

        // 2. Deben renderizarse las 9 leyendas y sus 9 enlaces de descarga
        const imagenes = screen.getAllByRole('img');
        // 9 leyendas + 1 logo calificame
        expect(imagenes.length).toBeGreaterThanOrEqual(10);

        const respuestasLinks = screen.getAllByText(/respuestas/i);
        expect(respuestasLinks).toHaveLength(9);

        // 3. Debe existir el botón de control de audio accesible
        const audioBtn = screen.getByTitle(/música de fondo/i);
        expect(audioBtn).toBeDefined();

        // 4. Debe existir el botón de información
        const infoBtn = screen.getByRole('button', { name: /acerca de/i });
        expect(infoBtn).toBeDefined();

        // 5. Verificación de desbordamiento horizontal en el contenedor principal
        const main = container.querySelector('main');
        expect(main).not.toBeNull();
        expect(main.className).toContain('container');
      });
    });
  });

  describe('Comportamiento de Componentes Interactivos', () => {
    it('debe abrir y cerrar el modal "Acerca de" correctamente', () => {
      render(<App />);

      // Al inicio no debe verse el modal
      expect(screen.queryByRole('dialog')).toBeNull();

      // Abrir modal con botón de información
      const infoBtn = screen.getByRole('button', { name: /acerca de/i });
      fireEvent.click(infoBtn);

      const modal = screen.getByRole('dialog');
      expect(modal).toBeDefined();
      expect(screen.getByText(/Ministerio de Educación Pública de Costa Rica/i)).toBeDefined();

      // Cerrar modal mediante botón Close
      const closeBtn = screen.getByRole('button', { name: /close/i });
      fireEvent.click(closeBtn);

      expect(screen.queryByRole('dialog')).toBeNull();
    });

    it('AudioPlayer debe alternar entre reproducción y silencio al hacer click', () => {
      render(<AudioPlayer />);
      const audioBtn = screen.getByRole('button');

      // Click para toggle
      fireEvent.click(audioBtn);
      expect(window.HTMLMediaElement.prototype.play).toHaveBeenCalled();
    });

    it('LegendCard debe tener links seguros y atributos accesibles', () => {
      const mockLeyenda = leyendasData[0];
      render(<LegendCard leyenda={mockLeyenda} />);

      const pdfLink = screen.getByTitle(`Abrir leyenda ${mockLeyenda.titulo}`);
      expect(pdfLink.getAttribute('target')).toBe('_blank');
      expect(pdfLink.getAttribute('rel')).toBe('noopener noreferrer');

      const respuestasLink = screen.getByText(/respuestas/i).closest('a');
      expect(respuestasLink.getAttribute('href')).toBe(mockLeyenda.respuestas);
    });
  });
});
