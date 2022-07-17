import React, { useEffect, useRef, useState } from "react";
import { Box, Button, Modal, Typography, TextField } from '@mui/material';
//import { Form } from 'react-bootstrap';
import { FormHandles, SubmitHandler, Scope } from "@unform/core";
import { Form } from "@unform/web";
import './styles.css';
import { margin } from '@mui/system';
import { Input } from '../Input';
import * as Yup from "yup";
import DatePickerInput from "../DatePicker";
import Select from "../Select";
import axios from 'axios';

const ListItem = ({ name }) => {

  const formRef = useRef(null);

  const handleSubmit = async (data, { reset }) => {
    console.log(data);
    try {
      const schema = Yup.object().shape({
        cafe: Yup.object().shape({
        principal: Yup.string(),
        paes: Yup.string(),
        frutas: Yup.string(),
        sucos: Yup.string(),
        data: Yup.string(),
        }),
        almoço: Yup.object().shape({
          proteinas: Yup.string(),
          saladas: Yup.string(),
          complementos: Yup.string(),
          sucos: Yup.string(),
          data: Yup.string(),
        }),
        janta: Yup.object().shape({
          principal: Yup.string(),
          paes: Yup.string(),
          frutas: Yup.string(),
          sucos: Yup.string(),
          data: Yup.string(),
        }),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
      formRef.current?.setErrors({});
      console.log(data);

      await axios.post(`http://localhost:8000/api/cardapios`, data);

    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        let errorMessages = {};
        err.inner.forEach((error) => {
            errorMessages[error.path] = error.message;
          
        });

        formRef.current?.setErrors(errorMessages);
      }
    }
  };

  return (
    <>
            <Box
      sx={{
        '& > :not(style)': { m: 5, width: '90ch' },
      }}>
      <Form
        ref={formRef}
        onSubmit={handleSubmit}>
                      <div style={{  display: 'flex',
  flexDirection: 'row'}}>
                        
             
            <div style={{  display: 'flex',
  flexDirection: 'column', margin: 10}}>
    <h4 style={{textAlign: "center"}}>Café da manhã</h4>
      <Scope path="cafe">
      <Input name="principal" placeholder={"Principais"}/>
      <Input name="paes" placeholder={"Paes"}/>
      <Input name="frutas" placeholder={"Frutas"}/>
      <Input name="sucos" placeholder={"Sucos"}/>
      <Input name="data" placeholder={"Data"}/>
      </Scope>

            </div>


            <div style={{  display: 'flex',
  flexDirection: 'column', margin: 10}}>
    <h4 style={{textAlign: "center"}}>Almoço</h4>
    <Scope path="almoco">
    <Input name="proteinas" placeholder={"Proteinas"}/>
              <Input name="saladas" placeholder={"Saladas"}/>
              <Input name="complementos" placeholder={"Complementos"}/>
              <Input name="sucos" placeholder={"Sucos"}/>
              <Input name="data" placeholder={"Data"}/>

    </Scope>
            </div>
            <div style={{  display: 'flex',
  flexDirection: 'column', margin: 10}}>
    <h4 style={{textAlign: "center"}}>Jantar</h4>
    <Scope path="janta">
      <Input name="principal" placeholder={"Principais"}/>
      <Input name="paes" placeholder={"Paes"}/>
      <Input name="frutas" placeholder={"Frutas"}/>
      <Input name="sucos" placeholder={"Sucos"}/>
      <Input name="data" placeholder={"Data"}/>
     </Scope>
    
            </div>
            </div>
            <div style={{  display: 'flex',
   justifyContent: 'center'}}>
              <Button
                variant="contained"
                type="submit"
              >
               Enviar
              </Button>
              <a style={{  marginLeft: 20}} href="/admin" className="btn btn-danger" data-toggle="modal">CANCELAR</a>
            </div>
          </Form>
        </Box>

    </>
  )
}


export default ListItem;