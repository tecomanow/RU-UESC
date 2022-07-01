import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './AdminPage.css'
import { Sidebar } from '../../Components/Sidebar/sidebar';
import { useEffect, useState } from 'react';
import { Api } from '../../../infrastructure/Api';

export function AdminPage() {

    //lista estatica, falta organizar o conteudo na lista
    const [menu, setMenu] = useState([
        {
            id:"1",
            day:"Segunda", 
            date:"01/06",
        },
        {
            id:"2",
            day:"Terça", 
            date:"02/06",
        },
        {
            id:"3",
            day:"Quarta", 
            date:"03/06",
        }
    ])

    useEffect(() => {
        getAllMenus()
    })

    const getAllMenus = async ()=> {
        //CHAMADA API

        //const response = await Api.get("menu");
        //setMenu(response);
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

                                        {
                                            menu.map((menu) => (
                                                <tbody className="align-middle">

                                                <td><span><input type="checkbox" name="options[]" value="1"></input></span></td>
                                                <td>{menu.day}</td>
                                                <td>{menu.date}</td>
                                                <td className='py-2'>
                                                    <a href="/product/{menu.id}" className="btn btn-outline-success me-2">Editar</a>
                                                    <button onClick={()=> deleteMenu(menu.id)} className="btn btn-outline-danger" >Deletar</button>
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