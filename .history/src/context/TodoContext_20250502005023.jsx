import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const urlAPI =
    "http://96cff1d7-dede-4d7f-9ebf-c8703c86a655-00-x054rodcv2up.picard.replit.dev:3000/todos";
  // fetch todos data
  useEffect(() => {
    axios
      .get(urlAPI)
      .then((res) => {
        console.log(res.data);
        setTodos(res.data);
      })
      .catch((error) => console.log("Error from Fetching Todos! ❌", error));
  }, []);

  // add todo
  const addTodo = (newTodo) => {
    axios.post(urlAPI, newTodo).then((res) => {
      console.log("New Todo Was Added Successfully! ✅");
    }).catch;
  };

  // delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // edit todo state
  const editTodoState = () => {};

  // clear all todos
  const clearAllTodos = () => {
    setTodos(null);
  };

  return (
    <TodoContext.Provider value={{ todos }}>{children}</TodoContext.Provider>
  );
};
