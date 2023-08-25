import "./App.css";
import Header from "./header";
import Todos from "./Todos";
import Footer from "./Footer";
import Add from './Addtodo'
import About from './About'

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import React, { useState, useEffect } from 'react';

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todoItem) => {
    console.log("onDelete func", todoItem);
    setTodos(todos.filter((e) => e !== todoItem));
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };

    setTodos([...todos, myTodo]);

    console.log(myTodo);
  };

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <Router>
      <Header title="My Todo List hehe" searchBar={false} />
      <Routes>
        <Route
          exact path="/"
          element={
            <>
              <Add addTodo={addTodo} />
              <Todos todolist={todos} onDelete={onDelete} />
            </>
          }
        />
        <Route exact path="/About" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
