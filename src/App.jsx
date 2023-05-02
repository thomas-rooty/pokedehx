import styles from './app.module.css'
import PokemonCards from "./components/cards/PokemonCards.jsx"
import PokemonCardsJSON from "./components/cards/PokemonCardsJSON.jsx"
import PokemonDetails from "./components/details/PokemonDetails.jsx"
import PokemonDetailsJSON from "./components/details/PokemonDetailsJSON.jsx"
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className={styles.main}>
      <h1>Pokedehx</h1>
      <div className={styles.container}>
        <Routes>
          <Route exact path="/" element={<PokemonCards/>}/>
          <Route path="/json" element={<PokemonCardsJSON/>}/>
          <Route path="/pokemon/:id" element={<PokemonDetails />}/>
          <Route path="/json/pokemon/:id" element={<PokemonDetailsJSON />}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
