import styles from './pokemondetails.module.css'
import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import {fetchDetailsPokemon} from '../../utils/fetchData.js'

const PokemonDetails = () => {
  const {id} = useParams()
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    const fetchPokemon = async () => {
      const data = await fetchDetailsPokemon(id)
      setPokemon(data)
    }
    fetchPokemon()
  }, [id])

  if (!pokemon) {
    return <div>Loading...</div>
  }

  // Render the types
  const renderTypes = () => {
    if (!pokemon) return <h1>Loading...</h1>;
    return pokemon.types?.map((type, index) => (
      <p key={index}>{type.type.name}</p>
    ))
  }

  return (
    <div>
      <Link to={'/'}>Back</Link>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites?.front_default} alt={pokemon.name}/>
      <div className={styles.detailsContainer}>
        <span>Type: {renderTypes()}</span>
        <span>Height: {pokemon.height} m</span>
        <span>Weight: {pokemon.weight} kg</span>
        {pokemon.abilities?.map((ability, index) => (
          <span key={index}>Ability {index + 1}: {ability.ability.name}</span>
        ))}
      </div>
    </div>
  )
}

export default PokemonDetails
