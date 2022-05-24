import './App.css';
import React from 'react';


const url = 'https://pokeapi.co/api/v2/pokemon/';
var pokemonName = "";

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

  async handleSubmit(event) {
    pokemonName = this.state.value;
    var response = await fetch(url + pokemonName);

    var data = await response.json()

    this.setState({...this.state, info: JSON.stringify(data) })
    console.log(response);
    
    event.preventDefault();

  }

  render() {

    pokemonName = this.state.value;

    return (
      <div>
  
        <form className='App-input'>
          <label>
              Pokemon search:
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
         </label>
        <input type="button" value="Submit" onClick={this.handleSubmit}/>
        </form>
  
        <div className="App">
          <h1>Pokemon: {pokemonName}</h1>
          <p> Info: </p>
          <p>
            {this.state.info}
          </p>
        </div>
  
      </div>
    );
  }

}

export default Pokemon;