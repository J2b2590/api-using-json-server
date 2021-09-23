import { Card, Button } from "react-bootstrap";

function ToyComponent({ toy, addLike }) {
  let imgSrc = toy.image;
  let id = toy.id;
  return (
    <Card style={{ width: "15rem" }}>
      <Card.Img
        style={{
          justifySelf: "center",
          height: "12rem",
          width: "auto",
        }}
        variant="top"
        src={imgSrc}
      />
      <Card.Body>
        <Card.Title>{toy.name}</Card.Title>

        <Button onClick={() => addLike(toy)} variant="primary">
          Likes: {toy.likes}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ToyComponent;
