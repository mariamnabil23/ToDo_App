import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://96cff1d7-dede-4d7f-9ebf-c8703c86a655-00-x054rodcv2up.picard.replit.dev:3000/todos"
      )
      .then((res) => {
        console.log(res.data);
        setTodos(res.data);
      })
      .catch((error) => console.log("Error from Fetching Todos! ❌", error));
  }, []);

  // add todo
  const addTodo = (newTodo) => {};

  // delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // edit
  const editTodoState = () => {};

  const clearAllTodos = () => {
    setTodos(null);
  };

  return (
    <TodoContext.Provider value={{ todos }}>{children}</TodoContext.Provider>
  );
};
