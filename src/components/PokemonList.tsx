import React from 'react'

interface Props {
name: string
id: number
image: string
type: string
}

function PokemonList(props: Props) {
    const {name, id, image, type} = props
  return (
    <div className='pokemon-list-wrapper'>
        <p># {id}</p>
        <p className='pokemon-name'>{name}</p>
        <img src={image} alt={name} />
        <p>{type}</p>
    </div>
  )
}

export default PokemonList