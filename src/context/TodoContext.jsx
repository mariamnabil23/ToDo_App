import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import toast from "react-hot-toast";

export const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const { currentUser } = useContext(AuthContext);

  // fetch todos data
  const urlAPI = "http://https://683a116143bb370a8671c066.mockapi.io/api/todos";

  const fetchTodos = () => {
    if (currentUser?.id) {
      fetch(`${urlAPI}?userId=${currentUser.id}`)
        .then((res) => res.json())
        .then((data) => setTodos(data));
    }
  };

  useEffect(() => {
    fetchTodos();
  }, [currentUser?.id]);

  // ============================================ add todo ============================================
  const addTodo = (newTodo) => {
    const newTodoBelongCurrentUser = {
      ...newTodo,
      userId: currentUser.id,
    };

    axios
      .post(urlAPI, newTodoBelongCurrentUser)
      .then((res) => {
        console.log(res.data);
        console.log("New Todo Was Added Successfully! ✅");
        toast.success("Todo added successfully! ✅");

        fetchTodos();
      })
      .catch((error) => console.log("Failed To Add New Todo! ❌", error));
  };

  // ============================================ delete todo ============================================
  const deleteTodo = (id) => {
    console.log("Deleting todo with id:", id);
    axios
      .delete(`${urlAPI}/${id}`)
      .then((res) => {
        // setTodos(  todos.filter( (todo) => (todo.id !== id) )  )
        fetchTodos();
        console.log("Deleting todo with id:", id);
        toast.error("Todo deleted");
      })
      .catch((error) => console.log("Failed To Delete Todo! ❌", error));
  };

  // ============================================ edit todo title ============================================
  const editTodo = (id, title) => {
    console.log("editing..", title);

    axios
      .patch(`${urlAPI}/${id}`, { title: title })
      .then((res) => {
        console.log("Todo Title Edited ✅");
        toast.success("Edit Done!", {
          duration: 4000,
          position: "top-right",
          style: {
            background: "#0f766e",
            color: "#fff",
          },
          icon: "✅",
        });

        fetchTodos();
      })
      .catch((error) => console.log("Failed To Edit Todo Title ❌", error));
  };

  // ============================================ edit todo state ============================================
  const handleTodoState = (id, currentState) => {
    axios
      .patch(`${urlAPI}/${id}`, { completed: !currentState })
      .then((res) => {
        console.log("State Updated ✅");

        if (!currentState) {
          toast.success("Todo Completed! Congrats 🎉");
        } else {
          toast.error("Todo Uncompleted! Try Again 🤯");
        }

        fetchTodos();
      })
      .catch((error) => console.log("Failed To Update State ❌", error));
  };

  // ============================================ clear all todos ============================================
  const clearAllTodos = () => {
    setTodos([]);
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        deleteTodo,
        editTodo,
        handleTodoState,
        clearAllTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
