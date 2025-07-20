/**
 * STORYBOOK - PROJECT TECHNOLOGIES MOLÉCULA
 * 
 * Historias simples para documentar la molécula ProjectTechnologies.
 */

import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { ProjectTechnologies } from './ProjectTechnologies';

const meta: Meta<typeof ProjectTechnologies> = {
  title: 'Design System/Molecules/ProjectTechnologies',
  component: ProjectTechnologies,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# ProjectTechnologies Molecule

La molécula ProjectTechnologies combina átomos para mostrar las tecnologías de un proyecto.
Combina TechnologyTag y Text.

## Uso:
\`\`\`tsx
<ProjectTechnologies technologies={["React", "Node.js", "MongoDB"]} />
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
    technologies: ['React', 'Node.js', 'MongoDB'],
  },
};

// Historia con muchas tecnologías
export const MuchasTecnologias: Story = {
  args: {
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Docker', 'AWS'],
  },
};

// Historia con título personalizado
export const ConTitulo: Story = {
  args: {
    technologies: ['React', 'Node.js'],
    title: 'Tecnologías utilizadas:',
  },
}; 