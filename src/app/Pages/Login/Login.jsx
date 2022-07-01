import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './Login.css';
import { Sidebar } from '../../Components/Sidebar/sidebar';
import '../../Components/Sidebar/sidebar.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { LoginForm } from '../../Components/LoginForm';


export function LoginPage() {

    const navigate = useNavigate();


    return (
        <div className="App">
            <div className="pai">
                <Sidebar btOn={"login"}></Sidebar>
                <div className="pai conteudo" >
                    <Container className="mt-5">
                        <Row >
                            <Col lg={12} md={12} sm={12}>
                                <LoginForm>
                                </LoginForm>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
}