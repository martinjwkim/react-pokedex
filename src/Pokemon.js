import React from 'react';

function Pokemon(props) {
  const BASE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon'
  return (
    <div className="pokemon">
      <h3 className="pokemon-name"> {props.info.name} </h3>
      <img src={`${BASE_URL}/${props.info.id}.png`} alt='pokemon' />
      <p> Type: {props.info.type} </p>
      <p> EXP: {props.info.base_experience} </p>
    </div>
  )
}

export default Pokemon