import React, { useState, useContext } from "react";
import "./todo.css";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import Checkbox from "@mui/material/Checkbox";
import { Divider } from "@mui/material";
import purple from "../../images/purple.jpg"; // gives image path;
import { TodoContext } from "../../state/todo/todo-context";
import { TodoActions } from "../../state/todo/todo.reducer";

export const Todo = () => {
  const [input, setInput] = useState("");
  //const [todos, setTodos] = useState([]);
  const { todoState, todoDispatch } = useContext(TodoContext);

  const onInput = (event) => {
    console.log(event.target.value);
    setInput(event.target.value);
  };

  const addTodo = () => {
    //setTodos([...todos, { title: input, isComplete: false }]);
    todoDispatch({
      type: TodoActions.ADD,
      todo: { title: input, isComplete: false },
    });
    setInput("");
  };

  const toggleChecked = (todo) => {
    //const newTodos = [...todos];
    //const updatedTodo = newTodos.find((x) => x.title === todo.title);
    //updatedTodo.isComplete = !todo.isComplete;
    //setTodos(newTodos);
    todoDispatch({
      type: TodoActions.TOGGLE,
      todo,
    });
  };

  const deleteTodo = (todo) => {
    //const index = todos.indexOf(todo);
    //const newTodos = [...todos];
    //if (index !== -1) {
    //setTodos([
    // ...newTodos.slice(0, index),
    // ...newTodos.slice(index + 1, newTodos.length),
    //]);
    // }
    todoDispatch({
      type: TodoActions.DELETE,
      todo,
    });
  };

  return (
    <>
      <div className="page" style={{ backgroundImage: "url(" + purple + ")" }}>
        <Container
          component="main"
          maxWidth="sm"
          sx={{ bgcolor: "#ede7f6", border: "5px grey", height: "1000px" }}
          style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}
        >
          <Typography
            className="Todo"
            component="h1"
            variant="h4"
            align="center"
            sx={{
              color: "purple",
              fontFamily: "fantasy",
              textDecoration: "underline",
            }}
          >
            <br />
            Todos:
            <br />
          </Typography>
          <br />
          <Box align="center" sx={{ fontSize: "12px", fontFamily: "fantasy" }}>
            <TextField
              align="center"
              onInput={onInput}
              value={input}
              id="standard-basic"
              label="Your Todo Item"
              variant="standard"
              sx={{ alignItems: "center", color: "purple" }}
              style={{ alignItems: "center" }}
            />
            <AddIcon fontSize="large" onClick={addTodo} />
          </Box>
          {todoState.todos.map((todo) => (
            <p key={todo.tile}>
              <Checkbox
                color="success"
                checked={todo.isComplete}
                onClick={() => toggleChecked(todo)}
              />
              {todo.title}
              <DeleteIcon
                style={{ float: "right" }}
                sx={{ color: "red" }}
                fontSize="large"
                onClick={() => deleteTodo(todo)}
              />
              <Divider />
            </p>
          ))}
        </Container>
      </div>
    </>
  );
};
