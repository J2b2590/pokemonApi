import axios from "axios";
import { useState, useEffect } from "react";
import { Col, Row, Container, Card, Image } from "react-bootstrap";
function PokemonList(props) {
  const [poke_monImg, getPokemonImg] = useState([]);

  const imgApi = "https://pokeres.bastionbot.org ";

  console.log(props, "Poke List");

  useEffect(() => {
    getPokemonImgCall();
  }, []);
  const getPokemonImgCall = () => {
    axios
      .get(`https://pokeres.bastionbot.org/images/pokemon/${props.id}.png`)
      .then((resp) => {
        console.log(resp, "IMG CALL");
        const allPokemonImg = resp.config.url;
        getPokemonImg(allPokemonImg);
      })
      .catch((error) => console.log(`Error ${error}`));
  };
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={poke_monImg} />
        <Card.Body>
          <Card.Title>{props.Pokemon}</Card.Title>
        </Card.Body>
      </Card>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image src={poke_monImg} thumbnail />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PokemonList;
