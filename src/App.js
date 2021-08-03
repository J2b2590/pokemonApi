import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

import Pokemon from "./components/pokemon";
import PokemonView from "./components/pokemonView"
import { Route, Switch } from "react-router";

function App() {
  const [poke_mon, getPokemon] = useState([]);

  useEffect(() => {
    getAllPokemon();
  }, []);

  const getAllPokemon = async () => {
    await axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=10")
      .then((resp) => {
        console.log(resp.data, "API");
        const allPokemon = resp.data.results;
        getPokemon(allPokemon);
      })
      .catch((error) => console.log(`Error ${error}`));
  };

  return (
    <Switch>
      <Route
        exact
        path="/"
        render={(props) => {
          return <Pokemon {...props} poke_mon={poke_mon} />;
        }}
      />
      <Route path="/pokemon/:id" component={PokemonView} />
    </Switch>
  );
}

export default App;
