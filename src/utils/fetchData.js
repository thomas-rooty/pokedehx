// PokeAPI
export const fetchAllPokemon = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
  const data = await response.json()
  return data.results
}

export const fetchDetailsPokemon = async (id) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  const data = await response.json()
  console.log(data)
  return data
}

// PokeAPI - JSON
export const fetchAllPokemonJSON = async () => {
  const response = await fetch('http://localhost:3000/pokemons/')
  return await response.json()
}

export const fetchDetailsPokemonJSON = async (id) => {
  const response = await fetch(`http://localhost:3000/pokemons/${id}`)
  return await response.json()
}
