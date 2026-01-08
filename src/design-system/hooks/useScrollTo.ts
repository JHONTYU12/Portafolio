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

// HOOK DE REACT PARA MEMORIZAR FUNCIONES
// EVITA QUE LA FUNCION SE VUELVA A CREAR CADA VEZ QU SE RENDERIZA
import { useCallback } from 'react';

//Declaracion de nuestro hook personalizado
// to => id del elemento a hacer scroll
// con el offset le dicescuando espacio dejas arriba cuando scrolee
// por el header

export const useScrollTo = (to: string, offset: number = 0) => { 
  // scrollTo te movera por la paguina
  // envuelto en usecallbackl para que no cree la unciona cada vez que el componente se actualiza
  const scrollTo = useCallback(() => {
    const element = document.getElementById(to);
    if (element) {
      // Distancia entre el borde superior y el inicio del elemento - el espacio que decidimos dejar
      const elementPosition = element.offsetTop - offset;
      // Comando del scroll real
      window.scrollTo({
        top: elementPosition, //Mover la vista a ese punto vertical
        behavior: 'smooth' //scroll suave
      });
    }
    //Se guarda el calculo en memoria para no volverlo hacer
  }, [to, offset]);

  return scrollTo;
}; 