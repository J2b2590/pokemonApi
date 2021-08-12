import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
const PokemonView = (props) => {
  const { id } = useParams();
  const [pokeData, getPokeData] = useState([]);
  //   console.log(props, "id");
  const poke = JSON.parse(props.location.state.poke);
  //   console.log(poke, "pOKE");
  console.log(pokeData);

  useEffect(() => {
    getOnePokemon();
  }, []);

  const getOnePokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${poke.Pokemon}`)
      .then((resp) => {
        console.log(resp, "ONE POKE");
        getPokeData(resp.data);
      });
  };

  return (
    <div>
      <h1>{poke.Pokemon}</h1>
      {}

      <Button onClick={() => props.history.push("/pokemon")}>Back</Button>
    </div>
  );
};

export default PokemonView;
// front_default;
// back_default;
