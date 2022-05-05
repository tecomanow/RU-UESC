import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';
import { Sidebar } from '../../Components/Sidebar/sidebar';
import { List } from '../../Components/List';
import { Link } from 'react-router-dom';


export function Home() {
    return (
        <div className="App">
            <div className="pai">
                <Sidebar btOn={"home"}></Sidebar>
                <div className="pai conteudo" >
                    <div className='containerLayout'>
                        <h1>Cardápio do dia</h1>
                        <h3>Qui, 04 de maio de 2022</h3>

                        <div className='containerMenu'>
                            <div className='containerItem'>
                                <div className='mark'></div>
                                <h4 className='text'>Café da manhã</h4>
                            </div>
                            <div className='containerItem'>
                                <div className='mark'></div>
                                <h4 className='text'>Almoço</h4>
                            </div>
                            <div className='containerItem'>
                                <div className='mark'></div>
                                <h4  className='text'>Janta</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}