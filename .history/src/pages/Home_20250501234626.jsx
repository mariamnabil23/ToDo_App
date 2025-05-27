import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'




const Home = () => {

  const {todos} = useContext(TodoContext);

  return (
    <>
    <h1 className='text-center text-xl' >All Your Todos</h1>
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>No.</th>
            <th>Title</th>
            <th>created At</th>
            <th>completed</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            todos.map((todo)=>(
              <tr  key={todo.id}>
                <th>{todo.id}</th>
                <td>{todo.title}</td>
                <td>{todo.createdAt}</td>
                <td> <input type='checkbox' />  </td>
                <td>
                  <button  className='btn btn-success' >Edit</button>
                  <button  className='btn btn-error  ml-5'>Delete</button>
                </td>
              </tr>
            ))
          }
          
        </tbody>
      </table>
    </div>
    
    </>
  )
}

export default Home