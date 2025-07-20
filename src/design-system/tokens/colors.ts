// Es solo Typescript no es necesariamente reacr

/**
 * TOKENS - COLORS
 *
 * Este archivo define los colores base del sistema de diseño (diseño atómico).
 * Si queremos cambiar un color en todo el proyecto, basta con cambiarlo aquí.
 *
 * Niveles del diseño atómico:
 * - Tokens: valores base (colores, tipografía, espaciado)
 */


/*  colors = {
  primary: { ... },
  secondary: { ... },
  accent: { ... },
  success: { ... },
  warning: { ... },
  error: { ... },
  background: { ... },
  text: { ... },
  border: { ... },
} */

//Constante es la forma de  guardar un valor que no cambia

export const colors = {
  // Colores primarios (usados para botones principales, enlaces, etc.)
primary: {
    50: '#f0f9ff',  // tono más claro
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',  // tono principal
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',  // tono más oscuro
  },

  //Colores secundarios (se usan como color de apoyo)
  secondary: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
  },

  //Colores de acento (resaltan detalles o decoraciones)
  accent: {
    50: '#fdf4ff',
    100: '#fae8ff',
    200: '#f5d0fe',
    300: '#f0abfc',
    400: '#e879f9',
    500: '#d946ef',
    600: '#c026d3',
    700: '#a21caf',
    800: '#86198f',
    900: '#701a75',
  },

  // ✅ Colores semánticos (para mostrar estados como éxito, error o advertencia)

  success: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',  // verde éxito
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
  },

  warning: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',  // amarillo advertencia
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
  },

  error: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',  // rojo error
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
  },

  // ⚪ Colores neutros (grises, sirven para fondos, bordes, texto apagado)
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
  },

  // 🌑 Colores de fondo (modo oscuro)
  background: {
    primary: '#0a0a0a',   // fondo principal
    secondary: '#111111', // fondo de secciones
    tertiary: '#1a1a1a',  // fondo complementario
    dark: '#000000',      // negro absoluto
    card: '#1a1a1a',      // fondo de tarjetas
    elevated: '#222222',  // elementos que "flotan"
  },

  // ✍️ Colores de texto (modo oscuro)
  text: {
    primary: '#ffffff',   // texto principal (blanco)
    secondary: '#e5e5e5', // texto secundario
    tertiary: '#a3a3a3',  // texto menos importante
    inverse: '#000000',   // texto sobre fondo claro
    muted: '#6b7280',     // texto desactivado o apagado
    accent: '#38bdf8',    // texto de énfasis
  },

  // Colores para bordes
  border: {
    primary: '#333333',   // borde general
    secondary: '#404040', // borde más tenue
    accent: '#38bdf8',    // borde resaltado
  },
} as const;
/**
 “as const le dice al sistema que todos estos colores son fijos, que no van a cambiar, y que debe tratarlos como si fueran definitivos. Esto evita errores, ayuda a autocompletar los nombres, y mantiene el código más seguro.”
 */
