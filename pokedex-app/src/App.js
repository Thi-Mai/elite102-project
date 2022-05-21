import './App.css';
import React from 'react';


const url = 'https://pokeapi.co/api/v2/';

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleChange(event) {
    this.setState({value: event.target.value});

    var response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');

    var data = await response.json()

    this.setState({...this.state, info: JSON.stringify(data) })
    console.log(response);

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