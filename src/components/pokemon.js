import PokemonList from "./pokemonList";

function Pokemon(props) {
  console.log(props);
  return (
    <div>
      {props.poke_mon.map((Pokemon) => {
        const poke_id = Pokemon.url.split("/")[6];
        return (
          <PokemonList key={poke_id} id={poke_id} Pokemon={Pokemon.name} />
        );
      })}
    </div>
  );
}

export default Pokemon;
