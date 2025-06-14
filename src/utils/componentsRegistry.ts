import React from 'react';

// Define valid component names
type RegisteredComponents = 'UseStateCard' | 'UseEffectCard';

// Create a type for lazy-loaded components
type ComponentRegistry = {
  [K in RegisteredComponents]: React.LazyExoticComponent<React.ComponentType>;
};

// Lazy load components
const componentRegistry: ComponentRegistry = {
  UseStateCard: React.lazy(() => import('../components/cards/UseStateCard')),
  UseEffectCard: React.lazy(() => import('../components/cards/UseEffectCard')),
};

// Helper to safely get components
export const getComponent = (componentName: string) => {
  if (componentName in componentRegistry) {
    return componentRegistry[componentName as RegisteredComponents];
  }
  throw new Error(`Component ${componentName} not found in registry`);
};

export { componentRegistry };