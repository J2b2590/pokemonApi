import PokemonList from "./pokemonList";
import { Col, Row, Container, Card, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Pokemon(props) {
  console.log(props);

  return (
    <Container>
      <Row md={3}>
        {props.poke_mon.map((Pokemon) => {
          const pokeId = Pokemon.url.split("/")[6];

          return (
            <Col>
              <PokemonList key={pokeId} id={pokeId} Pokemon={Pokemon.name} history={props.history}/>
              <Link to={`/pokemon/${pokeId}`}>
             
              </Link>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Pokemon;
