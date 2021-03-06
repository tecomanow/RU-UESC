import React, { useRef, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, Button } from "@mui/material";
import { Scope } from "@unform/core";
import { Form } from "@unform/web";
import { Input } from "../Input";
import * as Yup from "yup";
import axios from "axios";

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);
  console.log(props.id);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const formRef = useRef(null);

  useEffect(() => {
    const getProductById = async () => {
      const response = await axios.get(
        `http://localhost:8000/api/cardapio/${props.id}`
      );
      formRef.current?.setData({
        cardapio: {
          cafe: {
            principal: response.data.cardapio.cafe.principal,
            paes: response.data.cardapio.cafe.paes,
            frutas: response.data.cardapio.cafe.frutas,
            sucos: response.data.cardapio.cafe.sucos,
            data: response.data.cardapio.cafe.data,
          },
          almoco: {
            proteinas: response.data.cardapio.almoco.proteinas,
            saladas: response.data.cardapio.almoco.saladas,
            complementos: response.data.cardapio.almoco.complementos,
            sucos: response.data.cardapio.almoco.sucos,
            data: response.data.cardapio.almoco.data,
          },
          janta: {
            principal: response.data.cardapio.janta.principal,
            paes: response.data.cardapio.janta.paes,
            frutas: response.data.cardapio.janta.frutas,
            sucos: response.data.cardapio.janta.sucos,
            data: response.data.cardapio.janta.data,
          },
        },
      });
    };
    getProductById();
  });

  const handleSubmit = async (data, { reset }) => {
    console.log(data);

    try {
      const schema = Yup.object().shape({
        cardapio: Yup.object().shape({
          cafe: Yup.object().shape({
            principal: Yup.string(),
            paes: Yup.string(),
            frutas: Yup.string(),
            sucos: Yup.string(),
            data: Yup.string(),
          }),
          almo??o: Yup.object().shape({
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
        }),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
      formRef.current?.setErrors({});
      data.id = props.id;
      console.log(data);

      await axios.put(`http://localhost:8000/api/cardapio/${props.id}`, data);
      handleClose();
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
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Alterar
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth="true" maxWidth="md">
        <DialogTitle>Atualizar</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Preencha os campos para atualizar o card??pio:
          </DialogContentText>
          <Box
            sx={{
              "& > :not(style)": { m: 5, width: "90ch" },
            }}
          >
            <Form ref={formRef} onSubmit={handleSubmit}>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Scope path="cardapio">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      margin: 10,
                    }}
                  >
                    <h4 style={{ textAlign: "center" }}>Caf?? da manh??</h4>
                    <Scope path="cafe">
                      <Input name="principal" placeholder={"Principais"} />
                      <Input name="paes" placeholder={"Paes"} />
                      <Input name="frutas" placeholder={"Frutas"} />
                      <Input name="sucos" placeholder={"Sucos"} />
                    </Scope>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      margin: 10,
                    }}
                  >
                    <h4 style={{ textAlign: "center" }}>Almo??o</h4>
                    <Scope path="almoco">
                      <Input name="proteinas" placeholder={"Proteinas"} />
                      <Input name="saladas" placeholder={"Saladas"} />
                      <Input name="complementos" placeholder={"Complementos"} />
                      <Input name="sucos" placeholder={"Sucos"} />
                    </Scope>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      margin: 10,
                    }}
                  >
                    <h4 style={{ textAlign: "center" }}>Jantar</h4>
                    <Scope path="janta">
                      <Input name="principal" placeholder={"Principais"} />
                      <Input name="paes" placeholder={"Paes"} />
                      <Input name="frutas" placeholder={"Frutas"} />
                      <Input name="sucos" placeholder={"Sucos"} />
                    </Scope>
                  </div>
                </Scope>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button variant="contained" type="submit">
                  Enviar
                </Button>
                <a
                  style={{ marginLeft: 20 }}
                  onClick={handleClose()}
                  className="btn btn-danger"
                  data-toggle="modal"
                >
                  CANCELAR
                </a>
              </div>
            </Form>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
}
