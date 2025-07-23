/*

  ÁTOMO - TECHNOLOGY ICON
  El átomo TechnologyIcon es un componente para mostrar iconos de tecnologías.
  Utiliza tokens de colores y espaciado para mantener consistencia.

  */

import React from 'react'; // Libreria de React
import styled from 'styled-components'; // Componente de stylos
import { colors, spacing } from '../../tokens'; // Tokens a usar

// Props del componente TechnologyIcon
export interface TechnologyIconProps {
  /** URL de la imagen del icono*/
  src?: string;
  /** Texto alternativo del icono para acesibilidad*/
  alt?: string; // lo que sale cuando no hay imagen, o para los ciegos.
  /** Tamaño del icono */
  size?: 'sm' | 'md' | 'lg'; // Solo puedes usar uno de esos
  /** Clases CSS adicionales */
  className?: string; // Cualqerui 
}

//Constantes que vamos a usar nada mas
// Mapeo de tamaños se hace aqui porque el sm de aqui no es el mismo del boton y asi.
const sizeMap = {
  sm: '32px',
  md: '48px',
  lg: '64px'
};

// Props para el styled component
  interface StyledIconProps {
  size: 'sm' | 'md' | 'lg';
  $src?: string; // Usar $ para evitar pasar la prop al DOM
}

// Componente styled para el icono
const StyledIcon = styled.div<StyledIconProps>`
  width: ${({ size = 'md' }) => sizeMap[size]}; // ancho
  height: ${({ size = 'md' }) => sizeMap[size]};
  background-image: ${({ $src }) => $src ? `url(${$src})` : 'none'}; // si hay src muestra imagen 

  // Muestra la imagen sin cortarla aunque no llene el espacio 
  // si el fondo es mas grande de la imagen la ajusta
  background-size: contain;  

  // si la imagen es pequeña que no se repita como mosaico para llenar todo
  background-repeat: no-repeat; 


  // Pon la imagen en el centro
  background-position: center;

  // La imagen se esta pasando como fondo no como etiqueta y aveces puede que no complete o cuanto tiene imagenes trasnparentes
  // Ahi necesitamos el color de fondo
  background-color: ${colors.background.elevated}; // cambiamos a dark para ver como se veria en otro color

  // Redondea las esquinas
  border-radius: ${spacing[2]};

  // evita que la imagen se encoja si esta dentro de un stack con mas componentes
  flex-shrink: 0;

  //transicion suave
  transition: all 0.2s ease-in-out;
  
  // cuando paso el mouse que se agrande un poco y de la sombra
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(113, 113, 113, 0.2);
  }
`;

/**
 * Componente TechnologyIcon
 * @example
 * <TechnologyIcon src="/icons/react.svg" alt="React" size="md" />
 * <TechnologyIcon src="/icons/nodejs.svg" alt="Node.js" size="lg" />
 */


export const TechnologyIcon: React.FC<TechnologyIconProps> = ({
  src,
  alt,
  size = 'md',
  className,
  ...props
}) => {
  return (
    <StyledIcon
      $src={src}
      size={size}
      className={className}
      // Es para accesibilidad cuando con la etiqueta no es muy claro
      role="img"
      // Por que no usamos solo "alt"
      // porque el alt es para etiqueta de imagenes y entonces aqui no se usa eso 
      // se pasa por parametro el alt y aqui adentro para eso a aria-label que si funciona como alt
      aria-label={alt}
      {...props}
    />
  );
};

export default TechnologyIcon; 