import ToyComponent from "../components/ToyComponent";
import { Container, Row, Col } from "react-bootstrap";

function ToyContainer({ toys, addLike, deleteToy }) {
  return (
    <Container style={{ justifyContent: "space-around", alignItems: "center" }}>
      <Row md={3}>
        {toys.map((toy) => {
          //   console.log(toy);
          return (
            <Col
              style={{
                padding: "5px",
                justifyContent: "space-around",
                textAlign: "-webkit-center",
              }}
            >
              <ToyComponent addLike={addLike} toy={toy} deleteToy={deleteToy}/>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default ToyContainer;
