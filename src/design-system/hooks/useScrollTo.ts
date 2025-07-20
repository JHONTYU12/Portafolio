/**
 * HOOK - USE SCROLL TO
 *
 * Hook personalizado para navegación suave a secciones.
 * Sigue las mejores prácticas del diseño atómico.
 *
 * Este hook es parte del sistema de diseño atómico.
 * Solo maneja la lógica de navegación suave.
 *
 * @param to - ID del elemento al que hacer scroll
 * @param offset - Offset adicional para el scroll
 * @returns scrollTo - Función para hacer scroll
 *
 * Ejemplo de uso:
 * const scrollTo = useScrollTo('proyectos', 80);
 * <Text onClick={() => scrollTo()}>Proyectos</Text>
 */

import { useCallback } from 'react';

export const useScrollTo = (to: string, offset: number = 0) => {
  const scrollTo = useCallback(() => {
    const element = document.getElementById(to);
    if (element) {
      const elementPosition = element.offsetTop - offset;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  }, [to, offset]);

  return scrollTo;
}; 