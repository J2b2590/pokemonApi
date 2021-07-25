import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

import Pokemon from "./components/pokemon";

function App() {
  const [poke_mon, getPokemon] = useState([]);

  useEffect(() => {
    getAllPokemon();
  }, []);



  const getAllPokemon = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then((resp) => {
        console.log(resp.data.results);
        const allPokemon = resp.data.results;
        getPokemon(allPokemon);
      })
      .catch((error) => console.log(`Error ${error}`));
  };


  

  return (
    <div>
      <Pokemon poke_mon={poke_mon} />
    </div>
  );
}

export default App;
