import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import "./EditTodoDialog.css";
import { TextField } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EditTodoDialog({
  open,
  dialogHandler,
  todo,
  editTodo,
}) {
  const [editedText, setEditedText] = React.useState(todo.nameTask);

  const textHandler = () => {
    //vai pegar um novo valor que foi digitado para edição
    editTodo(todo.id, editedText);
    dialogHandler();
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={dialogHandler}
      aria-describedby="alert-dialog-slide-description"
      fullWidth
    >
      <DialogTitle>{"Edição de Task"}</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          defaultValue={editedText}
          onChange={(e) => setEditedText(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" color="error" onClick={dialogHandler}>
          Cancelar
        </Button>
        <Button variant="contained" color="success" onClick={textHandler}>
          Concluir
        </Button>
      </DialogActions>
    </Dialog>
  );
}
