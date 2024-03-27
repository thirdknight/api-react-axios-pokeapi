import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonChosen, setPokemonChosen] = useState(false);
  const [pokemon, setPokemon] = useState({
    name: "",
    species: "",
    img: "",
    hp: "",
    attack: "",
    defense: "",
    type: "",
  });
  

  const searchPokemon = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    // .then(response => console.log(response))
    .then(response => {
      setPokemon({
        name: pokemonName,
        species: response.data.species.name,
        img: response.data.sprites.front_default,
        hp: response.data.stats[0].base_stat,
        attack: response.data.stats[1].base_stat,
        defense: response.data.stats[2].base_stat,
        type: response.data.types[0].type.name,
      });
      setPokemonChosen(true);
    })
  }

  return(
    <div className="App">
      <div className="TitleSection">
        <h1>Pokemon Stats</h1>
        <input type={"text"}
               onChange={(event) => {
                setPokemonName(event.target.value)
                }}
        />
        <button onClick={searchPokemon}>Search Pokemon</button>
      </div>
      <div className='DisplaySection'>
        {!pokemonChosen ? (
          <h1>Please choose a Pokemnon</h1>
        ) : (
          <>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.img} alt=''/>
            <h3>Species: {pokemon.species}</h3>
            <h3>Type:{pokemon.type}</h3>
            <h4>Hp: {pokemon.hp}</h4>
            <h4>Attack: {pokemon.attack}</h4>
            <h4>Defense: {pokemon.defense}</h4>
          </>
        )}
      </div>
  </div>
  )
  
}
export default App;


// function App() {
//   const [data, setData] = useState();
//   const [name, setName] = useState();
//   const [weight, setWeight] = useState();
//   const [number, setNumber] = useState(1);
//   const show = `https://pokeapi.co/api/v2/pokemon/${number}`; 

//   useEffect(() => {
//     axios.get(show).then((response) => {
//       // console.log(response.data);
//       setData(response.data);
//       setName(response.data.name);
//       setWeight(response.data.weight);
//       setNumber(response.data.number);
      
//     }).catch((err) => {
//       console.log('Pokemnon not found');
//     })
//   }, [show])

//   console.log(data);
 
//   return (
//     <div className="App">
//      <h1>Pokemon</h1>
//      {/* with useState */}
//      <input type={"number"} onChange={(e) => {setNumber(e.target.value)}} />
//      <button>Show</button> 
//       <h2>Name: {name}</h2> 
//       <h3>Weight:{weight}</h3>
//       {/* without useState */}
//       <img src={data ? data.sprites.other.dream_world.front_default:
//                 "<p>Loading</p>"} alt=''/>
//       <p>My aibilities are</p>
//         {data ? data.abilities.map((value, key) => {
//           return(
//             <div key={key}>
//               {value.ability.name}
//             </div>
//           )
//         }):""}
//     </div>
//   );
// }

// export default App;
