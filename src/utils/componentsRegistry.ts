import React from 'react';

// Define valid component names
type RegisteredComponents = 'UseStateCard' | 'UseEffectCard' | 'UseContextCard'| 'UseReducerCard' | 'UseRefCard' | 'UseImperativeCard' | 'UseLayoutEffectCard'
| 'UseInsertionEffectCard' | 'useIdCard' | 'UseTransitionCard' | 'UseDeferredValueCard' | 'UseSyncExternalStoreCard' | 'UseCallbackCard';

// Create a type for lazy-loaded components
type ComponentRegistry = {
  [K in RegisteredComponents]: React.LazyExoticComponent<React.ComponentType>;
};

// Lazy load components
const componentRegistry: ComponentRegistry = {
    UseStateCard: React.lazy(() => import('../components/Cards/UseStateCard')),
    UseEffectCard: React.lazy(() => import('../components/Cards/UseEffectCard')),
    UseContextCard: React.lazy(() => import('../components/Cards/UseContextCard')),
    UseReducerCard: React.lazy(() => import('../components/Cards/UseReducerCard')),
    UseRefCard: React.lazy(() => import('../components/Cards/UseRefCard')),
    UseImperativeCard: React.lazy(() => import('../components/Cards/UseImperativeCard')),
    UseLayoutEffectCard: React.lazy(() => import('../components/Cards/UseLayoutEffectCard')),
    UseInsertionEffectCard: React.lazy(() => import('../components/Cards/UseInsertionEffectCard')),
    useIdCard: React.lazy(() => import('../components/Cards/UseIdCard')),
    UseTransitionCard: React.lazy(() => import('../components/Cards/UseTransitionCard')),
    UseDeferredValueCard: React.lazy(() => import('../components/Cards/UseDeferredValueCard')),
    UseSyncExternalStoreCard: React.lazy(() => import('../components/Cards/UseSyncExternalStoreCard')),
    UseCallbackCard: React.lazy(() => import('../components/Cards/UseCallbackCard')),
};

// Helper to safely get components
export const getComponent = (componentName: string) => {
  if (componentName in componentRegistry) {
    return componentRegistry[componentName as RegisteredComponents];
  }
  throw new Error(`Component ${componentName} not found in registry`);
};

export { componentRegistry };