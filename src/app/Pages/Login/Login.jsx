import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './Login.css';
import { Sidebar } from '../../Components/Sidebar/sidebar';
import '../../Components/Sidebar/sidebar.css'


export function LoginPage() {
    return (
        <div className="App">
            <div className="pai">
                <Sidebar></Sidebar>
                <div className="pai conteudo" >
                    <Container className="mt-5">
                        <Row >
                            <Col lg={12} md={12} sm={12}>
                                <Form className="form-signin">

                                    <img class="mb-4" src="https://propp.uesc.br/propp/img/logo_uesc.png" alt="" width="72" height="82"></img>
                                    <h1 class="h3 mb-3 font-weight-normal">Entrar</h1>
                                    <label for="inputEmail" class="sr-only">Endereço de email</label>
                                    <input type="email" id="inputEmail" class="form-control" placeholder="Endereço de email" required="" autofocus=""></input>
                                    <label for="inputPassword" class="sr-only">Senha</label>
                                    <input type="password" id="inputPassword" class="form-control" placeholder="Senha" required=""></input>

                                    <button class="btn btn-lg btn-primary w-100" type="submit">Entrar</button>
                                    <p class="mt-5 mb-3 text-muted">Ciência da Computação - 2022.1</p>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
}