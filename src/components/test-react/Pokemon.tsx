import { useState, useEffect } from 'react';

export default function Pokemon() {
  const [pokemon, setPokemon] = useState({ name: '' });

  useEffect(() => {
    fetchPokemons();
  }, []);

  const fetchPokemons = async () => {
    const rawPokemon = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    const pokemonData = await rawPokemon.json();
    setPokemon(pokemonData);
  };

  return (
    <div>
      <h5>Pokemon</h5>
      <div>{pokemon && pokemon?.name}</div>
    </div>
  );
}
