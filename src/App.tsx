/**
 * APP PRINCIPAL
 * 
 * Esta es la aplicación principal que utiliza el sistema de diseño atómico.
 * 
 * Jerarquía del diseño atómico implementada:
 * - Tokens: Valores base (colores, tipografía, espaciado)
 * - Átomos: Componentes más pequeños (botones, inputs, textos)
 * - Moléculas: Combinación de átomos (formularios, cards)
 * - Organismos: Secciones complejas (header, footer, sidebar)
 * - Plantillas: Layouts de páginas
 * - Páginas: Implementación final
 */

import React from 'react';
import { HomePage } from './design-system';

function App() {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
