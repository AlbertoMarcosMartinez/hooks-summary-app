import React, { useRef, useState } from 'react';

// ¿Qué es useRef?
// UseRef es un Hook que permite:

// Mantener valores entre renderizados sin causar nuevos renders
// Acceder directamente a elementos del DOM
// Almacenar valores mutables que no requieren actualización de UI
// Casos de uso comunes
// Referencias a elementos DOM (focus, scroll, etc.)
// Almacenar valores previos
// Contadores o valores que no necesitan re-render
// Timers e intervalos

const UseRefCard: React.FC = () => {
  // useRef para elemento DOM - mantiene la referencia al input
  const inputRef = useRef<HTMLInputElement>(null);
  
  // useRef para contador - no causa re-renders al cambiar
  const renderCountRef = useRef<number>(0);
  
  // useState para comparación - causa re-renders al cambiar
  const [count, setCount] = useState<number>(0);

  // Incrementamos en cada render para ver la diferencia con useState
  renderCountRef.current += 1;

  // Función para demostrar acceso directo al DOM
  const handleFocusInput = () => {
    // El operador opcional (?) evita errores si el ref es null
    inputRef.current?.focus();
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        useRef Hook Example
      </h2>

      {/* Ejemplo 1: Acceso al DOM */}
      <div className="space-y-6">
        <div className="space-y-3">
          <h3 className="text-md font-medium text-gray-700">
            Ejemplo de Referencia DOM
          </h3>
          <div className="flex gap-3">
            {/* El input se vincula con la referencia */}
            <input
              ref={inputRef}
              type="text"
              placeholder="¡Haz click en el botón!"
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleFocusInput}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Enfocar Input
            </button>
          </div>
        </div>

        {/* Ejemplo 2: Contador sin re-renders */}
        <div className="space-y-3">
          <h3 className="text-md font-medium text-gray-700">
            Ejemplo de Contador de Renders
          </h3>
          <div className="space-y-2">
            <p className="text-sm text-gray-600">
              Número de renders (useRef): {' '}
              <span className="font-medium text-gray-800">
                {renderCountRef.current}
              </span>
            </p>
            <p className="text-sm text-gray-600">
              Contador con estado (useState): {' '}
              <span className="font-medium text-gray-800">
                {count}
              </span>
            </p>
            <button
              onClick={() => setCount(prev => prev + 1)}
              className="px-4 py-2 bg-green-500 text-white rounded-lg"
            >
              Forzar Re-render
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseRefCard;