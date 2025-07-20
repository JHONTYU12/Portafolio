/**
 * TOKENS - TYPOGRAPHY
 * 
 * Los tokens de tipografía definen las familias de fuentes, tamaños, pesos y espaciados.
 * Estos tokens se utilizan en todos los componentes de texto del sistema.
 */

export const typography = {
  // Familias de fuentes
  fontFamily: {
    primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    secondary: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    mono: "'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace",
  },
  
  // Tamaños de fuente
  fontSize: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
    '6xl': '3.75rem',  // 60px
    '7xl': '4.5rem',   // 72px
    '8xl': '6rem',     // 96px
    '9xl': '8rem',     // 128px
  },
  
  // Pesos de fuente
  fontWeight: {
    thin: '100',
    extralight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
  
  // Alturas de línea
  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },
  
  // Espaciado entre letras
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
  
  // Estilos de texto predefinidos
  textStyles: {
    // Títulos
    h1: {
      fontSize: '3rem',
      fontWeight: '700',
      lineHeight: '1.2',
      letterSpacing: '-0.025em',
      textTransform: 'none' as const,
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    },
    h2: {
      fontSize: '2.25rem',
      fontWeight: '600',
      lineHeight: '1.3',
      letterSpacing: '-0.025em',
      textTransform: 'none' as const,
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    },
    h3: {
      fontSize: '1.875rem',
      fontWeight: '600',
      lineHeight: '1.4',
      letterSpacing: '-0.025em',
      textTransform: 'none' as const,
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: '600',
      lineHeight: '1.4',
      letterSpacing: '-0.025em',
      textTransform: 'none' as const,
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: '600',
      lineHeight: '1.5',
      letterSpacing: '-0.025em',
      textTransform: 'none' as const,
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    },
    h6: {
      fontSize: '1.125rem',
      fontWeight: '600',
      lineHeight: '1.5',
      letterSpacing: '-0.025em',
      textTransform: 'none' as const,
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    },
    
    // Párrafos
    body: {
      fontSize: '1rem',
      fontWeight: '400',
      lineHeight: '1.6',
      letterSpacing: '0em',
      textTransform: 'none' as const,
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    },
    bodyLarge: {
      fontSize: '1.125rem',
      fontWeight: '400',
      lineHeight: '1.6',
      letterSpacing: '0em',
      textTransform: 'none' as const,
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    },
    bodySmall: {
      fontSize: '0.875rem',
      fontWeight: '400',
      lineHeight: '1.5',
      letterSpacing: '0em',
      textTransform: 'none' as const,
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    },
    
    // Textos especiales
    caption: {
      fontSize: '0.75rem',
      fontWeight: '400',
      lineHeight: '1.4',
      letterSpacing: '0.025em',
      textTransform: 'none' as const,
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    },
    overline: {
      fontSize: '0.75rem',
      fontWeight: '600',
      lineHeight: '1.4',
      letterSpacing: '0.1em',
      textTransform: 'uppercase' as const,
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    },
    code: {
      fontSize: '0.875rem',
      fontWeight: '400',
      lineHeight: '1.5',
      letterSpacing: '0em',
      textTransform: 'none' as const,
      fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
    },
  },
} as const;

export type TypographyToken = typeof typography; 