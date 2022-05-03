import './styles.css';
import bootstrap from 'bootstrap'
import { Input } from "../../Components/Input";
import { Sidebar } from '../../Components/Sidebar/sidebar';
import { List } from '../../Components/List';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import ListItem from '../../Components/ListItem';

export function Menu() {
  
    return (
<div className="App">
            <div className="pai">
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