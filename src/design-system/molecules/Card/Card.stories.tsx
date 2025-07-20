/**
 * STORYBOOK - CARD MOLÉCULA
 * 
 * Historias simples para documentar la molécula Card.
 */

import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Card } from './Card';
import { Button } from '../../atoms';
import { ProjectTechnologies } from '../ProjectTechnologies/ProjectTechnologies';

const meta: Meta<typeof Card> = {
  title: 'Design System/Molecules/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Card Molecule

La molécula Card combina átomos para crear tarjetas.
Usa Text, Stack y Button para su estructura.

## Uso:
\`\`\`tsx
<Card title="Título" subtitle="Subtítulo">
  Contenido de la tarjeta
</Card>
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
    title: 'Título de la Tarjeta',
    subtitle: 'Subtítulo descriptivo de la tarjeta que se separa correctamente del título usando Stack.',
    children: 'Contenido de la tarjeta que puede incluir cualquier elemento.',
  },
};

// Historia con acciones
export const ConAcciones: Story = {
  args: {
    title: 'Proyecto Destacado',
    subtitle: 'Descripción del proyecto con tecnologías utilizadas. El título y subtítulo están separados usando Stack.',
    actions: <Button variant="outline" size="sm">Ver Proyecto</Button>,
    children: 'Información adicional del proyecto.',
  },
};

// Historia elevada
export const Elevada: Story = {
  args: {
    title: 'Tarjeta Elevada',
    subtitle: 'Con sombra y efecto hover. Título y subtítulo separados atómicamente.',
    elevated: true,
    hoverable: true,
    children: 'Esta tarjeta tiene efectos visuales.',
  },
};

// Historia de proyecto real
export const ProyectoReal: Story = {
  args: {
    title: 'E-commerce Platform',
    subtitle: 'Plataforma de comercio electrónico completa con React, Node.js y MongoDB.',
    elevated: true,
    hoverable: true,
    actions: <Button variant="outline" size="sm">Ver Proyecto</Button>,
    children: <ProjectTechnologies technologies={['React', 'Node.js', 'MongoDB', 'Stripe']} />,
  },
}; 