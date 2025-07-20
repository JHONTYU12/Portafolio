/**
 * ÁTOMO - TECHNOLOGY ICON
 * 
 * El átomo TechnologyIcon es un componente para mostrar iconos de tecnologías.
 * Utiliza tokens de colores y espaciado para mantener consistencia.
 * 
 * Jerarquía del diseño atómico:
 * - Tokens: Valores base (colores, tipografía, espaciado)
 * - Átomos: Componentes más pequeños (botones, inputs, textos, iconos) ← ESTE COMPONENTE
 * - Moléculas: Combinación de átomos (formularios, cards)
 * - Organismos: Secciones complejas (header, footer, sidebar)
 * - Plantillas: Layouts de páginas
 * - Páginas: Implementación final
 */

import React from 'react';
import styled from 'styled-components';
import { colors, spacing } from '../../tokens';

// Props del componente TechnologyIcon
export interface TechnologyIconProps {
  /** URL del icono de la tecnología */
  src?: string;
  /** Texto alternativo del icono */
  alt?: string;
  /** Tamaño del icono */
  size?: 'sm' | 'md' | 'lg';
  /** Clases CSS adicionales */
  className?: string;
}

// Mapeo de tamaños
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
  width: ${({ size = 'md' }) => sizeMap[size]};
  height: ${({ size = 'md' }) => sizeMap[size]};
  background-image: ${({ $src }) => $src ? `url(${$src})` : 'none'};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: ${colors.background.elevated};
  border-radius: ${spacing[2]};
  flex-shrink: 0;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`;

/**
 * Componente TechnologyIcon
 * 
 * @example
 * ```tsx
 * <TechnologyIcon src="/icons/react.svg" alt="React" size="md" />
 * <TechnologyIcon src="/icons/nodejs.svg" alt="Node.js" size="lg" />
 * ```
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
      role="img"
      aria-label={alt}
      {...props}
    />
  );
};

export default TechnologyIcon; 