import React, { useInsertionEffect, useState, useEffect, useLayoutEffect } from 'react';

// Función helper para inyectar CSS
const injectStyle = (css: string) => {
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);
  return style;
};

const UseInsertionEffectCard: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [animation, setAnimation] = useState<boolean>(false);

  // 1. useInsertionEffect - Se ejecuta primero
  useInsertionEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .themed-box {
        background: ${theme === 'light' ? '#ffffff' : '#1a1a1a'};
        color: ${theme === 'light' ? '#1a1a1a' : '#ffffff'};
        transition: all 0.3s ease;
      }
      
      .animated-text {
        animation: ${animation ? 'bounce 1s infinite' : 'none'};
      }
      
      @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
      }
    `;
    document.head.appendChild(style);
    return () => style.remove();
  }, [theme, animation]);

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        useInsertionEffect Demo
      </h2>

      <div className="space-y-6">
        {/* Ejemplo Visual 1: Cambio de Tema */}
        <div className="themed-box p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-medium mb-2">
            Ejemplo 1: Cambio de Tema Instantáneo
          </h3>
          <p className="mb-4">
            Este box cambia instantáneamente porque los estilos se inyectan antes del render
          </p>
          <button
            onClick={() => setTheme(prev => prev === 'light' ? 'dark' : 'light')}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Cambiar Tema
          </button>
        </div>

        {/* Ejemplo Visual 2: Animación */}
        <div className="p-4 border rounded-lg">
          <h3 className="text-lg font-medium mb-2 animated-text">
            Ejemplo 2: Texto con Animación
          </h3>
          <button
            onClick={() => setAnimation(prev => !prev)}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            {animation ? 'Detener' : 'Iniciar'} Animación
          </button>
        </div>

        {/* Explicación */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium mb-2">¿Qué observar?</h4>
          <ul className="list-disc list-inside text-sm space-y-2">
            <li>Los cambios de tema son instantáneos (sin parpadeo)</li>
            <li>La animación se aplica sin retraso visible</li>
            <li>Los estilos se inyectan antes de que React actualice el DOM</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UseInsertionEffectCard;

// -----
// Explicación Visual del UseInsertionEffect Hook
// Entiendo tu confusión. Vamos a hacer el ejemplo más visual y claro. Modificaré el componente para mostrar mejor los efectos:

// Lo que deberías notar:
// Cambio de Tema Instantáneo

// Al hacer clic en "Cambiar Tema", el cambio es inmediato
// No hay parpadeo ni estado intermedio visible
// Los estilos se aplican antes de que React actualice el DOM
// Animación Fluida

// La animación comienza instantáneamente
// No hay retraso entre el clic y el inicio de la animación
// Los keyframes se aplican de manera óptima
// Diferencia con useEffect normal Si usáramos useEffect en lugar de useInsertionEffect, podrías notar:

// Pequeños parpadeos en los cambios de tema
// Ligero retraso en el inicio de animaciones
// Posibles estados intermedios visibles
// ¿Por qué es importante?
// Rendimiento: Los estilos se inyectan antes de cualquier renderizado visual
// Consistencia: Evita parpadeos y estados intermedios
// Optimización: Ideal para librerías CSS-in-JS
// Prioridad: Se ejecuta antes que useLayoutEffect y useEffect
// Este hook es especialmente útil cuando necesitas manipular estilos de manera dinámica y quieres evitar cualquier tipo de parpadeo o estado visual intermedio.



// Comentarios Importantes:
// 1. Propósito Principal
// Diseñado específicamente para bibliotecas CSS-in-JS
// Se ejecuta antes que cualquier otro efecto
// Ideal para inyección de estilos dinámicos
// 2. Orden de Ejecución
// useInsertionEffect (primero)
// useLayoutEffect
// useEffect
// 3. Casos de Uso
// Inyección de estilos CSS dinámicos
// Optimización de CSS-in-JS
// Manipulación temprana del DOM
// 4. Advertencias
// No usar para la mayoría de los efectos
// No acceder a refs (aún no están disponibles)
// Solo usar si desarrollas una biblioteca CSS-in-JS
// No realizar operaciones síncronas con el DOM
// 5. Diferencias con otros Effects
// Más temprano que useLayoutEffect
// No tiene acceso a refs
// No puede usar setState
// Específico para inyección de CSS
// Este ejemplo muestra cómo useInsertionEffect puede usarse para inyectar estilos CSS dinámicos de manera eficiente, evitando parpadeos y optimizando el rendimiento.