/**
 * MOLÉCULA - PROJECT TECHNOLOGIES
 * 
 * La molécula ProjectTechnologies combina átomos para mostrar las tecnologías de un proyecto.
 * Combina TechnologyTag y Text para crear una lista de tecnologías.
 * 
 * Jerarquía del diseño atómico:
 * - Tokens: Valores base (colores, tipografía, espaciado)
 * - Átomos: Componentes más pequeños (botones, inputs, textos, tags)
 * - Moléculas: Combinación de átomos (formularios, cards) ← ESTE COMPONENTE
 * - Organismos: Secciones complejas (header, footer, sidebar)
 * - Plantillas: Layouts de páginas
 * - Páginas: Implementación final
 */

import React from 'react';
import styled from 'styled-components';
import { spacing } from '../../tokens';
import { Text } from '../../atoms';
import { TechnologyTag } from '../../atoms/TechnologyTag/TechnologyTag';

// Props del componente ProjectTechnologies
export interface ProjectTechnologiesProps {
  /** Lista de tecnologías */
  technologies: string[];
  /** Título de la sección */
  title?: string;
  /** Clases CSS adicionales */
  className?: string;
}

// Componente styled para el contenedor
const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing[2]};
  margin-top: ${spacing[6]};
`;

/**
 * Componente ProjectTechnologies
 * 
 * @example
 * ```tsx
 * <ProjectTechnologies 
 *   technologies={["React", "Node.js", "MongoDB"]} 
 *   title="Tecnologías utilizadas:"
 * />
 * ```
 */
export const ProjectTechnologies: React.FC<ProjectTechnologiesProps> = ({
  technologies,
  title = "Tecnologías utilizadas:",
  className,
  ...props
}) => {
  return (
    <div className={className} {...props}>
      <Text variant="bodySmall" color="muted" style={{ marginBottom: 8, width: '100%' }}>
        {title}
      </Text>
      <StyledContainer>
        {technologies.map((tech, index) => (
          <TechnologyTag key={index} variant="primary">
            {tech}
          </TechnologyTag>
        ))}
      </StyledContainer>
    </div>
  );
};

export default ProjectTechnologies; 