/**
 * ÁTOMO - TECHNOLOGY TAG
 * 
 * El átomo TechnologyTag es un componente para mostrar etiquetas de tecnologías.
 * Utiliza tokens de colores, tipografía y espaciado para mantener consistencia.
 * 
 * Jerarquía del diseño atómico:
 * - Tokens: Valores base (colores, tipografía, espaciado)
 * - Átomos: Componentes más pequeños (botones, inputs, textos, tags) ← ESTE COMPONENTE
 * - Moléculas: Combinación de átomos (formularios, cards)
 * - Organismos: Secciones complejas (header, footer, sidebar)
 * - Plantillas: Layouts de páginas
 * - Páginas: Implementación final
 */

import React from 'react';
import styled from 'styled-components';
import { colors, spacing, typography } from '../../tokens';

// Props del componente TechnologyTag
export interface TechnologyTagProps {
  /** Texto de la etiqueta */
  children: React.ReactNode;
  /** Variante de color */
  variant?: 'primary' | 'secondary' | 'accent';
  /** Tamaño del tag */
  size?: 'sm' | 'md' | 'lg';
  /** Clases CSS adicionales */
  className?: string;
  /** Función onClick */
  onClick?: () => void; // Opcional, si tu quieres que el tag haga algo debes pasarle la funcion aqui
}

// Mapeo de tamaños
const sizeMap = {
  sm: {
    padding: `${spacing[1]} ${spacing[2]}`,
    fontSize: typography.fontSize.xs,
    borderRadius: spacing[1]
  },
  md: {
    padding: `${spacing[2]} ${spacing[3]}`,
    fontSize: typography.fontSize.sm,
    borderRadius: spacing[2]
  },
  lg: {
    padding: `${spacing[3]} ${spacing[4]}`,
    fontSize: typography.fontSize.base,
    borderRadius: spacing[2]
  }
};

// Mapeo de variantes
const variantMap = {
  primary: {
    backgroundColor: colors.primary[900],
    color: colors.primary[200],
    borderColor: colors.primary[800],
    hoverBackground: colors.primary[800]
  },
  secondary: {
    backgroundColor: colors.background.elevated,
    color: colors.text.secondary,
    borderColor: colors.border.primary,
    hoverBackground: colors.background.secondary
  },
  accent: {
    backgroundColor: colors.accent[900],
    color: colors.accent[200],
    borderColor: colors.accent[800],
    hoverBackground: colors.accent[800]
  }
};

// Componente styled para el tag y devimos con el pick que solo acepta 3 propr
const StyledTag = styled.span<Pick<TechnologyTagProps, 'variant' | 'size' | 'onClick'>>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  // tamaño y tipografia condicional 
  // Extrae el size y segun las configuraciones del sizemap de pading- fontsize lo configura
  
  padding: ${({ size = 'md' }) => sizeMap[size].padding};
  font-size: ${({ size = 'md' }) => sizeMap[size].fontSize};
  font-weight: ${typography.fontWeight.medium};
  border-radius: ${({ size = 'md' }) => sizeMap[size].borderRadius};
  border: 1px solid ${({ variant = 'primary' }) => variantMap[variant].borderColor};
  background-color: ${({ variant = 'primary' }) => variantMap[variant].backgroundColor};
  color: ${({ variant = 'primary' }) => variantMap[variant].color};
  transition: all 0.2s ease-in-out;
  cursor: ${({ onClick }) => onClick ? 'pointer' : 'default'}; // si exsite onclick sera como boton pointer sino sera normal
  
  &:hover {
    background-color: ${({ variant = 'primary' }) => variantMap[variant].hoverBackground};
    transform: ${({ onClick }) => onClick ? 'translateY(-1px)' : 'none'};
    box-shadow: ${({ onClick }) => onClick ? '0 2px 8px rgba(255, 0, 0, 0.2)' : 'none'};
  }
`;

/**
 * Componente TechnologyTag
 * 
 * @example
 * ```tsx
 * <TechnologyTag variant="primary">React</TechnologyTag>
 * <TechnologyTag variant="secondary" size="sm">TypeScript</TechnologyTag>
 * <TechnologyTag variant="accent" onClick={() => console.log('clicked')}>Node.js</TechnologyTag>
 * ```
 */
export const TechnologyTag: React.FC<TechnologyTagProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  ...props
}) => {
  return (
    <StyledTag
      variant={variant}
      size={size}
      className={className}
      onClick={onClick}
      {...props}
    >
      {children}
    </StyledTag>
  );
};

export default TechnologyTag; 