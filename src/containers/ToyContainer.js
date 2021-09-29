import ToyComponent from "../components/ToyComponent";
import { Container, Row, Col } from "react-bootstrap";

function ToyContainer({
  toys,
  addLike,
  deleteToy,
  updateToy,
  handleSubmitNameChange,
}) {
  return (
    <Container style={{ justifyContent: "space-around", alignItems: "center" }}>
      <Row md={3}>
        {toys.map((toy) => {
          //   console.log(toy);
          return (
            <Col
              key={toy.id}
              style={{
                padding: "5px",
                justifyContent: "space-around",
                textAlign: "-webkit-center",
              }}
            >
              <ToyComponent
                addLike={addLike}
                toy={toy}
                deleteToy={deleteToy}
                updateToy={updateToy}
                handleSubmitNameChange={handleSubmitNameChange}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default ToyContainer;
