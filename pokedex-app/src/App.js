import './App.css';
import React from 'react';

/*
import Pokedex from 'pokedex-promise-v2';
const P = new Pokedex();


P.getPokemonByName(['eevee', 'ditto']) // with Promise
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log('There was an ERROR: ', error);
  });
*/

/*
export default function App() {

  return (
    <div>

      <form className='App'>
        <label>
            Pokemon search:
        <input type="text"/>
       </label>
      <input type="submit" value="Submit" />
      </form>

      <div className="App-header">
        <h1>Pokemon Info</h1>
        <h2>value="hello"</h2>
        
      </div>

    </div>
  );

}
*/

/*
class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A pokemon was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
  
        <form className='App-input' onSubmit={this.handleSubmit}>
          <label>
              Pokemon search:
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
         </label>
        <input type="submit" value="Submit" />
        </form>
  
        <div className="App">
          <h1>Pokemon Info</h1>
          <h2>second line</h2>
          
        </div>
  
      </div>
    );
  }

}

export default Pokemon;
*/

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A pokemon was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {

    var pokemonName = this.state.value;

    return (
      <div>
  
        <form className='App-input' onSubmit={this.handleSubmit}>
          <label>
              Pokemon search:
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
         </label>
        <input type="submit" value="Submit" />
        </form>
  
        <div className="App">
          <h1>Pokemon: {pokemonName}</h1>
          <h2> Info </h2>
        </div>
  
      </div>
    );
  }

}

export default Pokemon;