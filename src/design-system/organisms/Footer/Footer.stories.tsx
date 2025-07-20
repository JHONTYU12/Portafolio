/**
 * STORYBOOK - FOOTER ORGANISMO
 * 
 * Historias simples para documentar el componente Footer.
 */

import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Footer } from './Footer';

const meta: Meta<typeof Footer> = {
  title: 'Design System/Organisms/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Footer - Organismo de Contacto y Redes Sociales

El Footer muestra información de contacto y enlaces a redes sociales.
Los iconos se muestran como SVG puros sin bordes.
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Datos de ejemplo
const defaultSocialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/josueperez',
    icon: { src: '/icons/github.svg', alt: 'GitHub' }
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/josueperez',
    icon: { src: '/icons/linkedin.svg', alt: 'LinkedIn' }
  },
  {
    label: 'Email',
    href: 'mailto:contact@josueperez.com',
    icon: { src: '/icons/email.svg', alt: 'Email' }
  }
];

const defaultContactInfo = {
  email: 'contact@josueperez.com',
  phone: '+593 99 123 4567',
  address: 'Quito, Ecuador'
};

// Footer completo
export const Default: Story = {
  args: {
    socialLinks: defaultSocialLinks,
    contactInfo: defaultContactInfo
  },
};

// Footer solo contacto
export const SoloContacto: Story = {
  args: {
    contactInfo: defaultContactInfo,
    socialLinks: []
  },
};

// Footer solo redes sociales
export const SoloRedesSociales: Story = {
  args: {
    socialLinks: defaultSocialLinks,
    contactInfo: {}
  },
}; 

