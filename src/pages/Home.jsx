import { Container, List } from "@mui/material";
import React, { useState } from "react";
import Form from "../components/Form/Form";
import TodoItem from "../components/TodoItem/TodoItem";

export default function Home() {
  //Array principal
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    //console.log(todo);
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    console.log(id);
    console.log(todos);
    var filtered = todos.filter((todo) => todo.id !== id); //Exclusão da Task através do ID
    console.log(filtered);
    setTodos(filtered); //Aqui o estado vai ser atuzalizado
  };

  const editTodo = (id, editedText) => {
    console.log(id);
    console.log(editedText);
    console.log(todos);

    var todosArray = [...todos];

    for (var i in todosArray) {
      if (todosArray[i].id === id) {
        todosArray[i].nameTask = editedText;
      }
    }

    // todosArray.splice(todosArray.id, 1, { text: editedText, id: id });
    // setTodos(todosArray);
  };

  return (
    <Container maxWidth="xs" style={{ marginTop: "1em" }}>
      <Form addTodo={addTodo} />
      <List sx={{ marginTop: "1em" }}>
        {todos.map((todo, key) => (
          <div key={todo.id} style={{ marginTop: "1em" }}>
            <TodoItem todo={todo} deleteTodo={deleteTodo} editTodo={editTodo} />
          </div>
        ))}
      </List>
    </Container>
  );
}
