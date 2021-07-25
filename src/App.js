import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

import Pokemon from "./components/pokemon";

function App() {
  const [poke_mon, getPokemon] = useState([]);
  const [poke_monImg, getPokemonImg] = useState([]);
  // const imgApi = "https://pokeres.bastionbot.org ";

  useEffect(() => {
    getAllPokemon();
    getPokemonImgCall();
  }, []);

  const getAllPokemon = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=1")
      .then((resp) => {
        console.log(resp.data.results);
        const allPokemon = resp.data.results;
        const pokeImg = resp.data.url;
        // getPokemonImg(pokeImg);
        getPokemon(allPokemon);
      })
      .catch((error) => console.log(`Error ${error}`));
  };

  const getPokemonImgCall = () => {
    axios
      .get(` https://pokeres.bastionbot.org/images/pokemon/`)
      .then((resp) => {
        console.log(resp, "IMG CALL");
        const allPokemonImg = resp.data;
        getPokemonImg(allPokemonImg);
      })
      .catch((error) => console.log(`Error ${error}`));
  };

  return (
    <div>
      <Pokemon poke_mon={poke_mon} poke_monImg={poke_monImg} />
    </div>
  );
}

export default App;
