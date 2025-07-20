/**
 * ÁTOMO - TEXT
 * 
 * El átomo Text es el componente base para mostrar texto en el sistema.
 * Utiliza los tokens de tipografía para mantener consistencia.
 * 
 * Jerarquía del diseño atómico:
 * - Tokens: Valores base (colores, tipografía, espaciado)
 * - Átomos: Componentes más pequeños (botones, inputs, textos) ← ESTE COMPONENTE
 * - Moléculas: Combinación de átomos (formularios, cards)
 * - Organismos: Secciones complejas (header, footer, sidebar)
 * - Plantillas: Layouts de páginas
 * - Páginas: Implementación final
 */

import React from 'react';
import styled from 'styled-components';
import { typography, colors } from '../../tokens';

// Tipos para las variantes de texto
export type TextVariant = 
  | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  | 'body' | 'bodyLarge' | 'bodySmall'
  | 'caption' | 'overline' | 'code';

export type TextColor = 
  | 'primary' | 'secondary' | 'tertiary' | 'inverse' | 'muted'
  | 'success' | 'warning' | 'error' | 'accent';

// Props del componente Text
export interface TextProps {
  /** Variante de texto predefinida */
  variant?: TextVariant;
  /** Color del texto */
  color?: TextColor;
  /** Peso de la fuente */
  weight?: keyof typeof typography.fontWeight;
  /** Tamaño de fuente personalizado */
  size?: keyof typeof typography.fontSize;
  /** Altura de línea */
  lineHeight?: keyof typeof typography.lineHeight;
  /** Espaciado entre letras */
  letterSpacing?: keyof typeof typography.letterSpacing;
  /** Alineación del texto */
  align?: 'left' | 'center' | 'right' | 'justify';
  /** Transformación del texto */
  transform?: 'uppercase' | 'lowercase' | 'capitalize' | 'none';
  /** Decoración del texto */
  decoration?: 'underline' | 'line-through' | 'none';
  /** Elemento HTML a renderizar */
  as?: string;
  /** Contenido del texto */
  children: React.ReactNode;
  /** Clases CSS adicionales */
  className?: string;
  /** Estilos inline */
  style?: React.CSSProperties;
  /** Función onClick */
  onClick?: () => void;
}

// Componente styled para el texto
const StyledText = styled.span<Omit<TextProps, 'children' | 'as' | 'style'>>`
  /* Aplicar variante de texto si se especifica */
  ${({ variant }) => {
    if (variant && typography.textStyles[variant]) {
      const style = typography.textStyles[variant];
      return `
        font-size: ${style.fontSize};
        font-weight: ${style.fontWeight};
        line-height: ${style.lineHeight};
        letter-spacing: ${style.letterSpacing};
        ${style.textTransform ? `text-transform: ${style.textTransform};` : ''}
        ${style.fontFamily ? `font-family: ${style.fontFamily};` : ''}
      `;
    }
    return '';
  }}

  /* Aplicar color */
  ${({ color }) => {
    if (color) {
      if (color in colors.text) {
        return `color: ${colors.text[color as keyof typeof colors.text]};`;
      }
      if (color === 'success') {
        return `color: ${colors.success[600]};`;
      }
      if (color === 'warning') {
        return `color: ${colors.warning[600]};`;
      }
      if (color === 'error') {
        return `color: ${colors.error[600]};`;
      }
      return `color: ${colors.primary[500]};`;
    }
    return `color: ${colors.text.primary};`;
  }}

  /* Aplicar peso de fuente personalizado */
  ${({ weight }) => weight && `font-weight: ${typography.fontWeight[weight]};`}

  /* Aplicar tamaño de fuente personalizado */
  ${({ size }) => size && `font-size: ${typography.fontSize[size]};`}

  /* Aplicar altura de línea personalizada */
  ${({ lineHeight }) => lineHeight && `line-height: ${typography.lineHeight[lineHeight]};`}

  /* Aplicar espaciado entre letras personalizado */
  ${({ letterSpacing }) => letterSpacing && `letter-spacing: ${typography.letterSpacing[letterSpacing]};`}

  /* Aplicar alineación */
  ${({ align }) => align && `text-align: ${align};`}

  /* Aplicar transformación */
  ${({ transform }) => transform && `text-transform: ${transform};`}

  /* Aplicar decoración */
  ${({ decoration }) => decoration && `text-decoration: ${decoration};`}

  /* Estilos base */
  font-family: ${typography.fontFamily.primary};
  margin: 0;
  padding: 0;
  transition: color 0.2s ease-in-out;
`;

/**
 * Componente Text
 * 
 * @example
 * ```tsx
 * <Text variant="h1" color="primary">Título Principal</Text>
 * <Text variant="body" color="secondary">Párrafo de texto</Text>
 * <Text variant="code" color="accent">console.log('Hello World');</Text>
 * ```
 */
export const Text: React.FC<TextProps> = ({
  variant = 'body',
  color = 'primary',
  weight,
  size,
  lineHeight,
  letterSpacing,
  align,
  transform,
  decoration,
  as,
  children,
  className,
  style,
  onClick,
  ...props
}) => {
  return (
    <StyledText
      variant={variant}
      color={color}
      weight={weight}
      size={size}
      lineHeight={lineHeight}
      letterSpacing={letterSpacing}
      align={align}
      transform={transform}
      decoration={decoration}
      className={className}
      style={style}
      onClick={onClick}
      {...props}
    >
      {children}
    </StyledText>
  );
};

export default Text; 