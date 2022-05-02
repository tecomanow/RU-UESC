import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';
import { Sidebar } from '../../Components/SideBar/sidebar';
import { List } from '../../Components/List';
import { Link } from 'react-router-dom';


export function Home2() {
    return (
        <div className="App">
            <div className="pai">
                <Sidebar btOn={"home"}></Sidebar>
                <div className="pai conteudo" >
                    <Container className="mt-5">
                        <Row >
                            <Col lg={12} md={12} sm={12}>
                                <div className='form-signin'>
                                    <List></List>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
}