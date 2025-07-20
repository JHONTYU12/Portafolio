/**
 * HOOK - USE SCROLL SPY
 *
 * Hook personalizado para detectar qué sección está visible.
 * Sigue las mejores prácticas del diseño atómico.
 *
 * Este hook es parte del sistema de diseño atómico.
 * Solo maneja la lógica de detección de secciones activas.
 *
 * @param sections - IDs de las secciones a monitorear
 * @param offset - Offset adicional para el cálculo
 * @returns activeSection - ID de la sección activa
 *
 * Ejemplo de uso:
 * const activeSection = useScrollSpy(['inicio', 'proyectos', 'tecnologias', 'contacto'], 80);
 */

import { useState, useEffect } from 'react';

export const useScrollSpy = (sections: string[], offset: number = 80): string => {
  const [activeSection, setActiveSection] = useState<string>(sections[0] || '');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Encontrar la sección activa
      let currentSection = sections[0] || '';
      
      // Si estamos muy cerca del final de la página, activar la última sección
      if (scrollPosition + windowHeight >= documentHeight - 50) {
        currentSection = sections[sections.length - 1];
      } else {
        // Buscar la sección activa basada en la posición del scroll
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i];
          const element = document.getElementById(section);
          
          if (element) {
            const elementTop = element.offsetTop;
            const elementBottom = elementTop + element.offsetHeight;
            
            // Si el scroll está dentro de esta sección (con un margen)
            if (scrollPosition >= elementTop - 150 && scrollPosition < elementBottom - 100) {
              currentSection = section;
              break;
            }
          }
        }
      }

      setActiveSection(currentSection);
    };

    // Agregar listener de scroll
    window.addEventListener('scroll', handleScroll);
    
    // Llamar una vez al inicio
    handleScroll();

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections, offset]);

  return activeSection;
}; 