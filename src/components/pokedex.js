import { Button, Card } from "react-bootstrap";

const Pokedex = (props) => {
  //   console.log(props, "POKEDEX");

  return (
    <div>
      <Card style={{ width: "18rem", marginTop: "30%" }}>
        <Card.Title>{props.pokemon}</Card.Title>
        <Button onClick={() => props.handleDelete(props.pokemon)}>X</Button>
      </Card>
    </div>
  );
};

export default Pokedex;
