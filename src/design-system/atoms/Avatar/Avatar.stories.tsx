import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Design System/Atoms/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Avatar Atom

El átomo Avatar es un componente para mostrar imágenes de perfil.
Maneja tanto imágenes como iniciales de texto como fallback.

## Uso:
\`\`\`tsx
// Con imagen
<Avatar src="/images/avatar.jpeg" alt="Josué Peralta" size="lg" />

// Sin imagen (muestra inicial)
<Avatar name="Josué Peralta" size="md" />
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Historia base con imagen
export const ConImagen: Story = {
  args: {
    src: '/images/avatar.jpeg',
    alt: 'Josué Peralta',
    size: 'xl',
    name: 'Josué Peralta',
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
    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
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