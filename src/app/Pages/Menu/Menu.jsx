import './styles.css';
import bootstrap from 'bootstrap'
import { Input } from "../../Components/Input";
import { Sidebar } from '../../Components/Sidebar/sidebar';
import { List } from '../../Components/List';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import ListItem from '../../Components/ListItem';
import DatePicker from 'react-date-picker';

export function Menu() {

    {/*const [value, onChange] = useState(new Date());*/ }


    return (
        <div className="App">

                                <div className="table-title">
                                    <Row>
                                        <Col>
                                            <h2 style={{textAlign: "center"}}>Adicionar novo cardápio</h2>
                                        </Col>
                                    </Row>
                                </div>
                                <table className="table table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <h3 style={{textAlign: "center"}}>Definas as refeições de acordo as opções </h3>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <div style={{display: "flex", justifyContent: "center"}}>
                                            <ListItem></ListItem>
                                        </div>
                                    </tbody>
                                </table>

          
        </div>

    );
}