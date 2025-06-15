// ¿Qué es useLayoutEffect?
// Es similar a useEffect, pero se ejecuta de forma síncrona después de todas las mutaciones del DOM. Es útil cuando necesitas:

// Medir elementos del DOM
// Realizar animaciones síncronas
// Actualizar el DOM antes de que el navegador pinte

import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';

const UseLayoutEffectCard: React.FC = () => {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const [showEffect, setShowEffect] = useState<boolean>(true);

  // Este efecto se ejecuta después del pintado (puede causar parpadeo)
  useEffect(() => {
    if (showEffect && elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect();
      setWidth(rect.width);
      setHeight(rect.height);
    }
  }, [showEffect]);

  // Este efecto se ejecuta antes del pintado (evita parpadeo)
  useLayoutEffect(() => {
    if (!showEffect && elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect();
      setWidth(rect.width);
      setHeight(rect.height);
    }
  }, [showEffect]);

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        useLayoutEffect vs useEffect
      </h2>

      <div className="space-y-4">
        <p className="text-sm text-gray-600">
          Observa la diferencia de comportamiento al medir el elemento.
          useLayoutEffect evita el parpadeo visual.
        </p>

        <div className="flex gap-4 mb-4">
          <button
            onClick={() => setShowEffect(true)}
            className={`px-4 py-2 rounded-lg ${
              showEffect 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            Usar useEffect
          </button>
          <button
            onClick={() => setShowEffect(false)}
            className={`px-4 py-2 rounded-lg ${
              !showEffect 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            Usar useLayoutEffect
          </button>
        </div>

        <div
          ref={elementRef}
          className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-lg text-white"
        >
          Elemento a medir
        </div>

        <div className="space-y-2">
          <p className="text-sm text-gray-600">
            Ancho: <span className="font-medium">{width.toFixed(2)}px</span>
          </p>
          <p className="text-sm text-gray-600">
            Alto: <span className="font-medium">{height.toFixed(2)}px</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UseLayoutEffectCard;


// Comentarios Importantes:
// Diferencias con useEffect:

// Se ejecuta síncronamente después de las mutaciones del DOM
// Bloquea el pintado visual hasta que se complete
// Útil para evitar parpadeos visuales
// Más costoso en términos de rendimiento
// Casos de uso comunes:

// Mediciones de DOM
// Animaciones que requieren sincronización
// Tooltips y popups posicionados
// Actualizaciones visuales críticas
// Consideraciones de rendimiento:

// Usar con moderación
// Preferir useEffect cuando sea posible
// Puede impactar el tiempo de First Paint
// Ideal para actualizaciones visuales síncronas
// Cuándo usar useLayoutEffect:

// Cuando necesitas medidas precisas del DOM
// Para evitar parpadeos visuales
// En animaciones que requieren sincronización
// Cuando useEffect causa problemas visuales