import { Container, Form, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./AdminPage.css";
import { Sidebar } from "../../Components/Sidebar/sidebar";
import { useEffect, useState } from "react";
import FormDialog from "../../Components/UpdateForm";
import { Navigate } from "react-router-dom";
import axios from "axios";

export function AdminPage() {
  //lista estatica, falta organizar o conteudo na lista
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    getAllMenus();
  }, []);

  const getAllMenus = async () => {
    //CHAMADA API

    const response = await axios.get("http://127.0.0.1:8000/api/cardapios");
    setMenu(response.data);
  };

  const deleteMenu = async (id) => {
    await axios.delete(`http://127.0.0.1:8000/api/cardapio/${id}`);
    Navigate("/admin");
    console.log("deletado");
  };

  function getData(data) {
    var dia = data.split("-")[0];
    var mes = data.split("-")[1];
    var ano = data.split("-")[2];
    const dataTeste = new Date(ano, mes - 1, dia);
    console.log(
      "data teste: " + dataTeste.toLocaleString("pt-br", { weekday: "long" })
    );
    return dataTeste.toLocaleString("pt-br", { weekday: "long" });
  }

  return (
    <div className="App">
      <div className="pai">
        <Sidebar btOn={"admin"}></Sidebar>
        <div className="pai conteudo">
          <div className="container-xl">
            <div className="table-responsive">
              <div className="table-wrapper">
                <div className="table-title">
                  <Row>
                    <Col>
                      <h2>Cardápios</h2>
                    </Col>
                    <Col style={{ margin: "auto 0" }}>
                      {" "}
                      {/* Centralizando verticalmente */}
                      <a
                        href="/menu"
                        className="btn btn-success me-2"
                        data-toggle="modal"
                      >
                        Adicionar novo cardápio
                      </a>
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

                  {menu.map((menu) => (
                    <tbody className="align-middle">
                      <td>{getData(menu.data)}</td>
                      <td>{menu.data}</td>
                      <td className="align-middle">
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-evenly",
                          }}
                        >
                          <button
                            onClick={() => deleteMenu(menu.id)}
                            className="btn btn-outline-danger"
                          >
                            Deletar
                          </button>
                          <FormDialog id={menu.id}></FormDialog>
                        </div>
                      </td>
                    </tbody>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
