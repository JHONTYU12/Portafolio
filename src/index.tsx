// Importa la biblioteca principal de React, que permite construir interfaces (pantallas)
import React from 'react';
// Importa otra parte de React, que se encarga de conectar tu sitio con el navegador
import ReactDOM from 'react-dom/client';
// Importa los estilos globales del sitio (colores, tamaños, etc.)
import './index.css';
// Importa el componente principal de tu aplicación, que está en otro archivo llamado 'App.tsx'
import App from './App';
// Busca en el documento HTML el elemento con el id "root"
// Este es un espacio vacío en tu página donde React va a "dibujar" todo el sitio
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement // Asegura que ese elemento sí existe y es válido
);
// Aquí le dice a React: “renderiza (muestra en pantalla) el componente App dentro de ese espacio”
root.render(
  // StrictMode es una herramienta de React que ayuda a detectar errores o malas prácticas
  <React.StrictMode>
    <App />  {/* Muestra el contenido de tu aplicación */}
  </React.StrictMode>
);