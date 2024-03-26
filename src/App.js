import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return(
    <div className="App">
      <div className="TitleSection">
        <h1>Pokemon Stats</h1>
        <input type={"text"} />
        <button>Search Pokemon</button>
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
