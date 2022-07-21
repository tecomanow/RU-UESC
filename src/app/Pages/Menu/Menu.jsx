import "./styles.css";
import { Row, Col } from "react-bootstrap";
import ListItem from "../../Components/ListItem";

export function Menu() {
  return (
    <div className="App">
      <div className="table-title">
        <Row>
          <Col>
            <h2 style={{ textAlign: "center" }}>Adicionar novo cardápio</h2>
          </Col>
        </Row>
      </div>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <h3 style={{ textAlign: "center" }}>
              Definas as refeições de acordo as opções{" "}
            </h3>
          </tr>
        </thead>
        <tbody>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ListItem></ListItem>
          </div>
        </tbody>
      </table>
    </div>
  );
}
