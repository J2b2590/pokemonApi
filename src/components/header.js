import { Container, Row, Col } from "react-bootstrap";

import "../App.css";

import { ReactComponent as Pokeball } from "../assets/pokeball.svg";

const Header = (props) => {
  console.log(props);
  const firstName = props.personLog.firstName;

  return (
    <Container fluid className="header">
      <Row className="justify-content-lg-center ">
        <Col lg={8}>
          <h1>welcome to pokedex creator</h1>
        </Col>
      </Row>
      <Row className="justify-content-lg-center">
        <Col md={4}>
          <p>create your own pokedex</p>
          {firstName ? <p>Welcome : {firstName} </p> : null}
          <Pokeball />
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
