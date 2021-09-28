import { Card, Button } from "react-bootstrap";

function ToyComponent({ toy, addLike, deleteToy }) {
  let imgSrc = toy.image;
  let id = toy.id;
  return (
    <Card style={{ width: "15rem" }}>
      {{ imgSrc } ? (
        <Card.Img
          style={{
            justifySelf: "center",
            height: "12rem",
            width: "auto",
          }}
          variant="top"
          src={imgSrc}
          alt="no image"
        />
      ) : null}
      <Card.Body>
        <Card.Title>{toy.name}</Card.Title>

        <Button onClick={() => addLike(toy)} variant="primary">
          Likes: {toy.likes}
        </Button>
        <Button
          onClick={() => deleteToy()}
          style={{ margin: "5px" }}
          variant="danger"
        >
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ToyComponent;
