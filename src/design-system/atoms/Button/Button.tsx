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
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'accent';
export type ButtonSize = 'sm' | 'md' | 'lg';

// Props del componente Button
export interface ButtonProps {
  /** Variante del botón */
  variant?: ButtonVariant;
  /** Tamaño del botón */
  size?: ButtonSize;
  /** Estado de carga */
  loading?: boolean;
  /** Estado deshabilitado */
  disabled?: boolean;
  /** Icono a mostrar */
  icon?: React.ReactNode;
  /** Posición del icono */
  iconPosition?: 'left' | 'right';
  /** Contenido del botón */
  children: React.ReactNode;
  /** Clases CSS adicionales */
  className?: string;
  /** Función onClick */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** Tipo de botón */
  type?: 'button' | 'submit' | 'reset';
}

// Estilos base del botón
const baseButtonStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${spacing[3]};
  border: none;
  border-radius: ${borderRadius.lg};
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.medium};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  outline: none;
  position: relative;
  overflow: hidden;
  
  /* Efecto de ripple */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%);
    transition: width 0.3s ease-out, height 0.3s ease-out;
  }
  
  &:active::before {
    width: 300px;
    height: 300px;
  }
  
  &:focus {
    box-shadow: 0 0 0 3px ${colors.primary[200]};
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none !important;
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
 * 
 * @example
 * ```tsx
 * <Button variant="primary" size="md">Click me</Button>
 * <Button variant="outline" icon={<Icon />}>With Icon</Button>
 * <Button variant="danger" loading>Loading...</Button>
 * ```
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