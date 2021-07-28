import axios from "axios";
import { useState, useEffect } from "react";
import { Col, Row, Container, Card, Image, Button } from "react-bootstrap";
import "../App.css";

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
      <Container>
        <Row className="row-cols-1 row-cols-md-2 g-4">
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={poke_monImg} />
              <Card.Body>
                <Card.Title>{props.Pokemon}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PokemonList;
