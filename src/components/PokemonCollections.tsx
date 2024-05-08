import React from 'react'
import { singlePokemon } from '../interface'
import PokemonList from './PokemonList'

interface Props {
pokemons: singlePokemon[]
}

function PokemonCollections(props: Props) {

    const {pokemons} = props

  return (
    <div> {pokemons.map((pokemon) => {
        return (
            <PokemonList 
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.sprites.front_default}
            type={pokemon.types[0].type.name}/>
        )
    })}</div>
  )
}

export default PokemonCollections