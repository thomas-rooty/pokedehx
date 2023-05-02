import {useEffect, useState} from "react";
import {fetchAllPokemonJSON} from "../../utils/fetchData.js";
import PokemonCard from "../../components/cards/PokemonCard.jsx"

const PokemonCardsJSON = () => {
  const [pokemon, setPokemon] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getPokemon = async () => {
      const data = await fetchAllPokemonJSON()
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

export default PokemonCardsJSON
