import React from 'react';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import { Hero } from './Hero';
import { Button, Stack } from '../../atoms';

const meta: Meta<typeof Hero> = {
  title: 'Design System/Organisms/Hero',
  component: Hero,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Organismo Hero

El organismo Hero es la sección principal de presentación.
Combina avatar, texto y botones de manera atómica.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Historia básica con avatar
export const ConAvatar: Story = {
  args: {
    avatar: { src: '/images/avatar.jpeg', alt: 'Josué Peralta' },
    name: 'Josué Peralta',
    title: 'Desarrollador Frontend',
    description: 'Creando experiencias digitales únicas y soluciones innovadoras.',
    buttons: (
      <Stack direction="row" gap={6} justify="center">
        <Button size="lg">Contactar</Button>
        <Button variant="outline" size="lg">Ver Proyectos</Button>
      </Stack>
    ),
  },
};

// Historia sin avatar (muestra inicial)
export const SinAvatar: Story = {
  args: {
    name: 'Josué Peralta',
    title: 'Desarrollador Frontend',
    description: 'Sin avatar, muestra la inicial del nombre.',
    buttons: (
      <Stack direction="row" gap={6} justify="center">
        <Button size="lg">Contactar</Button>
      </Stack>
    ),
  },
}; 