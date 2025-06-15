import React, { useState, useMemo } from 'react';

// Función costosa para simular cálculos pesados
const calculatePrimes = (max: number): number[] => {
  console.log('Calculando números primos...'); // Para ver cuando se ejecuta
  const primes: number[] = [];
  
  for (let i = 2; i <= max; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(i);
    }
  }
  return primes;
};

const UseMemoCard: React.FC = () => {
  // Estados para el ejemplo
  const [maxNumber, setMaxNumber] = useState<number>(100);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Memorizamos el cálculo costoso
  const primeNumbers = useMemo(() => {
    return calculatePrimes(maxNumber);
  }, [maxNumber]); // Solo recalcula si maxNumber cambia

  // Valores derivados memorizados
  const stats = useMemo(() => {
    return {
      count: primeNumbers.length,
      max: Math.max(...primeNumbers),
      min: Math.min(...primeNumbers)
    };
  }, [primeNumbers]);

  return (
    <div className={`p-6 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white'}`}>
      <h2 className="text-xl font-semibold mb-4">
        useMemo Example - Prime Numbers
      </h2>

      <div className="space-y-6">
        {/* Controles */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm mb-1">
              Calcular primos hasta:
            </label>
            <input
              type="number"
              value={maxNumber}
              onChange={(e) => setMaxNumber(Number(e.target.value))}
              className="px-3 py-2 border rounded text-black"
              max="1000"
            />
          </div>

          <button
            onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Cambiar Tema
          </button>
        </div>

        {/* Resultados */}
        <div className="space-y-2">
          <h3 className="text-lg font-medium">Estadísticas:</h3>
          <p>Cantidad de primos: {stats.count}</p>
          <p>Número primo mayor: {stats.max}</p>
          <p>Número primo menor: {stats.min}</p>
        </div>

        {/* Lista de números primos */}
        <div>
          <h3 className="text-lg font-medium mb-2">Números Primos:</h3>
          <div className="max-h-40 overflow-y-auto grid grid-cols-4 gap-2">
            {primeNumbers.map(num => (
              <div 
                key={num}
                className="p-2 bg-blue-100 text-blue-800 rounded text-center"
              >
                {num}
              </div>
            ))}
          </div>
        </div>

        {/* Explicación */}
        <div className={`p-4 rounded ${
          theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'
        }`}>
          <h3 className="text-sm font-medium mb-2">
            Aspectos clave de useMemo:
          </h3>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Memoriza cálculos costosos</li>
            <li>Evita recálculos innecesarios</li>
            <li>Optimiza el rendimiento</li>
            <li>Mantiene la referencia estable</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UseMemoCard;

// Principales Usos de useMemo
// 1. Optimización de Cálculos Costosos
// Operaciones matemáticas complejas
// Transformación de datos grandes
// Filtrado de listas extensas
// Formateo de datos complejo
// 2. Estabilidad de Referencias
// Prevenir re-renders innecesarios
// Props de objetos en componentes memorizados
// Valores derivados que se usan en useEffect
// Mantener consistencia en dependencias
// 3. Casos de Uso Comunes
// Cálculos de datos en tiempo real
// Procesamiento de grandes conjuntos de datos
// Renderizado de visualizaciones complejas
// Cacheo de resultados de operaciones costosas
// 4. Cuándo NO Usar useMemo
// Cálculos simples o rápidos
// Valores primitivos
// Cuando el costo de memorización supera el beneficio
// En componentes que no tienen problemas de rendimiento