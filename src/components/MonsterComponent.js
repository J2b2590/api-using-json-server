import { Card, Button } from "react-bootstrap";
import { useState } from "react";

function MonsterComponent({
  monster,
  addLike,
  deleteMonster,
  updateMonster,
  handleSubmitNameChange,
}) {
  const [formNameChange, setFormNameChange] = useState(false);
  let imgSrc = monster.image;
  let id = monster.id;
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
        <Card.Title>{monster.name}</Card.Title>

        <Button onClick={() => addLike(monster)} variant="primary">
          Likes: {monster.likes}
        </Button>
        <Button
          onClick={() => deleteMonster(id)}
          style={{ margin: "5px" }}
          variant="danger"
        >
          Delete
        </Button>
        <Button onClick={() => flipForm(true)}>Change Name</Button>
        {formNameChange ? (
          <div>
            <form onSubmit={handleSubmitNameChange(monster)}>
              <input
                onChange={(e) => updateMonster(e)}
                type="text"
                defaultValue={monster.name}
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

export default MonsterComponent;
