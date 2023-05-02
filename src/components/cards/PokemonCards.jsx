import {useEffect, useState} from "react";
import {fetchAllPokemon} from "../../utils/fetchData.js";
import PokemonCard from "../../components/cards/PokemonCard.jsx"

const PokemonCards = () => {
  const [pokemon, setPokemon] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getPokemon = async () => {
      const data = await fetchAllPokemon()
      setPokemon(data)
      setLoading(false)
    }
    getPokemon()
  }, [])

  return (
    <>
      {loading ? <h1>Loading...</h1> : pokemon.map((pokemon, index) =>
        <PokemonCard key={index} pokemon={pokemon}/>
      )}
    </>
  )
}

export default PokemonCards
