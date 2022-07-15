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

const ListItem = ({ name }) => {

  const formRef = useRef(null);

  const handleSubmit = async (data, { reset }) => {
    console.log(data);
    try {
      const schema = Yup.object().shape({
        day: Yup.object().shape({
        breakfast_main: Yup.string(),
        breakfast_juice: Yup.string(),
        breakfast_bread: Yup.string(),
        breakfast_fruit: Yup.string(),
        }),
        noon: Yup.object().shape({
          lunch_main: Yup.string(),
          lunch_juice: Yup.string(),
          lunch_salad: Yup.string(),
          lunch_side_dish: Yup.string(),
        }),
        night: Yup.object().shape({
        dinner_side_dish: Yup.string(),
        dinner_juice: Yup.string(),
        dinner_bread: Yup.string(),
        dinner_fruit: Yup.string(),
        }),
        date: Yup.string(),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
      formRef.current?.setErrors({});
      console.log(data);
      //userRepository.postToken(data);
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
      <Scope path="day">
              <Input name="breakfast_main" placeholder={"Principais"}/>
              <Input name="breakfast_juice" placeholder={"Suco"}/>
              <Input name="breakfast_bread" placeholder={"Pães"}/>
              <Input name="breakfast_fruit" placeholder={"Frutas"}/>

      </Scope>

            </div>


            <div style={{  display: 'flex',
  flexDirection: 'column', margin: 10}}>
    <h4 style={{textAlign: "center"}}>Almoço</h4>
    <Scope path="noon">
              <Input name="lunch_main" placeholder={"Principais"}/>
              <Input name="lunch_juice" placeholder={"Suco"}/>
              <Input name="lunch_salad" placeholder={"Salada"}/>
              <Input name="lunch_side_dish" placeholder={"Acompanhamento"}/>

    </Scope>
            </div>
            <div style={{  display: 'flex',
  flexDirection: 'column', margin: 10}}>
    <h4 style={{textAlign: "center"}}>Jantar</h4>
    <Scope path="night">
              <Input name="dinner_side_dish" placeholder={"Acompanhamento"}/>
              <Input name="dinner_juice" placeholder={"Suco"}/>
              <Input name="dinner_bread" placeholder={"Pães"}/>
              <Input name="dinner_fruit" placeholder={"Frutas"}/> 
    </Scope>
            </div>
            </div>
            <div style={{  display: 'flex',
   justifyContent: 'center'}}>
    <DatePickerInput name={"aqui"}>

    </DatePickerInput>
              <Button
                variant="contained"
                type="submit"
              >
               Enviar
              </Button>
              <a style={{  marginLeft: 20}} href="/admin" className="btn btn-danger" data-toggle="modal">Cancelar</a>
            </div>
          </Form>
        </Box>

    </>
  )
}


export default ListItem;