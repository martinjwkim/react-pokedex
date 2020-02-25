import React from 'react';
import pokemonData from './pokemonData';

function Pokedex(props){
  const styling = {
    display: "inline-block",
    margin: "10px",
    width: "250px",
    textAlign: "center",
    borderRadius: "20px",
    backgroundColor: "lightgray",
    color: "black"
  }
  return (
  <div>
    {pokemonData.map(pokemonObj => 
    <div style={styling}>
      <h3 style={{color: "blue"}}> {pokemonObj.name} </h3>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonObj.id}.png`} alt='pokemon'/>
      <p> Type: {pokemonObj.type} </p>
      <p> EXP: {pokemonObj.base_experience} </p>
    </div>
    )}
  </div>
  )
}

export default Pokedex;