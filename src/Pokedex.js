import React from 'react';
import pokemonData from './pokemonData';
import './pokedex.css'

function Pokedex(props){
  
  return (
  <div>
    {pokemonData.map(pokemonObj => 
    <div key={pokemonObj.id} className="pokemon">
      <h3 className="pokemon-name"> {pokemonObj.name} </h3>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonObj.id}.png`} alt='pokemon'/>
      <p> Type: {pokemonObj.type} </p>
      <p> EXP: {pokemonObj.base_experience} </p>
    </div>
    )}
  </div>
  )
}

export default Pokedex;