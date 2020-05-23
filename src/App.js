import React from 'react';
import PokedexHeader from './components/PokedexHeader'
import './App.css';

function App() {
  return (
    <div className="App">
      <PokedexHeader author={'@atypical.engineer'} name={"Greg"} />
    </div>
  );
}

export default App;
