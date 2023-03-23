import React, { useSate } from "react";
import "./App.css";
import { Home } from "./components/home/home";
import { Header } from "./components/header/header";
import { Todo } from "./components/todo/todo";
import { HashRouter, Routes, Route } from "react-router-dom";
import { TodoContext } from "./state/todo/todo-context";
import { todoReducer } from "./state/todo/todo.reducer";
import { useReducer } from "react";
import { Chat } from "./components/chat/chat";

function App() {
  const [todoState, todoDispatch] = useReducer(todoReducer, { todos: [] });
  return (
    <HashRouter>
      <Header />
      <TodoContext.Provider value={{ todoState, todoDispatch }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </TodoContext.Provider>
    </HashRouter>
  );
}

export default App;
