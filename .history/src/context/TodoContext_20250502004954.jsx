import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const urlAPI = "http://https://683a116143bb370a8671c066.mockapi.io/api/todos";
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
      console.log("New Todo Was Added Su");
    });
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
