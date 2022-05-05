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
                                        <Col style={{ margin: "auto 0" }}> {/* Centralizando verticalmente */}
                                            <a href="/menu" className="btn btn-success me-2" data-toggle="modal">Adicionar novo cardápio</a>
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
                                    <tbody className="align-middle">
                                        <td><span><input type="checkbox" name="options[]" value="1"></input></span></td>
                                        <td>Segunda-feira</td>
                                        <td>02/05/2022</td>
                                        <td className='py-2'>
                                            <a href="#" className="btn btn-outline-success me-2">Editar</a>
                                            <a href="#" className="btn btn-outline-danger" >Deletar</a>
                                        </td>
                                    </tbody>
                                    <tbody className="align-middle">
                                        <td><span><input type="checkbox" name="options[]" value="1"></input></span></td>
                                        <td>Terça-feira</td>
                                        <td>03/05/2022</td>
                                        <td className='py-2'>
                                            <a href="#" className="btn btn-outline-success me-2" >Editar</a>
                                            <a href="#" className="btn btn-outline-danger" >Deletar</a>
                                        </td>
                                    </tbody>
                                    <tbody className="align-middle">
                                        <td><span><input type="checkbox" name="options[]" value="1"></input></span></td>
                                        <td>Quarta-feira</td>
                                        <td>04/05/2022</td>
                                        <td className='py-2'>
                                            <a href="#" className="btn btn-outline-success me-2" >Editar</a>
                                            <a href="#" className="btn btn-outline-danger" >Deletar</a>
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