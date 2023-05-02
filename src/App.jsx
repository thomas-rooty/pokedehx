import styles from './app.module.css'
import PokemonCard from "./components/cards/PokemonCard.jsx"
import {fetchAllPokemon} from "./utils/fetchData.js"
import {useState, useEffect} from "react"

const App = () => {
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
    <div className={styles.main}>
      <h1>Pokemon Cards</h1>
      <div className={styles.container}>
        {loading ? <h1>Loading...</h1> : pokemon.map((pokemon, index) => <PokemonCard key={index} pokemon={pokemon}/>)}
      </div>
    </div>
  )
}

export default App
