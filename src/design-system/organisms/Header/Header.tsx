/**
 * ORGANISMO - HEADER
 * 
 * El organismo Header es un componente complejo que combina moléculas y átomos.
 * Representa la navegación principal del sitio web.
 * 
 * Jerarquía del diseño atómico:
 * - Tokens: Valores base (colores, tipografía, espaciado)
 * - Átomos: Componentes más pequeños (botones, inputs, textos)
 * - Moléculas: Combinación de átomos (formularios, cards)
 * - Organismos: Secciones complejas (header, footer, sidebar) ← ESTE COMPONENTE
 * - Plantillas: Layouts de páginas
 * - Páginas: Implementación final
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import { colors, spacing, zIndex } from '../../tokens';
import { Text } from '../../atoms';
import { useScrollTo } from '../../hooks';

// Props del componente Header
export interface HeaderProps {
  /** Logo o nombre del sitio */
  logo?: React.ReactNode;
  /** Enlaces de navegación */
  navigation?: Array<{
    label: string;
    href: string;
    active?: boolean;
  }>;
  /** Acciones del header (botones, etc.) */
  actions?: React.ReactNode;
  /** Estado transparente */
  transparent?: boolean;
  /** Estado fijo */
  fixed?: boolean;
  /** Offset para scroll suave (para headers fijos) */
  scrollOffset?: number;
  /** Clases CSS adicionales */
  className?: string;
}

// Componente styled para el header
const StyledHeader = styled.header<Pick<HeaderProps, 'transparent' | 'fixed'>>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${spacing[5]} ${spacing[8]};
  background-color: ${({ transparent }) => 
    transparent ? 'transparent' : colors.background.primary};
  border-bottom: ${({ transparent }) => 
    transparent ? 'none' : `1px solid ${colors.border.primary}`};
  box-shadow: ${({ transparent }) => 
    transparent ? 'none' : '0 4px 20px rgba(0, 0, 0, 0.3)'};
  position: ${({ fixed }) => fixed ? 'fixed' : 'relative'};
  top: 0;
  left: 0;
  right: 0;
  z-index: ${zIndex.sticky};
  transition: all 0.3s ease-in-out;
  backdrop-filter: ${({ transparent }) => 
    transparent ? 'none' : 'blur(12px)'};
  
  @media (max-width: 768px) {
    padding: ${spacing[4]} ${spacing[6]};
  }
`;

// Componente para el logo
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing[3]};
  
  img {
    height: 40px;
    width: auto;
  }
`;

// Componente para la navegación
const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: ${spacing[10]};
  
  @media (max-width: 768px) {
    display: none;
  }
`;



// Componente para las acciones
const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing[4]};
  
  @media (max-width: 768px) {
  gap: ${spacing[3]};
  }
`;

// Componente para el menú móvil
const MobileMenu = styled.div<{ isOpen: boolean }>`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

// Componente para el botón de menú móvil
const MobileMenuButton = styled.button`
  background: none;
  border: none;
  padding: ${spacing[3]};
  cursor: pointer;
  color: ${colors.text.secondary};
  border-radius: ${spacing[2]};
  transition: all 0.2s ease-in-out;
  
  &:hover {
    color: ${colors.text.primary};
    background-color: ${colors.background.secondary};
  }
`;

// Componente para el menú móvil desplegable
const MobileMenuContent = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${colors.background.primary};
  z-index: ${zIndex.modal};
  padding: ${spacing[8]};
  transform: translateX(${({ isOpen }) => isOpen ? '0' : '100%'});
  transition: transform 0.3s ease-in-out;
  
  display: flex;
  flex-direction: column;
  gap: ${spacing[8]};
  backdrop-filter: blur(12px);
`;

// Componente para el header del menú móvil
const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: ${spacing[6]};
  border-bottom: 1px solid ${colors.border.primary};
`;

// Componente para la navegación móvil
const MobileNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${spacing[4]};
  flex: 1;
`;



/**
 * Componente Header
 * 
 * @example
 * ```tsx
 * <Header 
 *   logo={<Text variant="h3">Mi Portfolio</Text>}
 *   navigation={[
 *     { label: 'Inicio', href: '/', active: true },
 *     { label: 'Proyectos', href: '/proyectos' },
 *     { label: 'Contacto', href: '/contacto' }
 *   ]}
 *   actions={<Button>Descargar CV</Button>}
 * />
 * ```
 */
export const Header: React.FC<HeaderProps> = ({
  logo,
  navigation = [],
  actions,
  transparent = false,
  fixed = false,
  scrollOffset = 80,
  className,
  ...props
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Hooks para navegación suave - llamados al nivel superior
  const scrollToInicio = useScrollTo('inicio', scrollOffset);
  const scrollToProyectos = useScrollTo('proyectos', scrollOffset);
  const scrollToTecnologias = useScrollTo('tecnologias', scrollOffset);
  const scrollToContacto = useScrollTo('contacto', scrollOffset);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Mapa de funciones de scroll por sección
  const scrollFunctions = {
    'inicio': scrollToInicio,
    'proyectos': scrollToProyectos,
    'tecnologias': scrollToTecnologias,
    'contacto': scrollToContacto
  };

  return (
    <>
      <StyledHeader
        transparent={transparent}
        fixed={fixed}
        className={className}
        {...props}
      >
        {/* Logo */}
        <Logo>
          {logo}
        </Logo>

        {/* Navegación de escritorio */}
        <Navigation>
          {navigation.map((item, index) => {
            const sectionId = item.href.replace('/', '').replace('#', '') || 'inicio';
            const scrollTo = scrollFunctions[sectionId as keyof typeof scrollFunctions];
            
            return (
              <Text
              key={index}
                variant="body"
                color={item.active ? 'accent' : 'secondary'}
                onClick={scrollTo}
                style={{ cursor: 'pointer' }}
              >
                {item.label}
              </Text>
            );
          })}
        </Navigation>

        {/* Acciones */}
        <Actions>
          {actions}
          
          {/* Botón de menú móvil */}
          <MobileMenu isOpen={isMobileMenuOpen}>
            <MobileMenuButton onClick={toggleMobileMenu}>
              <Text variant="h4">☰</Text>
            </MobileMenuButton>
          </MobileMenu>
        </Actions>
      </StyledHeader>

      {/* Menú móvil */}
      <MobileMenuContent isOpen={isMobileMenuOpen}>
        <MobileMenuHeader>
          {logo}
          <MobileMenuButton onClick={toggleMobileMenu}>
            <Text variant="h4">✕</Text>
          </MobileMenuButton>
        </MobileMenuHeader>
        
        <MobileNavigation>
          {navigation.map((item, index) => {
            const sectionId = item.href.replace('/', '').replace('#', '') || 'inicio';
            const scrollTo = scrollFunctions[sectionId as keyof typeof scrollFunctions];
            
            return (
              <Text
              key={index}
                variant="h5"
                color={item.active ? 'accent' : 'secondary'}
                onClick={() => {
                  scrollTo();
                  setIsMobileMenuOpen(false);
                }}
                style={{ cursor: 'pointer' }}
              >
                {item.label}
              </Text>
            );
          })}
        </MobileNavigation>
        
        {actions && (
          <div style={{ paddingTop: spacing[6], borderTop: `1px solid ${colors.secondary[200]}` }}>
            {actions}
          </div>
        )}
      </MobileMenuContent>
    </>
  );
};

export default Header; 