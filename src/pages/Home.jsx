import { Container, List } from "@mui/material";
import React from "react";
import Form from "../components/Form/Form";
import TodoItem from "../components/TodoItem/TodoItem";

export default function Home() {
  return (
    <Container maxWidth="xs" style={{ marginTop: "1em" }}>
      <Form />
      <List sx={{ bgcolor: "background.paper", marginTop: "1em" }}>
        <TodoItem />
      </List>
    </Container>
  );
}
