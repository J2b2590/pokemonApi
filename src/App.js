import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

import Pokemon from "./containers/pokemon";
import PokedexContainer from "./containers/pokedexContainer";
import PokemonView from "./components/pokemonView";
import Pokedex from "./components/pokedex";
import Header from "./components/header";
import { Route, Switch } from "react-router";
import Login from "./components/login";

function App() {
  const [poke_mon, getPokemon] = useState([]);
  const [personLog, getPersonLog] = useState([]);
  const [favPoke, getFavPoke] = useState([]);
  console.log(favPoke, "APP FAV");

  useEffect(() => {
    getAllPokemon();
  }, []);

  const getAllPokemon = async () => {
    await axios
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
    // console.log(e);
    getPersonLog(e);
  };

  const grabFavPoke = (pokemon) => {
    // console.log(pokemon);
    let newFavPoke = [...favPoke, pokemon];
    getFavPoke(newFavPoke);
  };

  const handleDelete = (pokemon) => {
    // console.log(pokemon);
    const newFavArr = favPoke.filter((poke) => poke !== pokemon);
    console.log(newFavArr);
    getFavPoke(newFavArr);
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
            return <PokemonView {...props} poke_mon={poke_mon} />;
          }}
        />
        <Route
          exact
          path="/favorites"
          render={(props) => {
            return (
              <PokedexContainer
                history={props.history}
                favPoke={favPoke}
                handleDelete={handleDelete}
              />
            );
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
