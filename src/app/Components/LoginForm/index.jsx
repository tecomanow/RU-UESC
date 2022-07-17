import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import { useNavigate } from 'react-router-dom';
import { UserUseCase } from '../../../business/UseCases/UserUseCase';


export function LoginForm() {

    const navigate = useNavigate();
    
    endPoint = 'http://localhost:8000/api'

    const userUseCase = new UserUseCase()

     var handleSubmit = async () => {
      const response = await userUseCase.postUser("id")
      if(response == true){
        navigate("/admin")
      }else{
        //error
      }
    }

    return (
        <Form className="form-signin" onSubmit={() => navigate("/admin")}>

            <img class="mb-4" src="https://propp.uesc.br/propp/img/logo_uesc.png" alt="" width="72" height="82"></img>
                <h1 class="h3 mb-3 font-weight-normal">Entrar</h1>
                <label for="inputEmail" class="sr-only">Endereço de email</label>
                <input type="email" id="inputEmail" class="form-control" placeholder="Endereço de email" required="" autofocus=""></input>
                <label for="inputPassword" class="sr-only">Senha</label>
                <input type="password" id="inputPassword" class="form-control" placeholder="Senha" required=""></input>

                <button class="btn btn-lg btn-primary w-100" type="submit">Entrar</button>
                <i class="mt-4 mb-3 text-muted d-block">Ciência da Computação - 2022.1</i>
        </Form>
    );
}