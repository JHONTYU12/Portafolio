/**
 * ÁTOMO - BUTTON
 * 
 * El átomo Button es el componente base para botones en el sistema.
 * Utiliza los tokens de colores, tipografía y espaciado para mantener consistencia.
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
import styled, { css } from 'styled-components';
import { colors, typography, spacing, borderRadius } from '../../tokens';

// Tipos para las variantes de botón
// Podemos hacer como en avatar que tiene esto dentro de la interface pero por escalabilidad y como es un componente que puede teenr multiples variables creamos el type
// Funciona como interface pero es mas simple

/*  
  . Usa interface para objetos grandes o props de componentes.
	•	Usa type para valores simples o uniones ('primary' | 'secondary').
  */

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'accent';
export type ButtonSize = 'sm' | 'md' | 'lg';

// Props del componente Button
export interface ButtonProps {
  /** Variante del botón */
  variant?: ButtonVariant;
  /** Tamaño del botón */
  size?: ButtonSize;
  /** Estado de carga para manejar spinners por ejemplo*/
  loading?: boolean;
  /** Estado deshabilitado */
  disabled?: boolean;
  /** Icono a mostrar - Cualuier cosa que react pueda renderizar */
  icon?: React.ReactNode;
  /** Posición del icono */
  iconPosition?: 'left' | 'right';
  /** Contenido del botón OBLIGATORIO */
  children: React.ReactNode;
  /** Clases CSS adicionales */
  className?: string;
  /** Función onClick */
  /*
  Esta propiedad (onClick) puede existir o no.
  Pero si existe, debe ser una función que reciba un evento de mouse sobre un botón HTML y no devuelva nada.
  */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** Tipo de botón (BOTON, FOMRULARIO, RESETEAR) */
  type?: 'button' | 'submit' | 'reset';
}

// Estilos base del botón
// Porque no usamos style.div? es porque es solo css para inyectarlo en otro lugar, no genera un componente
const baseButtonStyles = css`
  display: inline-flex;               // Se comporta como un elemento en línea y usa flexbox
  align-items: center;               // Centra verticalmente el contenido
  justify-content: center;          // Centra horizontalmente el contenido
  gap: ${spacing[3]};               // Espacio entre elementos internos, como ícono y texto
  border: none;                     // Elimina el borde por defecto del botón
  border-radius: ${borderRadius.lg}; // Hace que las esquinas sean redondeadas
  font-family: ${typography.fontFamily.primary}; // Usa la fuente definida en los tokens
  font-weight: ${typography.fontWeight.medium};  // Usa un peso de fuente medio
  cursor: pointer;                  // Muestra una mano al pasar el mouse
  transition: all 0.2s ease-in-out; // Aplica transición suave a cualquier cambio
  text-decoration: none;           // Elimina subrayado si hay texto tipo enlace
  outline: none;                   // Elimina el borde azul por defecto al enfocar
  position: relative;              // Necesario para que elementos hijos con posición absoluta se basen en este contenedor
  overflow: hidden;                // Oculta cualquier contenido que se salga del botón

  //Efecto ripple 
  
  &::before {
    content: '';                   // Crea un pseudo-elemento invisible sin texto
    position: absolute;           // Se posiciona relativo al botón
    top: 50%;                      // Centro vertical del botón
    left: 50%;                     // Centro horizontal del botón
    width: 0;                      // Comienza sin tamaño visible
    height: 0;
    border-radius: 50%;           // Lo hace completamente circular
    background-color: rgba(255, 255, 255, 0.3); // Color semitransparente para el efecto ripple
    transform: translate(-50%, -50%); // Lo centra exactamente en el botón
    transition: width 0.3s ease-out, height 0.3s ease-out; // Anima el crecimiento del círculo
  }

  &:active::before {
    width: 300px;                  // Cuando haces clic, el círculo crece a 300px de ancho
    height: 300px;                 // Y también a 300px de alto
  }

  &:focus {
    box-shadow: 0 0 0 3px ${colors.primary[200]}; // Sombra visible al enfocar el botón (teclado)
  }

  &:disabled {
    opacity: 0.6;                  // Botón más transparente para indicar que no está activo
    cursor: not-allowed;           // Cursor de prohibido
    transform: none !important;    // Quita cualquier transformación como animaciones
  }
`;

// Estilos para diferentes tamaños
const sizeStyles = {
  sm: css`
    padding: ${spacing[3]} ${spacing[4]};
    font-size: ${typography.fontSize.sm};
    min-height: 36px;
    gap: ${spacing[2]};
  `,
  md: css`
    padding: ${spacing[4]} ${spacing[6]};
    font-size: ${typography.fontSize.base};
    min-height: 44px;
    gap: ${spacing[3]};
  `,
  lg: css`
    padding: ${spacing[5]} ${spacing[8]};
    font-size: ${typography.fontSize.lg};
    min-height: 52px;
    gap: ${spacing[4]};
  `,
};

// Estilos para diferentes variantes
const variantStyles = {
  primary: css`
    background: linear-gradient(135deg, ${colors.primary[600]}, ${colors.primary[700]});
    color: ${colors.text.inverse};
    box-shadow: 0 4px 16px rgba(14, 165, 233, 0.3);
    
    &:hover:not(:disabled) {
      background: linear-gradient(135deg, ${colors.primary[700]}, ${colors.primary[800]});
      box-shadow: 0 8px 24px rgba(14, 165, 233, 0.4);
      transform: translateY(-1px);
    }
    
    &:active:not(:disabled) {
      background: linear-gradient(135deg, ${colors.primary[800]}, ${colors.primary[900]});
      transform: translateY(0);
    }
  `,
  
  secondary: css`
    background-color: ${colors.background.secondary};
    color: ${colors.text.primary};
    border: 1px solid ${colors.border.primary};
    
    &:hover:not(:disabled) {
      background-color: ${colors.background.tertiary};
      border-color: ${colors.border.accent};
      transform: translateY(-1px);
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
    }
    
    &:active:not(:disabled) {
      background-color: ${colors.background.elevated};
      transform: translateY(0);
    }
  `,
  
  outline: css`
    background-color: transparent;
    color: ${colors.text.accent};
    border: 2px solid ${colors.text.accent};
    
    &:hover:not(:disabled) {
      background-color: ${colors.background.secondary};
      border-color: ${colors.text.accent};
      transform: translateY(-1px);
      box-shadow: 0 4px 16px rgba(56, 189, 248, 0.2);
    }
    
    &:active:not(:disabled) {
      background-color: ${colors.background.tertiary};
      transform: translateY(0);
    }
  `,
  
  ghost: css`
    background-color: transparent;
    color: ${colors.text.secondary};
    
    &:hover:not(:disabled) {
      background-color: ${colors.background.secondary};
      color: ${colors.text.primary};
      transform: translateY(-1px);
    }
    
    &:active:not(:disabled) {
      background-color: ${colors.background.tertiary};
      transform: translateY(0);
    }
  `,
  
  danger: css`
    background: linear-gradient(135deg, ${colors.error[600]}, ${colors.error[700]});
    color: ${colors.text.inverse};
    box-shadow: 0 4px 16px rgba(239, 68, 68, 0.3);
    
    &:hover:not(:disabled) {
      background: linear-gradient(135deg, ${colors.error[700]}, ${colors.error[800]});
      box-shadow: 0 8px 24px rgba(239, 68, 68, 0.4);
      transform: translateY(-1px);
    }
    
    &:active:not(:disabled) {
      background: linear-gradient(135deg, ${colors.error[800]}, ${colors.error[900]});
      transform: translateY(0);
    }
  `,
  
  accent: css`
    background: linear-gradient(135deg, ${colors.primary[400]}, ${colors.primary[500]});
    color: ${colors.text.inverse};
    box-shadow: 0 4px 16px rgba(56, 189, 248, 0.3);
    
    &:hover:not(:disabled) {
      background: linear-gradient(135deg, ${colors.primary[500]}, ${colors.primary[600]});
      box-shadow: 0 8px 24px rgba(56, 189, 248, 0.4);
      transform: translateY(-1px);
    }
    
    &:active:not(:disabled) {
      background: linear-gradient(135deg, ${colors.primary[600]}, ${colors.primary[700]});
      transform: translateY(0);
    }
  `,
};

// Componente styled para el botón
const StyledButton = styled.button<Omit<ButtonProps, 'children' | 'onClick'>>`
  ${baseButtonStyles}
  ${({ size = 'md' }) => sizeStyles[size]}
  ${({ variant = 'primary' }) => variantStyles[variant]}
`;

// Componente para el estado de carga
const LoadingSpinner = styled.div`
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

/**
 * Componente Button
 * @example
 * <Button variant="primary" size="md">Click me</Button>
 */


export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  icon,
  iconPosition = 'left',
  children,
  className,
  onClick,
  type = 'button',
  ...props
}) => {
  const isDisabled = disabled || loading;
  
  const renderContent = () => {
    if (loading) {
      return (
        <>
          <LoadingSpinner />
          {children}
        </>
      );
    }
    
    if (icon) {
      return (
        <>
          {iconPosition === 'left' && icon}
          {children}
          {iconPosition === 'right' && icon}
        </>
      );
    }
    
    return children;
  };
  
  return (
    <StyledButton
      variant={variant}
      size={size}
      disabled={isDisabled}
      className={className}
      onClick={onClick}
      type={type}
      {...props}
    >
      {renderContent()}
    </StyledButton>
  );
};

export default Button; 