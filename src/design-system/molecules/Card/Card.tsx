/**
 * MOLÉCULA - CARD
 * 
 * La molécula Card es un componente que combina átomos como Text, Stack y Button.
 * Representa una tarjeta de información con título, contenido y acciones.
 * 
 * Jerarquía del diseño atómico:
 * - Tokens: Valores base (colores, tipografía, espaciado)
 * - Átomos: Componentes más pequeños (botones, inputs, textos, Stack)
 * - Moléculas: Combinación de átomos (formularios, cards) ← ESTE COMPONENTE
 * - Organismos: Secciones complejas (header, footer, sidebar)
 * - Plantillas: Layouts de páginas
 * - Páginas: Implementación final
 */

import React from 'react';
import styled from 'styled-components';
import { colors, spacing, borderRadius } from '../../tokens';
import { Text, Stack } from '../../atoms';

// Props del componente Card
export interface CardProps {
  /** Título de la tarjeta */
  title?: string;
  /** Subtítulo de la tarjeta */
  subtitle?: string;
  /** Contenido principal de la tarjeta */
  children: React.ReactNode;
  /** Imagen de la tarjeta */
  image?: {
    src: string;
    alt: string;
  };
  /** Acciones de la tarjeta */
  actions?: React.ReactNode;
  /** Estado de elevación */
  elevated?: boolean;
  /** Estado de hover */
  hoverable?: boolean;
  /** Clases CSS adicionales */
  className?: string;
  /** Función onClick */
  onClick?: () => void;
}

// Componente styled para la tarjeta
const StyledCard = styled.div<Pick<CardProps, 'elevated' | 'hoverable' | 'onClick'>>`
  background-color: ${colors.background.card};
  border: 1px solid ${colors.border.primary};
  border-radius: ${borderRadius.xl};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  position: relative;
  
  /* Elevación */
  ${({ elevated }) => elevated && `
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  `}
  
  /* Hover */
  ${({ hoverable, onClick }) => (hoverable || onClick) && `
    cursor: ${onClick ? 'pointer' : 'default'};
    
    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 16px 48px rgba(0, 0, 0, 0.4);
      border-color: ${colors.border.accent};
    }
  `}
  
  /* Efecto de borde superior */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, ${colors.primary[400]}, ${colors.accent[400]});
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }
  
  ${({ hoverable, onClick }) => (hoverable || onClick) && `
    &:hover::before {
      opacity: 1;
    }
  `}
`;

// Componente para la imagen
const CardImage = styled.div`
  width: 100%;
  height: 220px;
  position: relative;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
  object-fit: cover;
    transition: transform 0.3s ease-in-out;
  }
  
  ${StyledCard}:hover & img {
    transform: scale(1.05);
  }
`;

// Componente para el contenido
const CardContent = styled.div`
  padding: ${spacing[8]};
  
  @media (max-width: 768px) {
  padding: ${spacing[6]};
  }
`;

// Componente para las acciones
const CardActions = styled.div`
  padding: ${spacing[6]} ${spacing[8]};
  border-top: 1px solid ${colors.border.primary};
  display: flex;
  gap: ${spacing[4]};
  justify-content: flex-end;
  align-items: center;
  background-color: ${colors.background.secondary};
  
  @media (max-width: 768px) {
    padding: ${spacing[4]} ${spacing[6]};
    gap: ${spacing[3]};
  }
`;

/**
 * Componente Card
 * 
 * @example
 * ```tsx
 * <Card title="Mi Proyecto" subtitle="Descripción del proyecto">
 *   <p>Contenido de la tarjeta...</p>
 * </Card>
 * 
 * <Card 
 *   title="Proyecto con Imagen" 
 *   image={{ src: "/image.jpg", alt: "Proyecto" }}
 *   actions={<Button>Ver más</Button>}
 * >
 *   <p>Contenido...</p>
 * </Card>
 * ```
 */
export const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  children,
  image,
  actions,
  elevated = false,
  hoverable = false,
  className,
  onClick,
  ...props
}) => {
  return (
    <StyledCard
      elevated={elevated}
      hoverable={hoverable}
      onClick={onClick}
      className={className}
      {...props}
    >
      {/* Imagen */}
      {image && (
        <CardImage>
          <img src={image.src} alt={image.alt} />
        </CardImage>
      )}
      
      {/* Contenido */}
      <CardContent>
        {/* Header usando Stack para separación atómica */}
        {(title || subtitle) && (
          <Stack direction="column" gap={4}>
            {title && (
              <Text variant="h4" color="primary">
                {title}
              </Text>
            )}
            {subtitle && (
              <Text variant="body" color="secondary">
                {subtitle}
              </Text>
            )}
          </Stack>
        )}
        
        {/* Contenido principal con separación atómica */}
        {children && (
          <Stack direction="column" gap={6} style={{ marginTop: title || subtitle ? spacing[6] : 0 }}>
        {children}
          </Stack>
        )}
      </CardContent>
      
      {/* Acciones */}
      {actions && (
        <CardActions>
          {actions}
        </CardActions>
      )}
    </StyledCard>
  );
};

export default Card; 