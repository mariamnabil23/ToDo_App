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
    <button  className='btn btn-primary  mt-5 float-right'  onClick={()=>document.getElementById('add_todo_modal').showModal()}>Add New Todo</button>

    <dialog id="add_todo_modal" className="modal">
    <h3 className="font-bold text-lg">Add New Todo</h3>
        
        <form method="dialog  flex flex-col items-center justify-between w-full bg-sky-100">

            <label>Title : </label>
            <input type='text' />
            <div>
              <button className="btn btn-error">Cancel</button>
              <button className="btn btn-primary">Add</button>
            </div>

          </form>
    </dialog>
    </>
  )
}

export default Home