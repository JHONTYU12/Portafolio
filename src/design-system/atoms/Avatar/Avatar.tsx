/**
 * ÁTOMO - AVATAR
 *
 * Este componente se llama “Avatar” y pertenece al nivel más pequeño del sistema de diseño atómico: un "átomo".
 * Sirve para mostrar la imagen de perfil de una persona.
 * Si no hay imagen disponible, muestra la primera letra del nombre como reemplazo.
 *
 * Este componente acepta diferentes tamaños y se adapta al diseño.
 */

import React from 'react'; // Importamos React para poder crear componentes.
import styled from 'styled-components'; // Esta librería permite escribir estilos CSS directamente dentro del código.
import { colors, typography } from '../../tokens'; // Importamos los colores y estilos de texto definidos en otro archivo para mantener consistencia visual.

// ------------------------------------
// DEFINICIÓN DE PROPIEDADES (PROPS)
// ------------------------------------

/**
 * Aquí definimos qué datos puede recibir el componente Avatar.
 * Estos datos se llaman "props" (propiedades).
 */
export interface AvatarProps {
  src?: string;           // URL de la imagen (puede estar o no).
  alt?: string;           // Texto alternativo para la imagen (por accesibilidad).
  size?: 'sm' | 'md' | 'lg' | 'xl'; // Tamaños posibles del avatar: pequeño, mediano, grande, extra grande.
  name?: string;          // Nombre que se usará para mostrar la inicial si no hay imagen.
  className?: string;     // Clases CSS adicionales (opcional, por si se quiere personalizar más).
}

// ------------------------------------
// MAPA DE TAMAÑOS PARA EL AVATAR
// ------------------------------------

/**
 * Esta lista relaciona cada tamaño con un valor en píxeles.
 * Por ejemplo, "sm" = 40px, "xl" = 200px.
 */
const sizeMap = {
  sm: '40px',
  md: '80px',
  lg: '120px',
  xl: '200px'
};

// ------------------------------------
// MAPA DE TAMAÑOS DE TEXTO
// ------------------------------------

/**
 * Según el tamaño del avatar, también cambia el tamaño del texto si se muestra una inicial.
 * Esto asegura que todo se vea proporcional.
 */
const fontSizeMap = {
  sm: typography.fontSize.sm,
  md: typography.fontSize.lg,
  lg: typography.fontSize['2xl'],
  xl: typography.fontSize['6xl']
};

// ------------------------------------
// ESTILOS DEL CONTENEDOR DEL AVATAR
// ------------------------------------

/**
 * Este es el componente visual del avatar, con estilos ya aplicados.
 * Tiene forma redonda, sombra, borde de color, y animación al hacer hover.
 */

// Estoy creando un div con estilos personalizados usando styled-components nos dice como se va a usar
//styled.(nombre de la etiqueta como se va a comportar)
// 	•	Pick<AvatarProps, 'size'> significa: Solo quiero usar la propiedad size de ese conjunto AvatarProps”.
const StyledAvatar = styled.div<Pick<AvatarProps, 'size'>>`


/*
    Comentario Josué Peralta:
    Esta función representa cómo se usa el tamaño:

    function obtenerTamaño(props) {
        let size = props.size || 'md';
        return sizeMap[size];
    }

    Ejemplo de uso (solo ilustrativo, no se ejecuta):
    width: (size = 'md') => sizeMap[size];
  */


  width: ${({ size = 'md' }) => sizeMap[size]};
  height: ${({ size = 'md' }) => sizeMap[size]};
  border-radius: 50%; // Hace que el contenedor sea redondo

    // display block ocupa todo el espacio disponible como un div
    //inline ocupa solo el espacio necesario 
    // flex le dice que use flexbox para alinear elementos internos y podemos usar las dos propiedades de abajo


  display: flex; 
  align-items: center;
  justify-content: center;
  background-color: ${colors.background.elevated}; // Fondo gris oscuro
  color: ${colors.text.secondary}; // Color del texto (cuando se usa inicial)
  font-size: ${({ size = 'md' }) => fontSizeMap[size]};
  font-weight: ${typography.fontWeight.bold};
  border: 3px solid ${colors.border.accent}; // Borde azul decorativo
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3); // Sombra para efecto elevado
  position: relative; // Si queremos montar nuevos elementos sepa ubicarse
  overflow: hidden; //Que corte todo lo que salga fuera del circulo
  transition: all 0.3s ease-in-out; // Animación suave

  // Crea un borde con efecto de gradiente
  &::before {
    content: ''; 
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    border-radius: 50%;
    background: linear-gradient(45deg, ${colors.primary[400]}, ${colors.accent[400]});
    z-index: -1; // Va detrás del avatar
    opacity: 0.3;
  }

  // Al pasar el mouse, se agranda un poquito y aumenta la sombra
  //
  &:hover {
    transform: scale(1.01);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4); // Usamos rgba y no tokens porque ususlametne los tokens son para colors base aqui usamos sombra
  }

  // En pantallas pequeñas (celulares), el avatar extra grande se ajusta
  // condición ? valor_si_verdadero : valor_si_falso
  //  1 = es darle un valor
  // 2 == es comparar sin importar el tipo 5 == '5'
  // 3 === comparar importando el tipo 5 === '5'
  @media (max-width: 768px) {
    width: ${({ size = 'md' }) => size === 'xl' ? '160px' : sizeMap[size]};
    height: ${({ size = 'md' }) => size === 'xl' ? '160px' : sizeMap[size]};
  }
`;

// ------------------------------------
// ESTILO PARA LA IMAGEN DEL AVATAR
// ------------------------------------

/**
 * Si hay una imagen, se muestra aquí.
 * Se ajusta automáticamente para ocupar todo el espacio y no deformarse.
 */
const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; // Hace que la imagen se recorte pero no se deforme
  border-radius: 50%; // También la imagen será redonda
  transition: transform 0.3s ease-in-out;

  // Cuando pasamos el mouse sobre el avatar, la imagen se agranda un poco
  ${StyledAvatar}:hover & {
    transform: scale(1.1);
  }
`;

// ------------------------------------
// ESTILO PARA LA LETRA INICIAL
// ------------------------------------

/**
 * Si no hay imagen, se muestra la primera letra del nombre de la persona.
 * 
 * COMPONENTE DE la imagen que aparece adentro el otro era el contenedor circular
 */
const AvatarInitial = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${typography.fontWeight.bold};
  text-transform: uppercase; // Siempre en mayúscula
`;

// ------------------------------------
// COMPONENTE PRINCIPAL AVATAR
// ------------------------------------

/**
 * Este es el componente final que exportamos para usar en el resto de la aplicación.
 * Muestra la imagen si está disponible. Si no, muestra una letra.
 */

// Creamos un componente <avatar> que es una funcion de react
// osea que va a poder mandar codigo html
/*
Una Function Component devuelve JSX,
🟩 React transforma ese JSX en JavaScript,
🟩 Y ese JavaScript crea elementos HTML reales en la pantalla.
*/

//  le dice que acepta propiedades descritas en la interfaz AvagarProps

export const Avatar: React.FC<AvatarProps> = ({
  //Paramtros en el ()
  src,         // URL de la imagen
  alt,         // Texto alternativo
  size = 'md', // Tamaño por defecto es "md"
  name,        // Nombre de la persona
  className,   // Clase adicional
  ...props     // Cualquier otro dato extra que se pasa en la etiqueta
}) => {
  // Renderizado que ya se ve
  
  // ✅ Si hay imagen, se muestra
  if (src) {
    return (
      <StyledAvatar size={size} className={className} {...props}>
        <AvatarImage src={src} alt={alt || name || 'Avatar'} />
      </StyledAvatar>
    );
  }

  // ❌ Si no hay imagen, se usa la primera letra del nombre
  const initial = name ? name.charAt(0).toUpperCase() : '?'; // Si no hay nombre, muestra ?

  return (
    <StyledAvatar size={size} className={className} {...props}>
      <AvatarInitial>
        {initial}
      </AvatarInitial>
    </StyledAvatar>
  );
};

// Exportamos el componente para que pueda usarse en otras partes del sitio
export default Avatar;