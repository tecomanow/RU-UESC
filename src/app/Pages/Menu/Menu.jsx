import './styles.css';
import bootstrap from 'bootstrap'
import { Input } from "../../Components/Input";
import { Sidebar } from '../../Components/Sidebar/sidebar';
import { List } from '../../Components/List';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import ListItem from '../../Components/ListItem';
import DatePicker from 'react-date-picker';

export function Menu() {
  
    {/*const [value, onChange] = useState(new Date());*/}

    return (
<div className="App">
            <div className="pai">
                <Sidebar btOn={"admin"}></Sidebar>
                <div className="pai conteudo" >
                    <div className="container-xl">
                        <div className="table-responsive">
                            <div className="table-wrapper">
                                <div className="table-title">
                                    <Row>
                                        <Col>
                                            <h2>Adicionar novo cardápio</h2>
                                        </Col>
                                    </Row>
                                </div>
                                <Row>
                                    <Col>
                                        <span>Selecione a data</span>
                                    </Col>
                                    <Col>
                                        <DatePicker></DatePicker>
                                        {/*https://www.npmjs.com/package/react-date-picker*/}
                                    </Col>
                                </Row>
                                <table className="table table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th>Definas as refeições de acordo as opções </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                      <ListItem></ListItem>
                                        <a href="/admin" className="btn btn-success" data-toggle="modal">Salvar</a>
                                        <a href="/admin" className="btn btn-danger" data-toggle="modal">Cancelar</a>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
  }