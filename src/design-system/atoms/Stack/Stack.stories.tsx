/**
 * STORYBOOK - STACK ATOM
 * 
 * Historias simples para documentar el átomo Stack.
 */

import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Stack } from './Stack';
import { Button } from '../Button/Button';
import { Text } from '../Text/Text';

const meta: Meta<typeof Stack> = {
  title: 'Design System/Atoms/Stack',
  component: Stack,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Stack Atom

El átomo Stack es para layout y espaciado.
Reemplaza divs con props para espaciado consistente.

## Uso:
\`\`\`tsx
<Stack direction="column" gap={4}>
  <Text>Elemento 1</Text>
  <Text>Elemento 2</Text>
</Stack>
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
    direction: 'column',
    gap: 4,
    children: (
      <>
        <Text variant="h3">Elemento 1</Text>
        <Text variant="body">Elemento 2</Text>
        <Text variant="body">Elemento 3</Text>
      </>
    ),
  },
};

// Historia horizontal
export const Horizontal: Story = {
  args: {
    direction: 'row',
    gap: 4,
    children: (
      <>
        <Button variant="primary">Botón 1</Button>
        <Button variant="outline">Botón 2</Button>
        <Button variant="ghost">Botón 3</Button>
      </>
    ),
  },
};

// Historia centrada
export const Centrado: Story = {
  args: {
    direction: 'column',
    gap: 6,
    align: 'center',
    justify: 'center',
    children: (
      <>
        <Text variant="h2">Título Centrado</Text>
        <Text variant="body" color="secondary">Descripción centrada</Text>
        <Button variant="primary">Acción</Button>
      </>
    ),
  },
};

// Historia con diferentes gaps
export const DiferentesGaps: Story = {
  render: () => (
    <Stack direction="column" gap={8}>
      <Stack direction="row" gap={2}>
        <Button variant="primary" size="sm">Gap 2</Button>
        <Button variant="primary" size="sm">Gap 2</Button>
      </Stack>
      <Stack direction="row" gap={4}>
        <Button variant="outline" size="sm">Gap 4</Button>
        <Button variant="outline" size="sm">Gap 4</Button>
      </Stack>
      <Stack direction="row" gap={6}>
        <Button variant="ghost" size="sm">Gap 6</Button>
        <Button variant="ghost" size="sm">Gap 6</Button>
      </Stack>
    </Stack>
  ),
}; 