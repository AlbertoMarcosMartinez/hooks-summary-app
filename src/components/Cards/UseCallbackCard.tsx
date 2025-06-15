import React, { useState, useCallback } from 'react';

// Componente hijo que recibe la función de búsqueda
const SearchResults: React.FC<{
  results: string[];
  onItemClick: (item: string) => void;
}> = React.memo(({ results, onItemClick }) => {
  console.log("SearchResults renderizado");
  return (
    <div className="space-y-2">
      {results.map((item, index) => (
        <div
          key={index}
          onClick={() => onItemClick(item)}
          className="p-2 border rounded hover:bg-gray-50 cursor-pointer"
        >
          {item}
        </div>
      ))}
    </div>
  );
});

const UseCallbackCard: React.FC = () => {
  // Estados para gestionar la búsqueda y resultados
  const [search, setSearch] = useState<string>("");
  const [results, setResults] = useState<string[]>([]);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  // Simulamos una búsqueda con useCallback
  const handleSearch = useCallback((term: string) => {
    console.log("Realizando búsqueda...");
    const items = [
      "React", "Angular", "Vue", "Svelte", "jQuery",
      "JavaScript", "TypeScript", "Node.js", "Express"
    ];
    const filtered = items.filter(item =>
      item.toLowerCase().includes(term.toLowerCase())
    );
    setResults(filtered);
  }, []); // Sin dependencias porque la lógica de búsqueda no cambia

  // Manejador para seleccionar items
  const handleItemClick = useCallback((item: string) => {
    setSelectedItems(prev => [...prev, item]);
  }, []); // Sin dependencias porque la lógica es constante

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        useCallback Example
      </h2>

      <div className="space-y-6">
        {/* Input de búsqueda */}
        <div>
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              handleSearch(e.target.value);
            }}
            placeholder="Buscar tecnologías..."
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Resultados de búsqueda */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-sm font-medium mb-2">Resultados:</h3>
            <SearchResults
              results={results}
              onItemClick={handleItemClick}
            />
          </div>

          <div>
            <h3 className="text-sm font-medium mb-2">Seleccionados:</h3>
            <div className="space-y-2">
              {selectedItems.map((item, index) => (
                <div key={index} className="p-2 bg-blue-50 rounded">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Explicación */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-gray-700 mb-2">
            ¿Por qué usar useCallback?
          </h3>
          <ul className="list-disc list-inside text-sm space-y-1 text-gray-600">
            <li>Evita recreaciones innecesarias de funciones</li>
            <li>Optimiza el rendimiento con React.memo</li>
            <li>Previene renderizados innecesarios</li>
            <li>Ideal para pasar funciones a componentes hijos</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UseCallbackCard;