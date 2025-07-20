# 🎨 Portfolio con Sistema de Diseño Atómico

Este proyecto es un portafolio personal desarrollado con React y TypeScript que implementa un **sistema de diseño atómico** completo. 

## 📚 Sistema de Diseño Atómico

### Jerarquía del Diseño Atómico

El proyecto implementa la metodología de diseño atómico de Brad Frost, organizando los componentes en una jerarquía clara:

```
┌─────────────────────────────────────────────────────────────┐
│                    PÁGINAS (Pages)                         │
│              Implementación final de la UI                 │
└─────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│                  PLANTILLAS (Templates)                    │
│              Layouts y estructuras de páginas              │
└─────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│                  ORGANISMOS (Organisms)                    │
│              Secciones complejas de la UI                  │
│              (Header, Footer, Sidebar, etc.)              │
└─────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│                  MOLÉCULAS (Molecules)                    │
│              Combinación de átomos                         │
│              (Cards, Forms, Navigation, etc.)             │
└─────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│                    ÁTOMOS (Atoms)                         │
│              Componentes más pequeños                      │
│              (Buttons, Text, Inputs, etc.)                │
└─────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│                    TOKENS (Tokens)                        │
│              Valores base del sistema                      │
│              (Colors, Typography, Spacing, etc.)          │
└─────────────────────────────────────────────────────────────┘
```

### Estructura del Proyecto

```
src/
├── design-system/
│   ├── tokens/           # Valores base (colores, tipografía, espaciado)
│   │   ├── colors.ts
│   │   ├── typography.ts
│   │   ├── spacing.ts
│   │   └── index.ts
│   ├── atoms/            # Componentes más pequeños
│   │   ├── Text/
│   │   │   ├── Text.tsx
│   │   │   └── Text.stories.tsx
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   └── Button.stories.tsx
│   │   └── index.ts
│   ├── molecules/        # Combinación de átomos
│   │   ├── Card/
│   │   │   └── Card.tsx
│   │   └── index.ts
│   ├── organisms/        # Secciones complejas
│   │   ├── Header/
│   │   │   └── Header.tsx
│   │   └── index.ts
│   ├── pages/           # Implementación final
│   │   ├── HomePage/
│   │   │   └── HomePage.tsx
│   │   └── index.ts
│   └── index.ts         # Exportaciones principales
```

## 🚀 Características del Proyecto

### ✅ Implementado

- **Sistema de Tokens**: Colores, tipografía, espaciado y sombras
- **Átomos**: Text y Button con múltiples variantes
- **Moléculas**: Card con diferentes configuraciones
- **Organismos**: Header con navegación responsive
- **Páginas**: HomePage completa con secciones
- **Storybook**: Documentación interactiva de componentes
- **TypeScript**: Tipado completo para mejor desarrollo
- **Styled Components**: CSS-in-JS para estilos modulares

### 🎯 Funcionalidades del Portfolio

- **Diseño Minimalista**: Interfaz limpia y moderna
- **Responsive**: Adaptable a diferentes dispositivos
- **Sección Hero**: Presentación personal con avatar
- **Proyectos Destacados**: Cards con información de proyectos
- **Tecnologías**: Grid de tecnologías utilizadas
- **Navegación**: Header fijo con menú móvil

## 🛠️ Tecnologías Utilizadas

- **React 18**: Biblioteca de UI
- **TypeScript**: Tipado estático
- **Styled Components**: CSS-in-JS
- **Storybook**: Documentación de componentes
- **Framer Motion**: Animaciones (preparado)
- **React Router**: Navegación (preparado)

## 📦 Instalación y Uso

### Prerrequisitos

- Node.js 16+ 
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone <repository-url>
cd atomic-portfolio

# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo
npm start
```

### Scripts Disponibles

```bash
# Desarrollo
npm start              # Inicia el servidor de desarrollo
npm run build          # Construye para producción
npm run test           # Ejecuta las pruebas

# Storybook
npm run storybook      # Inicia Storybook
npm run build-storybook # Construye Storybook
```

## 📖 Documentación con Storybook

El proyecto incluye Storybook para documentar todos los componentes:

```bash
npm run storybook
```

### Historias Disponibles

- **Atoms/Text**: Todas las variantes de texto
- **Atoms/Button**: Todas las variantes de botón
- **Molecules/Card**: Diferentes configuraciones de cards
- **Organisms/Header**: Header con navegación

## 🎨 Sistema de Tokens

### Colores

```typescript
// Paleta de colores completa
colors.primary[500]    // Color principal
colors.secondary[500]  // Color secundario
colors.success[500]    // Color de éxito
colors.error[500]      // Color de error
colors.text.primary    // Texto principal
```

### Tipografía

```typescript
// Variantes de texto predefinidas
<Text variant="h1">Título Principal</Text>
<Text variant="body">Párrafo normal</Text>
<Text variant="code">console.log('Hello');</Text>
```

### Espaciado

```typescript
// Sistema de espaciado basado en 4px
spacing[1]  // 4px
spacing[4]  // 16px
spacing[8]  // 32px
```

## 🧩 Componentes del Sistema

### Átomos

#### Text
```tsx
<Text variant="h1" color="primary">
  Título Principal
</Text>
```

#### Button
```tsx
<Button variant="primary" size="md" loading>
  Click me
</Button>
```

### Moléculas

#### Card
```tsx
<Card 
  title="Mi Proyecto"
  subtitle="Descripción del proyecto"
  image={{ src: "/image.jpg", alt: "Proyecto" }}
  actions={<Button>Ver más</Button>}
>
  Contenido de la tarjeta
</Card>
```

### Organismos

#### Header
```tsx
<Header
  logo={<Text variant="h3">Mi Portfolio</Text>}
  navigation={[
    { label: 'Inicio', href: '/', active: true },
    { label: 'Proyectos', href: '/proyectos' }
  ]}
  actions={<Button>Descargar CV</Button>}
/>
```

## 📱 Responsive Design

El proyecto está completamente optimizado para dispositivos móviles:

- **Mobile First**: Diseño pensado primero en móviles
- **Breakpoints**: Sistema de breakpoints consistente
- **Navegación Móvil**: Menú hamburguesa para móviles
- **Grid Responsive**: Layouts que se adaptan automáticamente

## 🎯 Casos de Uso Académico

Este proyecto es ideal para:

- **Exposiciones**: Demuestra implementación práctica de diseño atómico
- **Portfolio**: Muestra habilidades de desarrollo frontend
- **Documentación**: Storybook como ejemplo de documentación técnica
- **Arquitectura**: Ejemplo de organización de código escalable

## 🔧 Personalización

### Cambiar Colores

Edita `src/design-system/tokens/colors.ts`:

```typescript
export const colors = {
  primary: {
    500: '#tu-color-principal',
    // ... más colores
  }
}
```

### Agregar Nuevos Componentes

1. Crea el componente en la carpeta correspondiente
2. Agrega las historias de Storybook
3. Exporta desde el index.ts correspondiente
4. Documenta en el README

## 📄 Licencia

Este proyecto es para uso educativo y demostrativo.

## 👨‍💻 Autor

**Josue Peralta** - Estudiante de Interacción Humano Computador

---

*Este proyecto demuestra la implementación práctica del sistema de diseño atómico, mostrando cómo organizar componentes de manera escalable y mantenible.*
