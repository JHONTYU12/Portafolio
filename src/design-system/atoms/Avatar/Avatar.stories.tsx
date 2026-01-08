// Stories para el átomo Avatar

// Son extensiones .stories.tsx

// STOYYBOOK
// Herramienta para visualizar, probar y documentar componentes.
// De forma aislada sin correr toda la aplicación.

// Define historias para un componete
// Historia = Variante visual del componente

// Srotybook para Avatar
// Mostrar Avatar con diferentes imagenes, tamaños y estilos

// Se escribe como funciones que retornan el componente con ciertas props


// NO AFECTA EL CODIGO
// Soluciona el problema deno tener que levantar toda la aplicación para ver un componente
// Permite ver el componente de forma aislada

// Importamos type de meta y StoryObj de Storybook
// Son tipos de estructura y solo los importas


import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Avatar } from './Avatar';


// Este meta es un objeto que sigue la estructura de Storybook
// Para describir el componente avatar`
const meta: Meta<typeof Avatar> = {
  title: 'Design System/Atoms/Avatar', // Como aparece en la interfaz de storybook
  // Componente que vamos a renderizar
  component: Avatar,
  // Como se van a mostrar las historias
  parameters: {
    layout: 'centered', // Centramos el componente
    docs: {
      description: {
        component: `
# Avatar Atomo

El átomo Avatar es un componente para mostrar imágenes de perfil.
Maneja tanto imágenes como iniciales de texto como fallback.

## Uso:
\`\`\`tsx  // Forma de decirle que vamos a mostrar codigo que es typo TS+JSX
// Con imagen
<Avatar src="/images/avatar.jpeg" alt="Josué Peralta" size="lg" />

// Sin imagen (muestra inicial)
<Avatar name="Josué Peralta" size="md" />
\`\`\`
        `,
      },
    },
  },
//Como se comportan las propiedades del componente
// Que props existen, como cambiar entre ellas, opciones a mostrar
// CONVIERTE PROPS EN CONTROLES INTERACTIVOS
argTypes: {
  size: {
    control: 'select',
    options: ['sm', 'md', 'lg', 'xl'],
  },
// Quiero ocultar props de la tala
//   src: { table: { disable: true } },
//   alt: { table: { disable: true } },
//   name: {table:{disable:true}},
//   className:{table:{disable:true}}
},
tags: ['autodocs']
};

// meta exporta el componente que renderiza en cada story = variante
// tittle lo que muestra en la barra de la izquierda
// Parametros y como se muestra
// Documentacion
// argTypes genera controles interactivos como se muestra la seleccion de pron 
export default meta;

// Creamos un type que tenga la estructura de nuestro meta 
// Ayuda a marcar props que no existen
type Story = StoryObj<typeof meta>;


// Historias

// Historia base con imagen
export const ConImagen: Story = {
  args: {
    src: '/images/avatar.jpeg',
    alt: 'Josué Peralta',
    size: 'xl',
    name: 'Josué Peralta',
    className: ""
  },
};

// Historia sin imagen (muestra inicial)
export const SinImagen: Story = {
  args: {
    name: 'Josué Peralta',
    size: 'xl',
  },
};

// Historia con diferentes tamaños
export const Tamaños: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
      <Avatar src="/images/avatar.jpeg" alt="Josué Peralta" size="sm" name="Josué Peralta" />
      <Avatar src="/images/avatar.jpeg" alt="Josué Peralta" size="md" name="Josué Peralta" />
      <Avatar src="/images/avatar.jpeg" alt="Josué Peralta" size="lg" name="Josué Peralta" />
      <Avatar src="/images/avatar.jpeg" alt="Josué Peralta" size="xl" name="Josué Peralta" />
    </div>
  ),
};

// Historia con iniciales de diferentes nombres
export const Iniciales: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'left' }}>
      <Avatar name="Josué Peralta" size="lg" />
      <Avatar name="Ana García" size="lg" />
      <Avatar name="Carlos López" size="lg" />
      <Avatar name="María Rodríguez" size="lg" />
    </div>
  ),
};

// Historia con hover effect
export const ConHover: Story = {
  args: {
    src: '/images/avatar.jpeg',
    alt: 'Josué Peralta',
    size: 'lg',
    name: 'Josué Peralta',
  },
  parameters: {
    docs: {
      description: {
        story: 'El avatar tiene efectos de hover que incluyen escala y sombra mejorada.',
      },
    },
  },
};

