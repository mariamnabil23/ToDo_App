import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("https://683a116143bb370a8671c066.mockapi.io/api/todos")
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
