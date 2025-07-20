/**
 * ÁTOMO - STACK
 *
 * El átomo Stack es un componente de layout que permite apilar (alinear) elementos
 * de forma vertical u horizontal con espaciado configurable. Es muy útil para
 * mantener la consistencia de los espacios entre componentes en el sistema de diseño atómico.
 *
 * Props principales:
 * - direction: dirección del stack ('row' o 'column')
 * - gap: espacio entre los hijos (usa tokens de spacing)
 * - align: alineación de los hijos en el eje secundario
 * - justify: alineación de los hijos en el eje principal
 *
 * Ejemplo de uso:
 * <Stack direction="row" gap={4}>
 *   <Button>Uno</Button>
 *   <Button>Dos</Button>
 * </Stack>
 */

import React from 'react';
import styled from 'styled-components';
import { spacing } from '../../tokens';

// Tipos para las props del Stack
export interface StackProps {
  /** Dirección del stack: 'row' (horizontal) o 'column' (vertical) */
  direction?: 'row' | 'column';
  /** Espacio entre los hijos, usando los tokens de spacing (por ejemplo: 4, 8, 12) */
  gap?: keyof typeof spacing;
  /** Alineación en el eje secundario (cross axis) */
  align?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
  /** Alineación en el eje principal (main axis) */
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
  /** Hijos del stack */
  children: React.ReactNode;
  /** Clases CSS adicionales */
  className?: string;
  /** Estilos inline adicionales (opcional) */
  style?: React.CSSProperties;
}

// Componente styled para el Stack
const StyledStack = styled.div<StackProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'column'};
  gap: ${({ gap }) => (gap !== undefined ? spacing[gap] : spacing[4])};
  align-items: ${({ align }) => align || 'stretch'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
`;

/**
 * Componente Stack
 *
 * Permite apilar elementos con espaciado y alineación configurable.
 */
export const Stack: React.FC<StackProps> = ({
  direction = 'column',
  gap = 4,
  align = 'stretch',
  justify = 'flex-start',
  children,
  className,
  style,
  ...props
}) => {
  return (
    <StyledStack
      direction={direction}
      gap={gap}
      align={align}
      justify={justify}
      className={className}
      style={style}
      {...props}
    >
      {children}
    </StyledStack>
  );
};

export default Stack; 