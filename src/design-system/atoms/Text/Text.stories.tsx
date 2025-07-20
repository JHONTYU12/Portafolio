/**
 * STORYBOOK - TEXT ATOM
 * 
 * Historias simples para documentar el átomo Text.
 */

import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'Design System/Atoms/Text',
  component: Text,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Text Atom

El átomo Text es para mostrar texto con estilos consistentes.
Utiliza tokens de tipografía.

## Uso:
\`\`\`tsx
<Text variant="h1" color="primary">Título Principal</Text>
<Text variant="body" color="secondary">Párrafo de texto</Text>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'body', 'bodyLarge', 'bodySmall', 'caption'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'muted'],
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Historia base
export const Default: Story = {
  args: {
    children: 'Texto de ejemplo',
    variant: 'body',
    color: 'primary',
  },
};

// Historia con títulos
export const Headings: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Text variant="h1" color="primary">Título H1</Text>
      <Text variant="h2" color="primary">Título H2</Text>
      <Text variant="h3" color="primary">Título H3</Text>
    </div>
  ),
};

// Historia con colores
export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Text variant="body" color="primary">Color Primary</Text>
      <Text variant="body" color="secondary">Color Secondary</Text>
      <Text variant="body" color="muted">Color Muted</Text>
    </div>
  ),
}; 