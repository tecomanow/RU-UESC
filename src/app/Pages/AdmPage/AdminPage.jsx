import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './AdminPage.css'
import { Sidebar } from '../../Components/Sidebar/sidebar';
import { useEffect, useState } from 'react';
import { Api } from '../../../infrastructure/Api';
import FormDialog from '../../Components/UpdateForm';

export function AdminPage() {

    //lista estatica, falta organizar o conteudo na lista
    const [menu, setMenu] = useState([])

    useEffect(() => {
        getAllMenus()
    })

    const getAllMenus = async ()=> {
        //CHAMADA API

        const response = await Api.get("http://127.0.0.1:8000/api/cardapios");
        setMenu(response.data);
    }

    const deleteMenu = async ()=> {
        //await Api.delete(`menu/${id}`)
        console.log("deletado");
    }

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
                                
                                        </Col>
                                    </Row>
                                </div>
                                <table className="table table-striped table-hover">
                                    <thead>
                                        <tr>
                                            
                                            <th>Dia</th>
                                            <th>Data</th>
                                            
                                        </tr>
                                    </thead>

                                        {
                                            menu.map((menu) => (
                                                <tbody className="align-middle">

                                                
                                                <td>{"Teste"}</td>
                                                <td>{menu.created_at}</td>
                                                <td className="align-middle">
                                                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
                                                        <button onClick={()=> deleteMenu(menu.id)} className="btn btn-outline-danger" >Deletar</button>
                                                        <FormDialog></FormDialog>
                                                    </div>
                                                </td>
                                                </tbody>
                                            ))
                                        }
                                    
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}