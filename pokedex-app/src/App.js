import './App.css';
import React from 'react';


const url = 'https://pokeapi.co/api/v2/pokemon/';
var pokemonName = '';

class Pokemon extends React.Component {

  curText = "";
  
  constructor(props) {
    super(props);
    this.state = {info: {}};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.curText = event.target.value;
    console.log('Current input: ', this.curText);
  }

  async handleSubmit(event) {

    pokemonName = this.curText;

    try {
      var response = await fetch(url + pokemonName);
      var data = await response.json()
  
      this.setState({ info: data})

    } catch (err) {
      this.setState({ info: {abilities: null}})
    }
    
    event.preventDefault();

  }

  render() {

    pokemonName = this.curText;
    var {abilities} = this.state.info;

    if(abilities) {
      return (
        <div>
    
          <form className='App-input'>
            <label>
                Pokemon search:
            <input type="text" onChange={this.handleChange}/>
           </label>
          <input type="button" value="Submit" onClick={this.handleSubmit}/>
          </form>
    
          <div className="App">
            <h1>Pokemon: {pokemonName}</h1>
            <p> Info: </p>

              {abilities.map((item, index) => (
                <p key={index}>{index}: {item.ability.name}</p>
              ))}
          </div>
    
        </div>
      );
    }
    else {

      var info = pokemonName ? 'No info for ' + pokemonName : ""

      return (
        <div>
    
          <form className='App-input'>
            <label>
                Pokemon search:
            <input type="text" onChange={this.handleChange}/>
           </label>
          <input type="button" value="Submit" onClick={this.handleSubmit}/>
          </form>
    
          <div className="App">
            <h1>Pokemon:</h1>
            <p> Info: </p>
            <p>
              {info}
            </p>
          </div>
    
        </div>
      );
    }

    
  }

}

export default Pokemon;