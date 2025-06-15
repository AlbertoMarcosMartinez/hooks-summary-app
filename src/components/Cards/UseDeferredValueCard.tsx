import React, { useState, useDeferredValue, useMemo } from 'react';

interface ListProps {
  query: string;
}

// Componente de lista con renderizado costoso
const ProductList: React.FC<ListProps> = ({ query }) => {
  // Simulamos una lista grande de productos
  const products = useMemo(() => {
    const items = [];
    for (let i = 0; i < 100; i++) {
      items.push(`Producto ${i}`);
    }
    return items;
  }, []);

  // Filtramos productos basados en la consulta
  const filteredProducts = useMemo(() => {
    console.log('Filtrando productos...');
    return products.filter(product => 
      product.toLowerCase().includes(query.toLowerCase())
    );
  }, [products, query]);

  return (
    <div className="h-64 overflow-auto">
      {filteredProducts.map((product, index) => (
        <div
          key={index}
          className="p-2 border-b hover:bg-gray-50"
        >
          {product}
        </div>
      ))}
    </div>
  );
};

const UseDeferredValueCard: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const deferredQuery = useDeferredValue(query);

  // Comprobamos si hay un retraso
  const isStale = query !== deferredQuery;

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        useDeferredValue Example
      </h2>

      <div className="space-y-6">
        {/* Input de búsqueda */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Buscar productos
          </label>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Escribe para filtrar..."
          />
          {isStale && (
            <p className="text-sm text-blue-500 animate-pulse">
              Actualizando resultados...
            </p>
          )}
        </div>

        {/* Lista de productos con valor diferido */}
        <div className="border rounded-lg overflow-hidden">
          <ProductList query={deferredQuery} />
        </div>

        {/* Explicación */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-gray-700 mb-2">
            ¿Cómo funciona?
          </h3>
          <ul className="list-disc list-inside text-sm space-y-1 text-gray-600">
            <li>El input responde inmediatamente</li>
            <li>La lista se actualiza de forma diferida</li>
            <li>Evita bloqueos de UI durante el filtrado</li>
            <li>Ideal para renderizados costosos</li>
          </ul>
        </div>

        {/* Estado actual */}
        <div className="text-sm text-gray-600">
          <p>Valor actual: <code className="bg-gray-100 px-2 py-1 rounded">{query}</code></p>
          <p>Valor diferido: <code className="bg-gray-100 px-2 py-1 rounded">{deferredQuery}</code></p>
        </div>
      </div>
    </div>
  );
};

export default UseDeferredValueCard;

// Puntos Clave
// 1. Propósito Principal
// Posponer actualizaciones no críticas
// Mantener la UI responsiva
// Optimizar renderizados costosos
// 2. Diferencias con useTransition
// No requiere envolver código en una función
// Útil cuando no controlas la fuente del estado
// Ideal para props o estado externo
// 3. Casos de Uso
// Filtrado de listas grandes
// Búsquedas en tiempo real
// Previsualizaciones
// Renderizado de datos complejos
// 4. Ventajas
// Mejor rendimiento percibido
// UI siempre responsiva
// No bloquea la entrada del usuario
// Feedback visual integrado
// 5. Consideraciones
// Usar solo para actualizaciones no críticas
// Puede mostrar contenido "obsoleto" temporalmente
// Ideal para optimizar renderizados costosos
// Complementa bien con useMemo
// Este ejemplo muestra cómo useDeferredValue puede mejorar la experiencia del usuario al manejar