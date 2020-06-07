import React from 'react';
import PokedexHeader from './components/PokedexHeader'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "Greg"
    }
  }

  render() {
    return (
      <div className="App">
        <PokedexHeader
          author={'@atypical.engineer'}
          name={this.state.name}
        />
      </div>
    );
  }
}

export default App;
