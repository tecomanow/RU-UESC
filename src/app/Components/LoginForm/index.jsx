import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import { UserUseCase } from '../../../business/UseCases/UserUseCase';
import { useState } from 'react';
import { ValidationError } from 'yup';

export function LoginForm() {

    const navigate = useNavigate();
    const [valorEmail, setValorEmail] = useState("");
    const [valorSenha, setValorSenha] = useState("");


    var handleChangeEmail = (event) => {
      setValorEmail(event.target.value);
    }
    var handleChangeSenha = (event) => {
      setValorSenha(event.target.value);
    }

     var handleSubmit = async () => {
      
      const user = {usuario: {
        email: valorEmail,
        senha: valorSenha,
      }
    }
      console.log(user)
      const response = await axios.post('http://127.0.0.1:8000/api/entrar', user);
      const permissao = response.data.permissao
      console.log(permissao)
      if(permissao == true){
        navigate("/admin")
      }
    }

    return (
        <Form className="form-signin" onSubmit={handleSubmit}>

            <img class="mb-4" src="https://propp.uesc.br/propp/img/logo_uesc.png" alt="" width="72" height="82"></img>
                <h1 class="h3 mb-3 font-weight-normal">Entrar</h1>
                <label for="inputEmail" class="sr-only">Endereço de email</label>
                <input type="email" id="inputEmail" class="form-control" placeholder="Endereço de email" required="" autofocus="" value={valorEmail} onChange={handleChangeEmail}></input>
                <label for="inputPassword" class="sr-only">Senha</label>
                <input type="password" id="inputPassword" class="form-control" placeholder="Senha" required="" value={valorSenha} onChange={handleChangeSenha}></input>

                <button class="btn btn-lg btn-primary w-100" type="submit">Entrar</button>
                <i class="mt-4 mb-3 text-muted d-block">Ciência da Computação - 2022.1</i>
        </Form>
    );
}