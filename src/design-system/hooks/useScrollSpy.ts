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


//HOOK QUE DETECTA EN TIEMPO REAL CUAL SECCION DEL SITIO ESTA ACTUALMENTE VISIBLE

//hook para manejar el scroll suave

//USESTATE => GUARDA LA SECCION ACTIVA
//USEEFFECT => CONFIGURAR EL LISTENER DE SCROLL Y ACTUALIZA DINAMICAMENTE
import { useState, useEffect } from 'react';

// HOOK useScrollSpy
// section - lista de secciones en el html
// offset es espacio adicional desde arriba para compensar los headers
// la funcion retorna un string ":string"


export const useScrollSpy = (sections: string[], offset: number = 80): string => {

  //UseState
  // ActiveSeccion nuestra variable
  // setActiveSection es con que funcion se actualiza el estado
  // le damos un valor inicial de cero
  //useState<string> ==> esto va a ser un string
  // toma el primer valor del arreblo
  // si no existe que pase nada
  const [activeSection, setActiveSection] = useState<string>(sections[0] || '');

  //HOOK DE EFECTO
  //Ejecutar codigo despues de que el componente se renderiza
  // Detecta el scroll del suusairo
  //Ve que seccion esta activa
  //Actualiza el estado de activeSection
  useEffect(() => {
    // Se ejecuta cada que el usuario haga scrol
    const handleScroll = () => {
      // Variable para ver cuanto ha recorrido el usuario descompensando lo que no se ve por header
      const scrollPosition = window.scrollY + offset;
      // Cuanto ves de la venta para saber si el usuario lelgo al final de la paquina
      const windowHeight = window.innerHeight;
      // Lo que no ves del documento
      const documentHeight = document.documentElement.scrollHeight;

      // Encontrar la sección activa
      //Se asime la primera seccion como activa
      let currentSection = sections[0] || '';
      
      // Si estamos muy cerca del final de la página, activar la última sección
      //Si el scroll mas lo que ves en pantalla llega casi al final entonces activa la ultima seccion
      if (scrollPosition + windowHeight >= documentHeight - 50) {
        currentSection = sections[sections.length - 1];
      } else {
        // Buscar la sección activa basada en la posición del scroll
        //Desde abajo cuando se hace scoll descendente
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i];
          const element = document.getElementById(section);
          
          if (element) {
            const elementTop = element.offsetTop;
            const elementBottom = elementTop + element.offsetHeight;
            
            // Si el scroll está dentro de esta sección (con un margen)
            if (scrollPosition >= elementTop - 150 && scrollPosition < elementBottom - 100) {
              //Cambiamos el valor de currensection
              currentSection = section;
              break;
            }
          }
        }
      }
      //Manda el use state de active section
      setActiveSection(currentSection);
    };

    // Agregar listener de scroll
    //Cuando el usuario haga scroll se ejecute habldescroll
    window.addEventListener('scroll', handleScroll);
    
    // Llamar una vez al inicio
    //cuando se monta el componente lo llama una vez
    handleScroll();

    // Cleanup
    //Evitar que el listener siga funcionando cuando ya no existe un componente
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections, offset]); //Si cambia una de estas dos entonces el efecto se volver a ejecutar
  return activeSection;
}; 