import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  // const URL_API = 'https://pokeapi.co/api/v2/pokemon/25';
  // async function fetchPokemon(){
  //   const response = await fetch(URL_API);
  //   const pokemon = await response.json();
  //   console.log(pokemon.base_experience);
  // }
  // fetchPokemon();
  const [data, setData] = useState();
  const [name, setName] = useState();
  const [weight, setWeight] = useState();
  const [number, setNumber] = useState(1);

  // const URL=`https://pokeapi.co/api/v2/pokemon/1`; 
  // const show = () => {
  //   URL =`https://pokeapi.co/api/v2/pokemon/${number}`; 
  // }
  const show = `https://pokeapi.co/api/v2/pokemon/${number}`; 

  useEffect(() => {
    axios.get(show).then((response) => {
      // console.log(response.data);
      setData(response.data);
      setName(response.data.name);
      setWeight(response.data.weight);
      setNumber(response.data.number);
      
    }).catch((err) => {
      // window.alert(err)
      console.log('Pokemnon not found');
    })
  }, [show])

  console.log(data);
 

  

  return (
    <div className="App">
     <h1>Pokemon</h1>
     {/* with useState */}
     <input type={"number"} onChange={(e) => {setNumber(e.target.value)}} />
     <button>Show</button> 
      <h2>Name: {name}</h2> 
      <h3>Weight:{weight}</h3>
      {/* without useState */}
      <img src={data ? data.sprites.other.dream_world.front_default:
                "<p>Loading</p>"} alt=''/>
      <p>My aibilities are</p>
        {data ? data.abilities.map((value, key) => {
          return(
            <div key={key}>
              {value.ability.name}
            </div>
          )
        }):""}
    </div>
  );
}

export default App;
