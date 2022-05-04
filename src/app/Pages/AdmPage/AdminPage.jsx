import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './AdminPage.css'
import { Sidebar } from '../../Components/Sidebar/sidebar';

export function AdminPage() {
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
                                            <h2>Cardápios</h2>
                                        </Col>
                                        <Col>
                                            <a href="/menu" className="btn btn-success" data-toggle="modal">Add novo cardápio</a>
                                            <a href="#" className="btn btn-danger" data-toggle="modal">Remover</a>
                                        </Col>
                                    </Row>
                                </div>
                                <table className="table table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th><span><input type="checkbox"></input></span></th>
                                            <th>Dia</th>
                                            <th>Data</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <td><span><input type="checkbox" name="options[]" value="1"></input></span></td>
                                        <td>Segunda-feira</td>
                                        <td>02/05/2022</td>
                                        <td>
                                            <a href="#" className="btn btn-success" >Editar</a>
                                            <a href="#" className="btn btn-danger" >Deletar</a>
                                        </td>
                                    </tbody>
                                    <tbody>
                                        <td><span><input type="checkbox" name="options[]" value="1"></input></span></td>
                                        <td>Terça-feira</td>
                                        <td>03/05/2022</td>
                                        <td>
                                            <a href="#" className="btn btn-success" >Editar</a>
                                            <a href="#" className="btn btn-danger" >Deletar</a>
                                        </td>
                                    </tbody>
                                    <tbody>
                                        <td><span><input type="checkbox" name="options[]" value="1"></input></span></td>
                                        <td>Quarta-feira</td>
                                        <td>04/05/2022</td>
                                        <td>
                                            <a href="#" className="btn btn-success" >Editar</a>
                                            <a href="#" className="btn btn-danger" >Deletar</a>
                                        </td>
                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}