/**
 * STORYBOOK - BUTTON ATOM
 * 
 * Historias simples para documentar el átomo Button.
 */

import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Design System/Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Button Atom

El átomo Button es el componente base para botones.
Utiliza tokens para mantener consistencia.

## Uso:
\`\`\`tsx
<Button variant="primary" size="md">Click me</Button>
<Button variant="outline">Ver Proyectos</Button>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'danger', 'accent'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Historia base
export const Default: Story = {
  args: {
    children: 'Click me',
    variant: 'primary',
    size: 'md',
  },
};

// Historia con variantes principales
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="accent">Accent</Button>
    </div>
  ),
};

// Historia con tamaños
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Button variant="primary" size="sm">Small</Button>
      <Button variant="primary" size="md">Medium</Button>
      <Button variant="primary" size="lg">Large</Button>
    </div>
  ),
};

 