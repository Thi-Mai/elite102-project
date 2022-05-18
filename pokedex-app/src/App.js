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
        Pokemon Info
      </div>

    </div>
  );

}



/*
class Pokemon extends React.Component {
  render() {
    return (
      <div className="App-header">
        Pokemon Info
      </div>

    );
  }
}

export default Pokemon;
*/
