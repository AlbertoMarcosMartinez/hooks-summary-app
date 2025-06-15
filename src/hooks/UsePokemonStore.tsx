import { useSyncExternalStore } from 'react';

interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
}

// Store implementation
const createPokemonStore = () => {
  let pokemon: Pokemon[] = [];
  let listeners: (() => void)[] = [];

  return {
    subscribe: (listener: () => void) => {
      listeners.push(listener);
      return () => {
        listeners = listeners.filter(l => l !== listener);
      };
    },
    getSnapshot: () => pokemon,
    fetchPokemon: async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
      const data = await response.json();
      
      const pokemonDetails = await Promise.all(
        data.results.map(async (p: { url: string }) => {
          const res = await fetch(p.url);
          return res.json();
        })
      );
      
      pokemon = pokemonDetails;
      listeners.forEach(listener => listener());
    }
  };
};

// Create a single store instance
const pokemonStore = createPokemonStore();

// Custom hook
export const usePokemonStore = () => {
  return {
    pokemon: useSyncExternalStore(
      pokemonStore.subscribe,
      pokemonStore.getSnapshot
    ),
    fetchPokemon: pokemonStore.fetchPokemon
  };
};