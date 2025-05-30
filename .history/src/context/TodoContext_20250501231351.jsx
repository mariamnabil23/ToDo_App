import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const TodoContext =  createContext();



export const TodoContextProvider =( {children} )=>{

    const [todos, setTodos] = useState([]);

    useEffect(()=>{
        axios.get("http://https://683a116143bb370a8671c066.mockapi.io/api/todos")
        .then((res)=>(
            
        ))
        .catch((error)=>(console.log("Error from Fetching Todos! ❌", error)))
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

