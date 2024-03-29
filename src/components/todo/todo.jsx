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
import purple from "../../images/purple.jpg";
import { TodoContext } from "../../state/todo/todo-context";
import { TodoActions } from "../../state/todo/todo.reducer";

export const Todo = () => {
  const [input, setInput] = useState("");
  const { todoState, todoDispatch } = useContext(TodoContext);

  const onInput = (event) => {
    console.log(event.target.value);
    setInput(event.target.value);
  };

  const addTodo = () => {
    todoDispatch({
      type: TodoActions.ADD,
      todo: { title: input, isComplete: false },
    });
    setInput("");
  };

  const toggleChecked = (todo) => {
    todoDispatch({
      type: TodoActions.TOGGLE,
      todo,
    });
  };

  const deleteTodo = (todo) => {
    todoDispatch({
      type: TodoActions.DELETE,
      todo,
    });
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${purple})`,
          backgroundSize: "cover",
          minHeight: "100vh",
        }}
      >
        <br></br>
        <br></br>
        <Container
          component="main"
          maxWidth="sm"
          sx={{
            bgcolor: "#ede7f6",
            border: "5px solid grey",
            borderRadius: "20px",
            padding: "20px",
          }}
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
              InputLabelProps={{
                sx: {
                  color: "text.secondary",
                  "&.Mui-focused": { color: "purple" },
                },
              }}
              sx={{
                alignItems: "center",
                color: "purple",
                "& .MuiInput-underline:before": {
                  borderBottomColor: "purple",
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "purple",
                },
                "& .MuiInputBase-input": {
                  color: "purple",
                },
                "&:hover .MuiInput-underline:before": {
                  borderBottomColor: "purple",
                },
                "&.Mui-focused .MuiInput-underline:before": {
                  borderBottomColor: "purple",
                },
                "&.Mui-focused .MuiInput-underline:after": {
                  borderBottomColor: "purple",
                },
              }}
              style={{ alignItems: "center" }}
            />
            <AddIcon fontSize="large" onClick={addTodo} />
          </Box>
          {todoState.todos.map((todo) => (
            <p key={todo.title}>
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
