import React, { useEffect } from 'react';
import { usePokemonStore } from '../../hooks/UsePokemonStore'


const UseSyncExternalStoreCard: React.FC = () => {
  const { pokemon, fetchPokemon } = usePokemonStore();

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        useSyncExternalStore with PokeAPI
      </h2>

      <div className="space-y-6">
        {/* Explicación */}
        <div className="text-sm text-gray-600">
          Este ejemplo muestra cómo usar useSyncExternalStore para manejar
          datos externos de forma síncrona con la PokeAPI.
        </div>

        {/* Pokemon Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {pokemon.map((p) => (
            <div 
              key={p.id}
              className="border rounded-lg p-4 hover:shadow-lg transition-shadow"
            >
              <img
                src={p.sprites.front_default}
                alt={p.name}
                className="w-24 h-24 mx-auto"
              />
              <p className="text-center text-sm font-medium capitalize">
                {p.name}
              </p>
              <p className="text-center text-xs text-gray-500">
                #{p.id}
              </p>
            </div>
          ))}
        </div>

        {/* Explicación del Hook */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-gray-700 mb-2">
            Características de useSyncExternalStore
          </h3>
          <ul className="list-disc list-inside text-sm space-y-1 text-gray-600">
            <li>Suscripción a fuentes de datos externas</li>
            <li>Sincronización automática del estado</li>
            <li>Manejo consistente entre servidor y cliente</li>
            <li>Ideal para integraciones con APIs externas</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UseSyncExternalStoreCard;

// Puntos Clave
// 1. Store Externo
// Mantiene el estado fuera de React
// Proporciona mecanismo de suscripción
// Gestiona las actualizaciones de datos
// 2. useSyncExternalStore
// Sincroniza el estado externo con React
// Maneja suscripciones automáticamente
// Garantiza consistencia en SSR
// 3. Ventajas
// Integración segura con fuentes externas
// Actualización síncrona del estado
// Previene inconsistencias de renderizado
// Ideal para bibliotecas de estado
// 4. Casos de Uso
// Integración con APIs externas
// Manejo de estado global
// Sistemas de eventos
// Datos en tiempo real
// Este ejemplo demuestra cómo useSyncExternalStore puede utilizarse para integrar datos de una API externa (PokeAPI) de manera segura y eficiente en una aplicación React.