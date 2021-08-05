import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

import Pokemon from "./components/pokemon";
import PokemonView from "./components/pokemonView"
import { Route, Switch } from "react-router";
import Login from "./components/login"

function App() {
  const [poke_mon, getPokemon] = useState([]);
  const [personLog, getPersonLog] = useState([]);
  // const [poke_monID, getPokemonID] = useState([]);

  useEffect(() => {
    getAllPokemon();
  }, []);

  const getAllPokemon =  () => {
 axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=100")
      .then((resp) => {
        console.log(resp.data, "API");
        console.log(resp.data.results)
        const allPokemon = resp.data.results;
        // const pokeId = resp.data.results.url.split("/")[6];
        getPokemon(allPokemon);
        
      })
      .catch((error) => console.log(`Error ${error}`));
  };

  const grabLoginUsers = (e) => {
    console.log(e)
    getPersonLog(e)
  }

  return (
    <Switch>
      <Route exact path="/" render={(props) => {
        return <Login grabLoginUsers={grabLoginUsers} history={props.history}/>
      }} />
      <Route
        exact
        path="/pokemon"
        render={(props) => {
          return <Pokemon {...props} poke_mon={poke_mon} personLog={personLog} />;
        }}
      />
      <Route exact
        path="/pokemon/:id"
        render={(props) => {
          return <PokemonView {...props} poke_mon={poke_mon}/>;
        }} />
    </Switch>
  );
}

export default App;
