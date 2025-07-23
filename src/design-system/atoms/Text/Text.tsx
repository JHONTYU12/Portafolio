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

// Podriamos usar lo de tokenn pero aveces existe una cantidad mas grande entonces es bueno limitar
// Tipos para las variantes de texto
export type TextVariant = 
  | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  | 'body' | 'bodyLarge' | 'bodySmall'
  | 'caption' | 'overline' | 'code';

  // 
export type TextColor = 
  | 'primary' | 'secondary' | 'tertiary' | 'inverse' | 'muted'
  | 'success' | 'warning' | 'error' | 'accent';

// Props del componente Text
export interface TextProps {
  /** Variante de texto predefinida */
  variant?: TextVariant; // para los estilos
  /** Color del texto */
  color?: TextColor;
  /** Peso de la fuente */
  // Le estamos diciendo con typeof que busque como esta construido ese typography.fontweight
  // con el keyof le decimos que tome las claves de ahi y esos se permiten aqui
  // en este caso :"'thin', 'bold', etc. como valor para weight"
  weight?: keyof typeof typography.fontWeight;
  /** Tamaño de fuente personalizado */
  size?: keyof typeof typography.fontSize;
  /** Altura de línea */
  lineHeight?: keyof typeof typography.lineHeight;
  /** Espaciado entre letras */
  letterSpacing?: keyof typeof typography.letterSpacing;
  /** Alineación del texto  justificados izqueirda derecha etc*/
  align?: 'left' | 'center' | 'right' | 'justify';
  /** Transformación del texto */
  transform?: 'uppercase' | 'lowercase' | 'capitalize' | 'none'; // la primera con mayuscula o si none niguna
  /** Decoración del texto */
  decoration?: 'underline' | 'line-through' | 'none'; // subraya, tacha con una linea , no agregar nada
  /** Elemento HTML a renderizar */
  as?: string; // etiqueta html en donde va a estar el texto
  /** Contenido del texto */
  children: React.ReactNode; // todo lo que react pueda renderizar 
  /** Clases CSS adicionales */
  className?: string;
  /** Estilos inline */
  style?: React.CSSProperties; // estilos en la misma etiqueta si es necesario algo personalizado
  /** Función onClick */
  onClick?: () => void;
}


//HASTA AHORA NO HAY ESTILOS PARA EL TEXTO SOLO HEMOS DEFINIDO COMO POR ASI DECIR VARIABLES 
// EN BASE A ESTAS  VARIABLES VAMOS A APLICAR ESTILOS DE FORMA DINAMICA

// COMPONENTE QUE SOLO CONTIENE ESTILOS NO ES ALGO VISUAL
// POR DEFECTO SE COMPORTA COMO SPAN PERO  ESO LO PODEMOS CAMBIAR DESPUES
// OMITIMOS EL CHILDREN AS Y STYLE PORQUE NO SON RELEVANTES NI SE NECESITAN PARA DAR EL ESTILO


const StyledText = styled.span<Omit<TextProps, 'children' | 'as' | 'style'>>` /* esa comilla me inserta codigo css directo */
  /* Vemos la variante en codigo js por el $ */
  /* Segun el prop variante vamos hacer algo  */

    /* VARIANTE DE TEXTO  */

  ${({ variant }) => {

      // Verifica que exista tanto variante y que exista en typography eso, solo si ambas son verdaderas seguimos
    if (variant && typography.textStyles[variant]) { 
      // style busca todo lo que tiene esa etiqueta y lo guarda 
      const style = typography.textStyles[variant];  

      /*
      style = {
      fontSize: '3rem',
      fontWeight: '700',
      lineHeight: '1.2',
      letterSpacing: '-0.025em',
      textTransform: 'none',
      fontFamily: "'Inter', sans-serif"
    } */

//Si existe la variable nuestra funcion va a retornar el estilo
      return `
        font-size: ${style.fontSize};
        font-weight: ${style.fontWeight};
        line-height: ${style.lineHeight};
        letter-spacing: ${style.letterSpacing};

  /* revisa si existe esas propiedades en caso de existir aplica izquiera sino aplica derecha osea que no tengan nada  */
  /* Deberia ser asi todas porque puede que alguna nos de undefined no solo estas dos*/

        ${style.textTransform ? `text-transform: ${style.textTransform};` : ''}
        ${style.fontFamily ? `font-family: ${style.fontFamily};` : ''}

      `;
    }
    return ''; // Si no tiene variante osea h1,p,etc entonces no mandes nada
  }}

  /* VARIANTE DE COLOR  */

  ${({ color }) => {
    if (color) {
      // Si existe ese color dentro de las propiedades de color.text
      if (color in colors.text) {

        // color.text[propiedad] devuelve la respuesta de esa propiedad
        // se puede enviar asi pero colors.text[color]
        // TS no sabe si es uno valido entonces 'as key.....' es forzar que es 100% seguro que existe color dentro de colors.text 
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
  /* Parametro weight si existe entonces todo lo que va despues de && */
  /* Arriba ya definimos variantes y colores pero que pasa si quiero una variante pero cambiar su peso nomas o cualquier dato entonces que se cambie */


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
  margin: 100;
  padding: 0;
  transition: color 0.2s ease-in-out;
`;

/**
 * @example
 * ```tsx
 * <Text variant="h1" color="primary">Título Principal</Text>
 * <Text variant="body" color="secondary">Párrafo de texto</Text>
 * <Text variant="code" color="accent">console.log('Hello World');</Text>
 * ```
 */
export const Text: React.FC<TextProps> = ({
  // Mandamos por defecto para que igual se vea bien.
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