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
      this.setState({ info: {name: null}})
    }
    
    event.preventDefault();

  }

  render() {

    pokemonName = this.curText;
    var {name, height, weight, types, abilities, moves} = this.state.info;

    if(name) {
      return (
        <div>
    
          <form className='App-input'>
            <label>
                Search:
            <input type="text" onChange={this.handleChange}/>
           </label>
          <input type="button" value="Submit" onClick={this.handleSubmit}/>
          </form>
    
          <div className="App-info">
            <h1>Pokemon: {pokemonName}</h1>

            <p>
              <h2>
                General Info
              </h2>
              <p> Height (decimetres): {height}</p>
              <p> Weight (hectograms): {weight}</p>
              <p> Types:
                {types.map((item, index) => (
                  <p key={index+1}>{index+1}: {item.type.name}</p>
                ))}
              </p>
            </p>

            <p> 
              <h2>
                Abilities
              </h2> 
            
              {abilities.map((item, index) => (
                <p key={index+1}>{index+1}: {item.ability.name}</p>
              ))}

            </p>

            <p> 
              <h2>
               Moves
              </h2> 

              {moves.map((item, index) => (
                <p key={index+1}>{index+1}: {item.move.name}</p>
              ))}

            </p>

              

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
                 Search for a pokemon:
            <input type="text" onChange={this.handleChange}/>
           </label>
          <input type="button" value="Submit" onClick={this.handleSubmit}/>
          </form>
    
          <div className="App-info">
            <h1>Pokemon:</h1>
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