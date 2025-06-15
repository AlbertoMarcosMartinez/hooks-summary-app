import React, { useState, useTransition } from 'react';

// Simulamos una operación pesada
const generateNumbers = (count: number): number[] => {
  const numbers: number[] = [];
  for (let i = 0; i < count; i++) {
    numbers.push(i);
  }
  return numbers;
};

const UseTransitionCard: React.FC = () => {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState<'small' | 'medium' | 'large'>('small');
  const [numbers, setNumbers] = useState<number[]>([]);

  const handleTabChange = (newTab: 'small' | 'medium' | 'large') => {
    setTab(newTab);
    
    // Marcamos la actualización de números como transición
    startTransition(() => {
      switch (newTab) {
        case 'small':
          setNumbers(generateNumbers(1000));
          break;
        case 'medium':
          setNumbers(generateNumbers(10000));
          break;
        case 'large':
          setNumbers(generateNumbers(50000));
          break;
      }
    });
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        useTransition Example
      </h2>

      <div className="space-y-6">
        {/* Tabs */}
        <div className="flex gap-2">
          <button
            onClick={() => handleTabChange('small')}
            className={`px-4 py-2 rounded-lg ${
              tab === 'small' 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            1,000 Items
          </button>
          <button
            onClick={() => handleTabChange('medium')}
            className={`px-4 py-2 rounded-lg ${
              tab === 'medium' 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            10,000 Items
          </button>
          <button
            onClick={() => handleTabChange('large')}
            className={`px-4 py-2 rounded-lg ${
              tab === 'large' 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            50,000 Items
          </button>
        </div>

        {/* Estado de carga */}
        {isPending && (
          <div className="text-sm text-blue-500 animate-pulse">
            Cargando datos...
          </div>
        )}

        {/* Lista de números */}
        <div className="border rounded-lg p-4 h-64 overflow-auto">
          <div className="grid grid-cols-4 gap-2">
            {numbers.map((num) => (
              <div 
                key={num}
                className="bg-gray-100 p-2 rounded text-center text-sm"
              >
                {num}
              </div>
            ))}
          </div>
        </div>

        {/* Explicación */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-gray-700 mb-2">
            ¿Qué está pasando?
          </h3>
          <ul className="list-disc list-inside text-sm space-y-1 text-gray-600">
            <li>La UI permanece responsiva durante la actualización</li>
            <li>El indicador de carga muestra el estado pendiente</li>
            <li>La transición es suave y no bloquea la interfaz</li>
            <li>Ideal para actualizaciones no urgentes y pesadas</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UseTransitionCard;