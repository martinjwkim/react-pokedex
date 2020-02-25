import React from 'react';
import Pokedex from './Pokedex';
import './pokedex.css'

function App() {
  let pokemonResponse;
  return (
    <Pokedex pokemonData={pokemonResponse}/>
  );
}

export default App;
