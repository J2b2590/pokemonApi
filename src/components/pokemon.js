function Pokemon(props) {
  console.log(props);
  return (
    <div>
      {props.poke_mon.map((Pokemon) => {
        console.log(Pokemon, "MAP");
        return <h2>{Pokemon.name}</h2>;
      })}
    </div>
  );
}

export default Pokemon;
