import React from 'react';
import './pokedex.css'
import pokemonData from './pokemonData';
import Pokemon from './Pokemon'

function Pokedex(props) {

  return (
    <div className="pokedex-container">
      <h1 className="pokedex-title">Pokedex</h1>
      <div>
        {props.pokemonData.map(pokemonObj => <Pokemon info={pokemonObj} key={pokemonObj.id}/>)}
      </div>
    </div>
  )
}

Pokedex.defaultProps = {pokemonData}

export default Pokedex;