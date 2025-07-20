/**
 * TOKENS - INDEX
 * 
 * Este archivo exporta todos los tokens del sistema de diseño atómico.
 * Los tokens son los valores base que definen la identidad visual del sistema.
 */

export * from './colors';
export * from './typography';
export * from './spacing';

// Re-exportar tipos para facilitar el uso
export type { ColorToken } from './colors';
export type { TypographyToken } from './typography';
export type {
  SpacingToken,
  BorderRadiusToken,
  ShadowToken,
  ZIndexToken,
  BreakpointToken,
  ContainerToken,
} from './spacing'; 