import Pokedex from "../components/pokedex";
import { Col, Row, Container, Card, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const PokedexContainer = (props) => {
  // const pokeId = Pokemon.url.split("/")[6];
  console.log(props, "POKEDEX CONTAIner");
  return (
    <div>
      <Container>
        <Row md={3}>
          {props.favPoke.map((pokemon) => {
            console.log(pokemon, "POKEDEX CONT MAP");
            return (
              <Pokedex
                history={props.history}
                pokemon={pokemon}
                handleDelete={props.handleDelete}
              />
            );
          })}
          <Col>
            <Button onClick={() => props.history.push("/pokemon")}>
              Back to Pokemon
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PokedexContainer;
