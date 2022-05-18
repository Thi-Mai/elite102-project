import './App.css';
import Pokedex from 'pokedex-promise-v2';


const P = new Pokedex();

P.getPokemonByName("golduck")
.then((response) => {
  console.log(response);
})
.catch((error) => {
  console.log('There was an ERROR: ', error);
});



function App() {
  return (
    <div className="App-header">
      Pokemon
    </div>
  );

}

export default App;


