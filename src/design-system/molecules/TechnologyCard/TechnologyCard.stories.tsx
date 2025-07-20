/**
 * STORYBOOK - TECHNOLOGY CARD MOLÉCULA
 * 
 * Historias simples para documentar la molécula TechnologyCard.
 */

import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { TechnologyCard } from './TechnologyCard';

const meta: Meta<typeof TechnologyCard> = {
  title: 'Design System/Molecules/TechnologyCard',
  component: TechnologyCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# TechnologyCard Molecule

La molécula TechnologyCard combina átomos para mostrar información de una tecnología.
Combina TechnologyIcon, Text y Stack.

## Uso:
\`\`\`tsx
<TechnologyCard name="React" category="Frontend" icon="/icons/react.svg" />
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Historia base
export const Default: Story = {
  args: {
    name: 'React',
    category: 'Frontend',
    icon: '/icons/react.svg',
  },
};

// Historia sin icono
export const SinIcono: Story = {
  args: {
    name: 'TypeScript',
    category: 'Language',
  },
};

// Historia con categoría diferente
export const Backend: Story = {
  args: {
    name: 'Node.js',
    category: 'Backend',
    icon: '/icons/nodejs.svg',
  },
}; 