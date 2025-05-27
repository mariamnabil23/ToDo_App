import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const TodoContext =  createContext();



export const TodoContextProvider =( {children} )=>{

    const [todos, setTodos] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3000/todos")
        .then((res)=>(
            console.log(res.data)
        ))
        .catch((error)=>(console.log("Error from Fetching ")))
    },[])
    
    const addTodo =(newTodo)=>{

    }
    const deleteTodo =(id)=>{
        setTodos(  todos.filter( (todo) => (todo.id !== id) )  )
    }

    const editTodoState =()=>{

    }

    const clearAllTodos =()=>{
        setTodos( null )
    }


    return <TodoContext.Provider  value={{todos}} >
        {children}
    </TodoContext.Provider>
}

