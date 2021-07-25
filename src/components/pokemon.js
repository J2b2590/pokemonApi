function Pokemon(props) {
  console.log(props);
  return (
    <div>
      {props.poke_mon.map((Pokemon) => {
        console.log(Pokemon, "MAP");
        const img = `${Pokemon.url}`;
        return (
          <div>
            <h2>{Pokemon.name}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default Pokemon;
