import React, { useState } from "react";
import "./Form.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

export default function Form({ addTodo }) {
  const [nameTask, setNameTask] = useState(null);
  const [id, setId] = useState(0);

  const todoCreate = (nameTask) => {
    const todoObject = {
      nameTask: nameTask,
      id: id,
    };
    setId(id + 1); //Aqui o "id" vai ser incrementado
    addTodo(todoObject); //Aqui o objeto vai ser enviado
    document.getElementById("outlined-basic").value = null; //Limpar o input após a criação de nova Task
  };

  return (
    <div className="caixaTexto">
      <Paper style={{ padding: "1em" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <TextField
            id="outlined-basic"
            label="Informe a Task"
            onChange={(valor) => setNameTask(valor.target.value)}
            variant="outlined"
            fullWidth
            style={{ paddingRight: "1em" }}
          />
          <Button variant="contained" onClick={() => todoCreate(nameTask)}>
            ADD
          </Button>
        </div>
      </Paper>
    </div>
  );
}
