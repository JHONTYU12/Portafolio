/**
 * ORGANISMO - FOOTER (Solo Contacto y Redes Sociales)
 *
 * Este Footer solo muestra la información de contacto y las redes sociales,
 * usando el átomo Stack para layout horizontal y vertical, y colores atómicos.
 * Los iconos de redes sociales se muestran como imágenes puras, sin bordes ni fondos.
 */

import React from 'react';
import styled from 'styled-components';
import { colors, spacing } from '../../tokens';
import { Text, Stack } from '../../atoms';

// Átomo para el icono de red social (imagen pura sin bordes)
export interface SocialIconProps {
  src: string;
  alt: string;
}
const SocialIconImg = styled.img`
  width: 28px;
  height: 28px;
  display: block;
  /* Filtro para que los iconos SVG se vean en color claro en el tema oscuro */
  filter: brightness(0) invert(1);
  transition: all 0.2s ease-in-out;
  
  &:hover {
    transform: translateY(-2px);
    filter: brightness(0) invert(1) sepia(1) saturate(5) hue-rotate(200deg);
  }
`;
export const SocialIcon: React.FC<SocialIconProps> = ({ src, alt }) => (
  <SocialIconImg src={src} alt={alt} />
);

// Props del componente Footer
export interface FooterProps {
  /** Enlaces de redes sociales (ahora con src y alt para la imagen) */
  socialLinks?: Array<{
    label: string;
    href: string;
    icon: { src: string; alt: string };
  }>;
  /** Información de contacto */
  contactInfo?: {
    email?: string;
    phone?: string;
    address?: string;
  };
  /** Clases CSS adicionales */
  className?: string;
}

// Contenedor principal del Footer
const StyledFooter = styled.footer`
  background-color: ${colors.background.dark};
  color: ${colors.text.primary};
  padding: ${spacing[12]} ${spacing[6]};
  position: relative;
`;

// Contenedor para la sección de contacto y redes
const FooterContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 100%;
`;

// Componente para cada enlace social (SIN bordes ni fondos)
const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${spacing[2]};
  transition: all 0.2s ease-in-out;
  border-radius: ${spacing[2]};
  
  &:hover {
    background-color: ${colors.background.elevated};
    transform: translateY(-2px);
  }
  
  &:focus-visible {
    outline: 2px solid ${colors.primary[400]};
    outline-offset: 2px;
  }
`;

export const Footer: React.FC<FooterProps> = ({
  socialLinks = [],
  contactInfo,
  className,
  ...props
}) => {
  return (
    <StyledFooter className={className} {...props}>
      {/* Usamos Stack para layout horizontal: contacto a la izquierda, redes a la derecha */}
      <FooterContent>
        <Stack direction="row" gap={16} justify="space-between" align="flex-start" style={{ flexWrap: 'wrap' }}>
          {/* Sección de contacto */}
          <Stack direction="column" gap={4} align="flex-start">
            <Text variant="h3" color="primary">Contacto</Text>
            {contactInfo?.email && (
              <Stack direction="row" gap={2} align="center">
                <Text variant="bodyLarge" color="primary">{contactInfo.email}</Text>
              </Stack>
            )}
            {contactInfo?.phone && (
              <Stack direction="row" gap={2} align="center">
                <Text variant="bodyLarge" color="primary">{contactInfo.phone}</Text>
              </Stack>
            )}
            {contactInfo?.address && (
              <Stack direction="row" gap={2} align="center">
                <Text variant="bodyLarge" color="primary">{contactInfo.address}</Text>
              </Stack>
            )}
          </Stack>
          {/* Sección de redes sociales */}
          <Stack direction="column" gap={4} align="flex-end">
            <Text variant="h3" color="primary">Redes Sociales</Text>
            <Stack direction="row" gap={4}>
              {socialLinks.map((link, index) => (
                <SocialLink
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  <SocialIcon src={link.icon.src} alt={link.icon.alt} />
                </SocialLink>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </FooterContent>
    </StyledFooter>
  );
};

export default Footer; 