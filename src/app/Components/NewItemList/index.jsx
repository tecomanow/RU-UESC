import React, { useState } from "react";

const NewItemInput = ({ onSubmit }) => {
  const [newItem, setNewItem] = useState("");

  function setNewTask({ target }) {
    setNewItem(target.value);
  }

  function submit(e) {
    e.preventDefault();
    onSubmit(newItem);
  }

  return (
    <div>
      <form onSubmit={submit}>
        <input className="Todo-input" placeholder="Digite uma nova tarefa" />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};

export default NewItemInput;
