import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import { Sidebar } from "../../Components/Sidebar/sidebar";
import TabelaAlmoco from "../../Components/Tabelas/TabelaAlmoco";
import TabelaJanta from "../../Components/Tabelas/TabelaJanta";
import TabelaCafeManha from "../../Components/Tabelas/TabelaCafeManha";
import React from "react";
import axios from "axios";

export default class Home extends React.Component {
  endPoint = "http://localhost:8000/api";

  constructor() {
    super();
    this.state = {
      db: [],
      dbJanta: [],
      dbCafe: [],
    };
    this.showAlmoco();
  }

  showAlmoco = async () => {
    /*fetch("http://localhost/indexTwo.php")
        .then((response)=>response.json())
        .then((responseJson)=>{
        
            this.setState({
                db : responseJson
            })
        });
        const [almoco, setAlmoco] = useState( [] )
        useEffect ( ( ) => {
            this.getAlmoco()
        })*/
    const date = this.getDate();
    const responseAlmoco = await axios.get(
      `${this.endPoint}/almoco/date/${date}`
    );
    const responseJanta = await axios.get(
      `${this.endPoint}/janta/date/${date}`
    );
    const responseCafe = await axios.get(`${this.endPoint}/cafe/date/${date}`);

    console.log(responseAlmoco.data);
    console.log(date);

    this.setState({
      db: responseAlmoco.data,
      dbJanta: responseJanta.data,
      dbCafe: responseCafe.data,
    });
  };

  getAlmoco = async () => {
    const response = await axios.get(
      `${this.endPoint}/almoco/date/${this.getDate}`
    );
    console.log(response.data);
  };

  getDate() {
    const date = this.getCompleteDate().replaceAll("/", "-");
    console.log("data: " + date);
    const dataTeste = new Date();
    console.log(
      "data teste: " + dataTeste.toLocaleString("pt-br", { weekday: "long" })
    );
    return date;
  }

  getDataDay(data) {
    var dia = data.split("/")[0];
    var mes = data.split("/")[1];
    var ano = data.split("/")[2];
    const dataTeste = new Date(ano, mes - 1, dia);
    console.log(
      "data teste: " + dataTeste.toLocaleString("pt-br", { weekday: "long" })
    );
    return dataTeste.toLocaleString("pt-br", { weekday: "long" });
  }

  padLeadingZeros(num, size) {
    var s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
  }

  getCompleteDate() {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    return today.toLocaleDateString(); // "Sun Jan 30 2022"
  }

  render() {
    return (
      <div className="App">
        <div className="pai">
          <Sidebar btOn={"home"}></Sidebar>
          <div className="pai conteudo">
            <div className="containerLayout">
              <h1>Cardápio do dia</h1>
              <h3>
                {this.getDataDay(this.getCompleteDate())} -{" "}
                {this.getCompleteDate()}
              </h3>
              <Row>
                <Col>
                  <Row ml-0>
                    <div className="containerItem">
                      <div className="mark"></div>
                      <h4 className="text">Café da manhã</h4>
                    </div>
                  </Row>
                  <Row>
                    <TabelaCafeManha
                      arrayCafe={this.state.dbCafe}
                    ></TabelaCafeManha>
                  </Row>
                </Col>

                <Col>
                  <Row>
                    <div className="containerItem">
                      <div className="mark"></div>
                      <h4 className="text">Almoço</h4>
                    </div>
                  </Row>
                  <Row>
                    <TabelaAlmoco arrayAlmoco={this.state.db}></TabelaAlmoco>
                  </Row>
                </Col>

                <Col>
                  <Row>
                    <div className="containerItem">
                      <div className="mark"></div>
                      <h4 className="text">Janta</h4>
                    </div>
                  </Row>
                  <Row>
                    <TabelaJanta arrayJanta={this.state.dbJanta}></TabelaJanta>
                  </Row>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
