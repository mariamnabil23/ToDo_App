import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const TodoContext =  createContext();



export const TodoContextProvider =( {children} )=>{

    const [todos, setTodos] = useState([]);

    const 
    // fetch todos data
    useEffect(()=>{
        axios.get("http://localhost:3000/todos")
        .then((res)=>{
            console.log(res.data);
            setTodos(res.data);
        })
        .catch((error)=>(console.log("Error from Fetching Todos! ❌", error)))
    },[])
    

    // add todo
    const addTodo =(newTodo)=>{
        axios.post("")

    }

    // delete todo
    const deleteTodo =(id)=>{
        setTodos(  todos.filter( (todo) => (todo.id !== id) )  )
    }

    // edit todo state
    const editTodoState =()=>{

    }

    // clear all todos
    const clearAllTodos =()=>{
        setTodos( null )
    }


    return <TodoContext.Provider  value={{todos}} >
        {children}
    </TodoContext.Provider>
}

