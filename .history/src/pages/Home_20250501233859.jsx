import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

const {todos} = useContext(TodoContext);


const Home = () => {
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
          <tr>
            <th>{todo.id}</th>
            <td>{todo.title}</td>
            <td>{todo.createdAt}</td>
            <td></td>
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