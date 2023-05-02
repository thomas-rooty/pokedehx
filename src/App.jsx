import styles from './app.module.css'
import PokemonCards from "./components/cards/PokemonCards.jsx"
import PokemonDetails from "./components/details/PokemonDetails.jsx";
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className={styles.main}>
      <h1>Pokedehx</h1>
      <div className={styles.container}>
        <Routes>
          <Route exact path="/" element={<PokemonCards/>}/>
          <Route path="/pokemon/:id" element={<PokemonDetails />}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
