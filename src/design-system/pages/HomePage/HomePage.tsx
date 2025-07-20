/**
 * PÁGINA - HOME PAGE
 * 
 * La página HomePage es la implementación final que utiliza organismos, moléculas y átomos.
 * Representa la página principal del portafolio.
 * 
 * Jerarquía del diseño atómico:
 * - Tokens: Valores base (colores, tipografía, espaciado)
 * - Átomos: Componentes más pequeños (botones, inputs, textos)
 * - Moléculas: Combinación de átomos (formularios, cards)
 * - Organismos: Secciones complejas (header, footer, sidebar)
 * - Plantillas: Layouts de páginas
 * - Páginas: Implementación final ← ESTE COMPONENTE
 */

import React from 'react';
import styled from 'styled-components';
import { colors, spacing } from '../../tokens';
import { Text, Button, Stack } from '../../atoms';
import { Card, TechnologyCard, ProjectTechnologies } from '../../molecules';
import { Header, Footer, Hero } from '../../organisms';
import { useScrollSpy, useScrollTo } from '../../hooks';

// Props del componente HomePage
export interface HomePageProps {
  /** Datos del usuario */
  userData?: {
    name: string;
    title: string;
    description: string;
    avatar?: string;
  };
  /** Proyectos destacados */
  featuredProjects?: Array<{
    id: string;
    title: string;
    description: string;
    image?: string;
    technologies: string[];
    link?: string;
  }>;
  /** Tecnologías que usa */
  technologies?: Array<{
    name: string;
    icon?: string;
    category: string;
  }>;
  /** Clases CSS adicionales */
  className?: string;
}

// SOLO UN COMPONENTE STYLED: el contenedor principal de la página
const PageContainer = styled.div`
  min-height: 100vh;
  background-color: ${colors.background.primary};
  color: ${colors.text.primary};
`;

// Componente styled para secciones con grid responsive
const SectionContainer = styled.section<{ backgroundColor: string }>`
  padding: ${spacing[24]} ${spacing[6]};
  background-color: ${({ backgroundColor }) => backgroundColor};
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, ${colors.border.primary}, transparent);
  }
  
  @media (max-width: 768px) {
    padding: ${spacing[20]} ${spacing[4]};
  }
`;

// Componente styled para grid de proyectos
const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: ${spacing[8]};
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${spacing[6]};
  }
`;

// Componente styled para grid de tecnologías
const TechnologiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${spacing[6]};
  max-width: 1000px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: ${spacing[4]};
  }
`;

// Componente HomePage

export const HomePage: React.FC<HomePageProps> = ({
  userData = {
    name: "Josué Peralta",
    title: "Desarrollador Frontend",
    description: "Creando experiencias digitales únicas y soluciones innovadoras. Especializado en React, Node.js y tecnologías modernas del desarrollo web.",
    avatar: "/images/avatar.jpeg" 
  },
  featuredProjects = [
    {
      id: "1",
      title: "ApexGuns",
      description: "Plataforma de monitoreo en tiempo real de armas utilizando IA y Machine Learning.",
      technologies: ["React", "Node.js", "MongoDB", "Python"],
      image: "/images/ApexGun.png",
      link: "https://apexgun.app/#/login"
    },
    {
      id: "2",
      title: "Gestion de Servidores - Petroecuador",
      description: "Sistema para la automatizacion de consultas y creacion de servidores desde Vmware desde SQL.",
      technologies: ["React", "PHP", "Sql Server 2022", "Vmware"],
      image: "/images/Petroecuador.png",
      link: "https://github.com/JHONTYU12/ManejoServidores" 
    },
    {
      id: "3",
      title: "Sistema contable para microempresas",
      description: "Sitio web enfocado en microempresas para el manejo de asientos contables.",
      technologies: ["React", "TypeScript", "Python", "MongoDB"],
      image: "/images/Plutus.png",
      link: "https://github.com/JHONTYU12/plutus-app"
    },
    {
      id: "4", // Cambié el ID para que sea único
      title: "PropSite",
      description: "Sistema para el calculo de propinas para el restaurante GoldenTrack.",
      technologies: ["React", "TypeScript", "MongoDB"],
      image: "/images/Calorias.png",
      link: "https://poetic-frangipane-4e5ae0.netlify.app/" 
    }
  ],
  technologies = [
    { name: "React", category: "Frontend", icon: "/icons/react.svg" },
    { name: "TypeScript", category: "Language", icon: "/icons/typescript.svg" },
    { name: "Node.js", category: "Backend", icon: "/icons/nodejs.svg" },
    { name: "MongoDB", category: "Database", icon: "/icons/mongodb.svg" },
    { name: "Php", category: "Database", icon: "/icons/php.svg" },
    { name: "Docker", category: "DevOps", icon: "/icons/docker.svg" },
    


  ],
  className,
  ...props
}) => {
  // Hook para detectar sección activa
  const activeSection = useScrollSpy(['inicio', 'proyectos', 'tecnologias', 'contacto'], 80);
  
  // Hooks para navegación suave
  const scrollToContacto = useScrollTo('contacto', 80);
  const scrollToProyectos = useScrollTo('proyectos', 80);

  return (
    <PageContainer className={className} {...props}>
      {/* Header - ORGANISMO */}
      <Header
        logo={<Text variant="h3" color="primary">Josué Peralta</Text>}
        navigation={[
          { label: 'Sobre mi', href: '#inicio', active: activeSection === 'inicio' },
          { label: 'Proyectos', href: '#proyectos', active: activeSection === 'proyectos' },
          { label: 'Tecnologías', href: '#tecnologias', active: activeSection === 'tecnologias' },
          { label: 'Contacto', href: '#contacto', active: activeSection === 'contacto' }
        ]}
        actions={<Button variant="outline">Descargar CV</Button>}
        fixed
        scrollOffset={80}
      />

      {/* Hero - ORGANISMO */}
      <div id="inicio">
        <Hero
          avatar={userData.avatar ? { src: userData.avatar, alt: userData.name } : undefined}
          name={userData.name}
          title={userData.title}
          description={userData.description}
                    buttons={
            <Stack direction="row" gap={6} justify="center" style={{ flexWrap: 'wrap' }}>
              <Button variant="accent" size="md" onClick={scrollToContacto}>
                Contactar
              </Button>
              <Button variant="outline" size="md" onClick={scrollToProyectos}>
                Ver Proyectos
              </Button>
            </Stack>
          }
        />
        </div>

      {/* Sección de Proyectos - SOLO USANDO MOLÉCULAS Y ÁTOMOS */}
      <SectionContainer backgroundColor={colors.background.secondary} id="proyectos">
        <Stack direction="column" gap={10} style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Text variant="h2" color="primary" align="center">
          Proyectos Destacados
        </Text>
        <ProjectsGrid>
          {featuredProjects.map((project) => (
            <Card
              key={project.id}
              title={project.title}
              subtitle={project.description}
              image={project.image ? { src: project.image, alt: project.title } : undefined}
              actions={
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => project.link && window.open(project.link, '_blank')}
                >
                  Ver Proyecto
                </Button>
              }
              elevated
              hoverable
            >
                <ProjectTechnologies technologies={project.technologies} />
            </Card>
          ))}
        </ProjectsGrid>
        </Stack>
      </SectionContainer>

      {/* Sección de Tecnologías - SOLO USANDO MOLÉCULAS Y ÁTOMOS */}
      <SectionContainer backgroundColor={colors.background.primary} id="tecnologias">
        <Stack direction="column" gap={10} style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <Text variant="h2" color="primary" align="center">
          Tecnologías que Uso
        </Text>
        <TechnologiesGrid>
          {technologies.map((tech, index) => (
              <TechnologyCard
                key={index}
                name={tech.name}
                category={tech.category}
                icon={tech.icon}
              />
          ))}
        </TechnologiesGrid>
        </Stack>
      </SectionContainer>

      {/* Footer - ORGANISMO */}
      <div id="contacto">
        <Footer
          socialLinks={[
            { label: 'GitHub', href: 'https://github.com/JHONTYU12', icon: { src: '/icons/github.svg', alt: 'GitHub' } },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/josue-peralta-02424b276/', icon: { src: '/icons/linkedin.svg', alt: 'LinkedIn' } },
            { label: 'Twitter', href: 'https://x.com/peraltajosue112?s=21', icon: { src: '/icons/twitter.svg', alt: 'Twitter' } },
            { label: 'Email', href: 'mailto:peraltajosue111@gmail.com', icon: { src: '/icons/email.svg', alt: 'Email' } }
          ]}
          contactInfo={{
            email: 'peraltajosue111@gmail.com',
            address: 'Quito, Ecuador'
          }}
        />
      </div>
    </PageContainer>
  );
};

export default HomePage; 