import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

import Pokemon from "./containers/pokemon";
import PokemonView from "./components/pokemonView";
import Pokedex from "./components/pokedex";
import Header from "./components/header";
import { Route, Switch } from "react-router";
import Login from "./components/login";

function App() {
  const [poke_mon, getPokemon] = useState([]);
  const [personLog, getPersonLog] = useState([]);
  const [favPoke, getFavPoke] = useState([]);

  useEffect(() => {
    getAllPokemon();
  }, []);

  const getAllPokemon = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=5")
      .then((resp) => {
        // console.log(resp.data, "API");
        // console.log(resp.data.results);
        const allPokemon = resp.data.results;
        // const pokeId = resp.data.results.url.split("/")[6];
        getPokemon(allPokemon);
      })
      .catch((error) => console.log(`Error ${error}`));
  };

  const grabLoginUsers = (e) => {
    console.log(e);
    getPersonLog(e);
  };

  const grabFavPoke = (id) => {
    console.log(id);
  };

  return (
    <div>
      <Header personLog={personLog} />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => {
            return (
              <Login grabLoginUsers={grabLoginUsers} history={props.history} />
            );
          }}
        />
        <Route
          exact
          path="/pokemon"
          render={(props) => {
            return (
              <Pokemon
                {...props}
                poke_mon={poke_mon}
                personLog={personLog}
                grabFavPoke={grabFavPoke}
              />
            );
          }}
        />
        <Route
          exact
          path="/pokemon/:id"
          render={(props) => {
            return (
              <PokemonView
                {...props}
                poke_mon={poke_mon}
                // history={props.history}
              />
            );
          }}
        />
        <Route
          exact
          path="/pokemon/favorites"
          render={(props) => {
            return <Pokedex {...props} poke_mon={poke_mon} favPoke={favPoke} />;
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
