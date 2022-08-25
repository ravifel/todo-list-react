import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Paper } from "@mui/material";
import EditTodoDialog from "../EditTodoDialog/EditTodoDialog";

export default function TodoItem({ todo, deleteTodo, editTodo }) {
  const [openEditDialog, setOpenEditDialog] = React.useState(false);

  const dialogHandler = () => {
    setOpenEditDialog(!openEditDialog);
    //inverter o value do EditTodoDialog
  };

  return (
    <>
      <EditTodoDialog
        editTodo={editTodo}
        open={openEditDialog}
        dialogHandler={dialogHandler}
        todo={todo}
      />
      <Paper style={{ padding: "0.5em 0em" }}>
        <ListItem
          secondaryAction={
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => deleteTodo(todo.id)}
            >
              <DeleteIcon />
            </IconButton>
          }
          disablePadding
        >
          <ListItemButton role={undefined} dense>
            <ListItemIcon>
              <Checkbox edge="start" tabIndex={-1} disableRipple />
            </ListItemIcon>
            <ListItemText
              primary={todo.nameTask}
              onClick={() => setOpenEditDialog(true)}
            />
          </ListItemButton>
        </ListItem>
      </Paper>
    </>
  );
}
