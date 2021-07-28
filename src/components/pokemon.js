import PokemonList from "./pokemonList";
import { useState, useEffect } from "react";

function Pokemon(props) {
  //   const [pokeId, getPokeId] = useState("");
  console.log(props);

  return (
    <div>
      {props.poke_mon.map((Pokemon) => {
        const pokeId = Pokemon.url.split("/")[6];

        return <PokemonList key={pokeId} id={pokeId} Pokemon={Pokemon.name} />;
      })}
    </div>
  );
}

export default Pokemon;
