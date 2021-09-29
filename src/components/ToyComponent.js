import { Card, Button } from "react-bootstrap";
import { useState } from "react";
import ToyForm from "./ToyForm";

function ToyComponent({
  toy,
  addLike,
  deleteToy,
  updateToy,
  handleSubmitNameChange,
}) {
  const [formNameChange, setFormNameChange] = useState(false);
  let imgSrc = toy.image;
  let id = toy.id;
  const flipForm = () => {
    if (formNameChange == false) {
      setFormNameChange(true);
    } else {
      return setFormNameChange(false);
    }
  };
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
          onClick={() => deleteToy(id)}
          style={{ margin: "5px" }}
          variant="danger"
        >
          Delete
        </Button>
        <Button onClick={() => flipForm(true)}>Change Name</Button>
        {formNameChange ? (
          <div>
            <form onSubmit={handleSubmitNameChange(toy)}>
              <input
                onChange={(e) => updateToy(e)}
                type="text"
                defaultValue={toy.name}
                name="name"
              />
              <button type="submit">submit</button>
            </form>
          </div>
        ) : (
          () => setFormNameChange(false)
        )}
      </Card.Body>
    </Card>
  );
}

export default ToyComponent;
