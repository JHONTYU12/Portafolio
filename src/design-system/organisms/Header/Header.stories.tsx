/**
 * STORYBOOK - HEADER ORGANISMO
 * 
 * Historias simples para documentar el organismo Header.
 */

import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Header } from './Header';
import { Button, Text } from '../../atoms';
import { useScrollSpy } from '../../hooks';

const meta: Meta<typeof Header> = {
  title: 'Design System/Organisms/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Header Organismo

El organismo Header es la navegación principal de la página.
Combina logo, navegación y acciones de manera atómica.

## Uso:
\`\`\`tsx
<Header 
  logo={<Text variant="h3">Logo</Text>}
  navigation={[...]}
  actions={<Button>Acción</Button>}
/>
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
    logo: <Text variant="h3" color="primary">Josué Peralta</Text>,
    navigation: [
      { label: 'Inicio', href: '/', active: true },
      { label: 'Proyectos', href: '/proyectos' },
      { label: 'Sobre mí', href: '/sobre-mi' },
      { label: 'Contacto', href: '/contacto' }
    ],
    actions: <Button variant="outline">Descargar CV</Button>,
  },
};

// Historia con ScrollSpy Hook
export const ConScrollSpyHook: Story = {
  render: () => {
    const activeSection = useScrollSpy(['inicio', 'proyectos', 'tecnologias', 'contacto'], 80);
    
    return (
      <Header
        logo={<Text variant="h3" color="primary">Josué Peralta</Text>}
        navigation={[
          { label: 'Sobre mi', href: '#inicio', active: activeSection === 'inicio' },
          { label: 'Proyectos', href: '#proyectos', active: activeSection === 'proyectos' },
          { label: 'Tecnologias', href: '#tecnologias', active: activeSection === 'tecnologias' },
          { label: 'Contacto', href: '#contacto', active: activeSection === 'contacto' }
        ]}
        actions={<Button variant="outline">Descargar CV</Button>}
        fixed
        scrollOffset={80}
      />
    );
  },
};

// Historia sin acciones
export const SinAcciones: Story = {
  args: {
    logo: <Text variant="h3" color="primary">Josué Peralta</Text>,
    navigation: [
      { label: 'Inicio', href: '/', active: true },
      { label: 'Proyectos', href: '/proyectos' },
      { label: 'Sobre mí', href: '/sobre-mi' },
      { label: 'Contacto', href: '/contacto' }
    ],
  },
};

// Historia fija
export const Fijo: Story = {
  args: {
    logo: <Text variant="h3" color="primary">Josué Peralta</Text>,
    navigation: [
      { label: 'Inicio', href: '/', active: true },
      { label: 'Proyectos', href: '/proyectos' },
      { label: 'Sobre mí', href: '/sobre-mi' },
      { label: 'Contacto', href: '/contacto' }
    ],
    actions: <Button variant="outline">Descargar CV</Button>,
    fixed: true,
  },
}; 