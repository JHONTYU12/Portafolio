/**
 * MOLÉCULA - TECHNOLOGY CARD
 * 
 * La molécula TechnologyCard combina átomos para mostrar información de una tecnología.
 * Combina TechnologyIcon, Text y Stack para crear una tarjeta de tecnología.
 * 
 * Jerarquía del diseño atómico:
 * - Tokens: Valores base (colores, tipografía, espaciado)
 * - Átomos: Componentes más pequeños (botones, inputs, textos, iconos)
 * - Moléculas: Combinación de átomos (formularios, cards) ← ESTE COMPONENTE
 * - Organismos: Secciones complejas (header, footer, sidebar)
 * - Plantillas: Layouts de páginas
 * - Páginas: Implementación final
 */

import React from 'react';
import styled from 'styled-components';
import { colors, spacing } from '../../tokens';
import { Text, Stack } from '../../atoms';
import { TechnologyIcon } from '../../atoms/TechnologyIcon/TechnologyIcon';

// Props del componente TechnologyCard
export interface TechnologyCardProps {
  /** Nombre de la tecnología (React,JS,etc) */
  name: string;
  /** Categoría de la tecnología (fronend, bd, backend) */
  category: string;
  /** URL del icono de la tecnología */
  icon?: string;
  /** Clases CSS adicionales */
  className?: string;
  /** Función onClick */
  onClick?: () => void;
}

// Componente styled para la tarjeta
// La tarjeta puede recibir una funcion onClick como prpouedad que va a servir para cambiar sus propiedades

const StyledCard = styled.div<Pick<TechnologyCardProps,'onClick'>>`
  display: flex;
  align-items: center;
  gap: ${spacing[4]};
  padding: ${spacing[6]};
  background-color: ${colors.background.card};
  border-radius: ${spacing[3]};
  border: 1px solid ${colors.border.primary};
  transition: all 0.3s ease-in-out;

  //Cuando creamos pseudelementos sepa donde posicionarse
  position: relative;

  //Oculta cualquier cosa que se salga del card
  overflow: hidden;
  cursor: ${({ onClick }) => onClick ? 'pointer' : 'default'};
  
  //Creamos un pseudoelemtno invisible

  &::before {
    content: '';
    position: absolute;

  //Se posiciona horizontalmente arriba de card

  //Coloca el borde arriba
  top:0;
  //Inicia en la izquierda
    left:0;
  //Termina en la derecha 
    right: 0;

    height: 3px;
    background: linear-gradient(90deg, ${colors.primary[400]}, ${colors.accent[400]});

    //Comienza invisible como si estuvieras constraido
    //Para la animacion
    transform: scaleX(0);

    //Animas suavemente
    //Cuando salga
    transition: transform 0.3s ease-in-out;
  }
  
  &:hover {
  //Movimiento cuando paso el mouse de que se alza
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
    border-color: ${colors.border.accent};
    
    &::before {
      transform: scaleX(1);
    }
  }
`;

/**
 * Componente TechnologyCard
 * 
 * @example
 * ```tsx
 * <TechnologyCard 
 *   name="React" 
 *   category="Frontend" 
 *   icon="/icons/react.svg" 
 * />
 * <TechnologyCard 
 *   name="Node.js" 
 *   category="Backend" 
 *   icon="/icons/nodejs.svg"
 *   onClick={() => console.log('clicked')}
 * />
 * ```
 */
export const TechnologyCard: React.FC<TechnologyCardProps> = ({
  name,
  category,
  icon,
  className,
  onClick,
  ...props
}) => {
  return (
    <StyledCard
      className={className}
      onClick={onClick}
      {...props}
    >
      <TechnologyIcon src={icon} alt={name} size="md" />
      <Stack direction="column" gap={2}>
        <Text variant="body" color="primary" weight="medium">
          {name}
        </Text>
        <Text variant="caption" color="secondary">
          {category}
        </Text>
      {/* <Stack style={{ marginLeft: '50px', marginTop: '50px' }} direction="row" gap={2}>
        <TechnologyIcon src={icon} alt={name} size="sm" />
        <TechnologyIcon src={icon} alt={name} size="sm" />
        <TechnologyIcon src={icon} alt={name} size="sm" />
      </Stack> */}
      </Stack>
    </StyledCard>
  );
};

export default TechnologyCard; 