import React from 'react';
import Pokedex from './Pokedex';
import './pokedex.css'

function App() {
  return (
    <div className="pokedex-container">
      <h1 className="pokedex-title">Pokedex</h1>
      <Pokedex/>
    </div>
  );
}

export default App;
