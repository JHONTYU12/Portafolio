/**
 * ORGANISMO - HERO
 *
 * El organismo Hero representa la sección principal de presentación de la página.
 * Incluye el avatar, nombre, título, descripción y botones de acción.
 *
 * Este componente solo compone átomos y moléculas, siguiendo el diseño atómico.
 *
 * Props:
 * - avatar: imagen del usuario (opcional)
 * - name: nombre principal
 * - title: título profesional
 * - description: breve descripción
 * - buttons: botones de acción (pueden ser uno o varios)
 *
 * Ejemplo de uso:
 * <Hero
 *   avatar={{ src: '...', alt: '...' }}
 *   name="Josué Peralta"
 *   title="Desarrollador Full Stack"
 *   description="Apasionado por crear..."
 *   buttons={<Stack direction="row">...</Stack>}
 * />
 */

import React from 'react';
import styled from 'styled-components';
import { colors, spacing } from '../../tokens';
import { Text, Stack, Avatar } from '../../atoms';

// Props del Hero
export interface HeroProps {
  avatar?: { src: string; alt: string };
  name: string;
  title: string;
  description: string;
  buttons?: React.ReactNode;
  className?: string;
}

// Contenedor principal del Hero
const HeroSection = styled.section`
  padding: ${spacing[32]} ${spacing[6]} ${spacing[24]};
  text-align: center;
  background: linear-gradient(135deg, ${colors.background.secondary} 0%, ${colors.background.tertiary} 100%);
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 80%, ${colors.primary[900]}20 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, ${colors.accent[900]}20 0%, transparent 50%);
    opacity: 0.6;
    z-index: 0;
  }
  
  @media (max-width: 768px) {
    padding: ${spacing[24]} ${spacing[4]} ${spacing[20]};
    min-height: 90vh;
  }
`;

// Contenedor para el avatar con margen
const AvatarContainer = styled.div`
  margin: 0 auto ${spacing[12]};
  z-index: 1;
  position: relative;
`;

// Contenedor de la info
const HeroInfo = styled.div`
  max-width: 800px;
  margin: 0 auto;
  z-index: 1;
  position: relative;
`;

// Componente Hero
export const Hero: React.FC<HeroProps> = ({
  avatar,
  name,
  title,
  description,
  buttons,
  className
}) => {
  return (
    <HeroSection className={className}>
      {/* Avatar: usa el átomo Avatar */}
      <AvatarContainer>
        <Avatar 
          src={avatar?.src} 
          alt={avatar?.alt || name}
          name={name}
          size="xl"
        />
      </AvatarContainer>
      {/* Info principal: usamos Stack para separar cada elemento verticalmente */}
      <HeroInfo>
        <Stack direction="column" gap={6} align="center">
          {/* Nombre */}
          <Text variant="h1" color="primary">
            {name}
          </Text>
          {/* Título */}
          <Text variant="h3" color="accent">
            {title}
          </Text>
          {/* Descripción */}
          <Text variant="bodyLarge" color="secondary" style={{ lineHeight: '1.8', fontSize: '1.2rem', maxWidth: 600, textAlign: 'center' }}>
            {description}
          </Text>
          {/* Botones de acción */}
          {buttons && (
            <Stack direction="row" gap={6} justify="center" style={{ flexWrap: 'wrap' }}>
              {buttons}
            </Stack>
          )}
        </Stack>
      </HeroInfo>
    </HeroSection>
  );
};

export default Hero; 