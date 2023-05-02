import {useState, useEffect} from 'react'
import {fetchDetailsPokemon} from '../../utils/fetchData.js'
import styles from './cards.module.css'
import {Link} from "react-router-dom"

const PokemonCard = ({pokemon}) => {
  // Get the id from the url
  const id = pokemon.url.split('/')[6]

  // Fetch the details of the pokemon
  const [pokemonDetails, setPokemonDetails] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      const data = await fetchDetailsPokemon(id)
      setPokemonDetails(data)
      setLoading(false)
    }
    fetchPokemonDetails()
  }, [id])

  // Render the types
  const renderTypes = () => {
    if (loading) return <h1>Loading...</h1>;
    return pokemonDetails.types?.map((type, index) => (
      <p key={index}>{type.type.name}</p>
    ))
  }

  return (
    <div className={styles.card}>
      <Link to={`/pokemon/${id}`} className={styles.card__link}>
        <div className={styles.card__img}>
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            <img
              src={pokemonDetails.sprites?.front_default}
              alt={pokemon.name}
            />
          )}
        </div>
        <div className={styles.card__name}>
          <h3>{pokemon.name}</h3>
        </div>
        <div className={styles.card__types}>{renderTypes()}</div>
      </Link>
    </div>
  )
}

export default PokemonCard
