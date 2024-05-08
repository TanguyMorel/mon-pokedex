import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

interface Pokemon {
  name: string
  url: string
}

interface singlePokemon {
  id: number
  name: string
  sprites: {
    front_default: string
  }
  types: {
    type: {
      name: string
    }
  }
}

function App() {

  const [pokemons, setPokemons] = useState<singlePokemon[]>([]);

  useEffect(() => {
    const getPokemons = async () => {
      const API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=50&offset=0'; 
      const res = await axios.get(API_URL)
  
      // Utilisation de Promise.all pour attendre toutes les requêtes individuelles
      const pokemonDataPromises = res.data.results.map(async (pokemon: Pokemon) => {
        const singlePokemonResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        return singlePokemonResponse.data;
      });

      // Attendre que toutes les requêtes soient terminées
      const pokemonData = await Promise.all(pokemonDataPromises);

      setPokemons(pokemonData);
    }
  
    getPokemons();
  }, []);
  
  console.log(pokemons);

  return (
    <section className='app-section'>
      Pokemon
    </section>
  )
}

export default App
