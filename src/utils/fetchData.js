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
