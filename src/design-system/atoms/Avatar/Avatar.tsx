/**
 * ÁTOMO - AVATAR
 *
 * El átomo Avatar es un componente para mostrar imágenes de perfil.
 * Maneja tanto imágenes como iniciales de texto como fallback.
 *
 * Este componente es el más pequeño del sistema de diseño atómico.
 * Solo maneja la presentación de una imagen de perfil.
 *
 * Props:
 * - src: URL de la imagen (opcional)
 * - alt: texto alternativo para accesibilidad
 * - size: tamaño del avatar ('sm', 'md', 'lg', 'xl')
 * - name: nombre para mostrar inicial si no hay imagen
 *
 * Ejemplo de uso:
 * <Avatar src="/images/avatar.jpeg" alt="Josué Peralta" size="lg" />
 * <Avatar name="Josué Peralta" size="md" />
 */

import React from 'react';
import styled from 'styled-components';
import { colors, typography } from '../../tokens';

// Props del Avatar
export interface AvatarProps {
  /** URL de la imagen */
  src?: string;
  /** Texto alternativo para accesibilidad */
  alt?: string;
  /** Tamaño del avatar */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Nombre para mostrar inicial si no hay imagen */
  name?: string;
  /** Clases CSS adicionales */
  className?: string;
}

// Mapa de tamaños
const sizeMap = {
  sm: '40px',
  md: '80px',
  lg: '120px',
  xl: '200px'
};

// Mapa de tamaños de fuente
const fontSizeMap = {
  sm: typography.fontSize.sm,
  md: typography.fontSize.lg,
  lg: typography.fontSize['2xl'],
  xl: typography.fontSize['6xl']
};

// Componente styled para el avatar
const StyledAvatar = styled.div<Pick<AvatarProps, 'size'>>`
  width: ${({ size = 'md' }) => sizeMap[size]};
  height: ${({ size = 'md' }) => sizeMap[size]};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.background.elevated};
  color: ${colors.text.secondary};
  font-size: ${({ size = 'md' }) => fontSizeMap[size]};
  font-weight: ${typography.fontWeight.bold};
  border: 3px solid ${colors.border.accent};
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  
  /* Efecto de borde con gradiente */
  &::before {
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    border-radius: 50%;
    background: linear-gradient(45deg, ${colors.primary[400]}, ${colors.accent[400]});
    z-index: -1;
    opacity: 0.3;
  }
  
  /* Hover effect */
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
  }
  
  /* Responsive */
  @media (max-width: 768px) {
    width: ${({ size = 'md' }) => size === 'xl' ? '160px' : sizeMap[size]};
    height: ${({ size = 'md' }) => size === 'xl' ? '160px' : sizeMap[size]};
  }
`;

// Componente para la imagen
const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  transition: transform 0.3s ease-in-out;
  
  ${StyledAvatar}:hover & {
    transform: scale(1.1);
  }
`;

// Componente para la inicial
const AvatarInitial = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${typography.fontWeight.bold};
  text-transform: uppercase;
`;

/**
 * Componente Avatar
 * 
 * @example
 * ```tsx
 * // Con imagen
 * <Avatar src="/images/avatar.jpeg" alt="Josué Peralta" size="lg" />
 * 
 * // Sin imagen (muestra inicial)
 * <Avatar name="Josué Peralta" size="md" />
 * 
 * // Tamaños disponibles
 * <Avatar src="/image.jpg" size="sm" />
 * <Avatar src="/image.jpg" size="md" />
 * <Avatar src="/image.jpg" size="lg" />
 * <Avatar src="/image.jpg" size="xl" />
 * ```
 */
export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size = 'md',
  name,
  className,
  ...props
}) => {
  // Si hay imagen, la muestra
  if (src) {
    return (
      <StyledAvatar size={size} className={className} {...props}>
        <AvatarImage src={src} alt={alt || name || 'Avatar'} />
      </StyledAvatar>
    );
  }
  
  // Si no hay imagen, muestra la inicial del nombre
  const initial = name ? name.charAt(0).toUpperCase() : '?';
  
  return (
    <StyledAvatar size={size} className={className} {...props}>
      <AvatarInitial>
        {initial}
      </AvatarInitial>
    </StyledAvatar>
  );
};

export default Avatar; 