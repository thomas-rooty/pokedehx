import styles from './cards.module.css'
import {fetchDetailsPokemon} from "../../utils/fetchData.js"
import {useState, useEffect} from "react";

const PokemonCard = ({pokemon}) => {
  // Get id of the Pokemon from the url for example "https://pokeapi.co/api/v2/pokemon/1/"
  const id = pokemon.url.split("/")[6]

  // Get the details of the Pokemon
  const [pokemonDetails, setPokemonDetails] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getPokemonDetails = async () => {
      const data = await fetchDetailsPokemon(id)
      setPokemonDetails(data)
      setLoading(false)
    }
    getPokemonDetails()
  }, [pokemon.url])

  return (
    <div className={styles.card}>
      <div className={styles.card__img}>
        {loading ? <h1>Loading...</h1> :
          <img src={pokemonDetails.sprites?.front_default} alt={pokemon.name}/>
        }
      </div>
      <div className={styles.card__name}>
        <h3>{pokemon.name}</h3>
      </div>
      <div className={styles.card__types}>
        {loading ? <h1>Loading...</h1> : pokemonDetails.types?.map((type, index) => <p key={index}>{type.type.name}</p>)}
      </div>
    </div>
  )
}

export default PokemonCard
