import styles from './pokemondetails.module.css'
import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import {fetchDetailsPokemonJSON} from '../../utils/fetchData.js'

const PokemonDetailsJSON = () => {
  const {id} = useParams()
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    const fetchPokemon = async () => {
      const data = await fetchDetailsPokemonJSON(id)
      setPokemon(data)
      console.log(data)
    }
    fetchPokemon()
  }, [id])

  if (!pokemon) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <Link to={'/'}>Back</Link>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.img} alt={pokemon.name}/>
      <div className={styles.detailsContainer}>
        <span>Type: {pokemon.type}</span>
        {pokemon.abilities?.map((ability, index) => (
          <span key={index}>Ability {index + 1}: {ability}</span>
        ))}
      </div>
    </div>
  )
}

export default PokemonDetailsJSON
