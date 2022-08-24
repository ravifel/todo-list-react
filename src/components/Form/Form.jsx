import React from "react";
import "./Form.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

export default function Form() {
  return (
    <div className="caixaTexto">
      <Paper style={{ padding: "1em" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <TextField
            id="outlined-basic"
            label="Informe a Task"
            variant="outlined"
            fullWidth
            style={{ paddingRight: "1em" }}
          />
          <Button variant="contained">ADD</Button>
        </div>
      </Paper>
    </div>
  );
}
