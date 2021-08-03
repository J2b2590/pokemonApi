import axios from "axios";
import { useState, useEffect } from "react";
import { Col, Row, Container, Card, Image, Button } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";
import "../App.css";

function PokemonList(props) {
  console.log(props.id, "POKE LIST");
  const [poke_monImg, getPokemonImg] = useState([]);
 

  useEffect(() => {
    getPokemonImgCall();
    // getPokeData();
  }, []);

  const getPokemonImgCall = async () => {
    await axios
      .get(`http://pokeapi.co/api/v2/pokemon/${props.id}`)
      .then((resp) => {
        console.log(resp.data.sprites, "IMG CALL");
        const allPokemonImg = resp.data.sprites.front_default;
        getPokemonImg(allPokemonImg);
      })
      .catch((error) => console.log(`Error ${error}`));
  };

  //   const getPokeData = () => {
  //     axios.get(`https://pokeapi.co/api/v2/move/${props.id}`).then((resp) => {
  //       console.log(resp);
  //       getAllPokeData(resp.data);
  //     });
  //   };
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={poke_monImg} />
        <Card.Body>
          <Card.Title>{props.Pokemon}</Card.Title>
          {/* <Card.Text>Ability: {poke_data.name}</Card.Text> */}
          <Button onClick={() => props.history.push("/pokemon/:id")} variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default PokemonList;
