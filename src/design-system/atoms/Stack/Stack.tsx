/**
 * ÁTOMO - STACK - ATOMO DE Lyour

¿Entonces cuándo lo usas?

- Apilar componentes (en vertical o horizontal)
- Organizar botones, inputs, tags…
- Asegurarte que los espacios entre elementos sean consistentes y reutilizables
 

 * Props principales:
 * - direction: dirección del stack ('row' o 'column') // ROW SE APILAN DE IZQUIERDA A DERECHA // COLUM ES DE ARRIBA ABAJO
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
  /** Alineación en el EJE SECUNDARIO */
  align?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
  /** Alineación en el EJE PRINCIPAL */
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
  /** Hijos del stack */
  // stack no tiene contenido por si solo pero esta diseñado para tener otros componentes dentro de el
  children: React.ReactNode;
  /** Clases CSS adicionales */
  // para dar estilo desde clases de CSS o style components
  className?: string;
  /** Estilos inline adicionales (opcional) */
  // conjunto de propiedades validas para react
  // es para cambios puntuales
  style?: React.CSSProperties;
}

// Componente styled para el Stack
const StyledStack = styled.div<StackProps>`

// Activamos modo flexbox
  display: flex;

// si direction esta definido lo uso sino uso columna
  flex-direction: ${({ direction }) => direction || 'column'};
  
// El gap si es que existe la condicion va hacer verdadera y usa eso con el token de spacing caso contrario se pasa 4
// poruqe por error si envaimos un gap vacio o undefined entonces caeria en enviar el 4
  gap: ${({ gap }) => (gap !== undefined ? spacing[gap] : spacing[4])};
  align-items: ${({ align }) => align || 'stretch'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
`;

/**
 * Componente Stack
 * Permite apilar elementos con espaciado y alineación configurable.
 */
export const Stack: React.FC<StackProps> = ({
  direction = 'column',
  gap = 4,
  align = 'stretch', // Se estira para ocupar todo el espacio disponible
  justify = 'flex-start', // se alinea al principio del eje
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