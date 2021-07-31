import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

import Pokemon from "./components/pokemon";
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
        const pokeImg = resp.data.url;
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
    </Switch>
  );
}

export default App;
