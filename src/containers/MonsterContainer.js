import MonsterComponent from "../components/MonsterComponent";
import { Container, Row, Col } from "react-bootstrap";

function MonsterContainer({
  monsters,
  addLike,
  deleteMonster,
  updateMonster,
  handleSubmitNameChange,
}) {
  return (
    <Container style={{ justifyContent: "space-around", alignItems: "center" }}>
      <Row md={3}>
        {monsters.map((monster) => {
          //   console.log(monster);
          return (
            <Col
              key={monster.id}
              style={{
                padding: "5px",
                justifyContent: "space-around",
                textAlign: "-webkit-center",
              }}
            >
              <MonsterComponent
                addLike={addLike}
                monster={monster}
                deleteMonster={deleteMonster}
                updateMonster={updateMonster}
                handleSubmitNameChange={handleSubmitNameChange}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default MonsterContainer;
