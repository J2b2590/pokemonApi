import axios from "axios";
import { useState, useEffect } from "react";
import { Col, Row, Container, Card, Image, Button } from "react-bootstrap";
import "../App.css";

function PokemonList(props) {
  const [poke_monImg, getPokemonImg] = useState([]);
  const [poke_data, getAllPokeData] = useState([]);

  const imgApi = `https://pokeres.bastionbot.org/images/pokemon/${props.id}.png`;

  //   console.log(props, "Poke List");

  useEffect(() => {
    getPokemonImgCall();
    getPokeData();
  }, []);

  const getPokemonImgCall = () => {
    axios
      .get(`${imgApi}`)
      .then((resp) => {
        // console.log(resp, "IMG CALL");
        const allPokemonImg = resp.config.url;
        getPokemonImg(allPokemonImg);
      })
      .catch((error) => console.log(`Error ${error}`));
  };

  const getPokeData = async () => {
    await axios
      .get(`https://pokeapi.co/api/v2/move/${props.id}`)
      .then((resp) => {
        console.log(resp);
        getAllPokeData(resp.data);
      });
  };
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={poke_monImg} />
        <Card.Body>
          <Card.Title>{props.Pokemon}</Card.Title>
          <Card.Text>Ability: {poke_data.name}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default PokemonList;
