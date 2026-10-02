import { useEffect, useState } from 'react'
import './App.css'
import { Button, Card, Container } from 'react-bootstrap'


function App() {

  const [pokemones, setPokemones] = useState([])
  const [pokemon, setPokemon] = useState([null])

  const getAllPokemon = async () => {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?offset=0&limit=200"
    )

    const data = await response.json()
    setPokemones(data.results)
    console.log(data.results)
  }

  const getPokemon = async (pokemon) =>{
    console.log(pokemon)
    const response = await fetch(
      pokemon.url
    )

    const data = await response.json()
    setPokemon(data.results)
    console.log(data.results)
  }

  useEffect(() => {
    getAllPokemon()
  },[])

  return (
    <>
    <Container>
      <h2>Pokémon</h2>
      {
        pokemones.map((poke) => (
          <Button
          key={poke.name}
          className='m-2'
          onClick={() => getPokemon(poke)}
          >
            {poke.name}
            
          </Button>
        ))
      }
    </Container>
    </>
  )
}

export default App
