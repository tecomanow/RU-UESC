import React, { useState } from "react";
import ListItem from "../ListItem";
import NewItemInput from "../NewItemList";
import "./styles.css";

export const List = () => {
  return (
    <div className="container">
      <div className="containerList">
        <h1 className="tittle">Cardápio da semana:</h1>
        <div className="day-container">
          <ListItem name={"Segunda"} />
          <ListItem name={"Terça"} />
          <ListItem name={"Quarta"} />
          <ListItem name={"Quinta"} />
          <ListItem name={"Sexta"} />
          <ListItem name={"Sábado"} />
        </div>
      </div>
    </div>
  );
};
