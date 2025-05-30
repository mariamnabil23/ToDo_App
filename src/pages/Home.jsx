import React, { useContext, useState, useRef } from 'react'
import { TodoContext } from '../context/TodoContext'
import { AuthContext } from '../context/AuthContext';
import {v4 as uuid} from 'uuid'



const Home = () => {

  const {allUsers, currentUser, handleLogin, handleLogout, sendCompletedTodos} = useContext(AuthContext)
  

  const {todos, addTodo, deleteTodo, editTodo, handleTodoState, clearAllTodos} = useContext(TodoContext);
  const [newTodo, setNewTodo] = useState({
    "title": "",
  });
  const [todoToDelete, setTodoToDelete] = useState(null);
  const [todoToEdit, setTodoToEdit] = useState(null);
  const [todoToEditTitle, setTodoToEditTitle] = useState("");



  /* *************************************** users ************************************ */
  

  

  /* *************************************** todos ************************************ */
  // delete single todo
  const handleDeleteTodos =()=>{
    if (todoToDelete) {
      deleteTodo(todoToDelete);
      setTodoToDelete(null);
    }
  }

  // ============================================ add new todo ============================================
  const handleAddNewTodo =(e)=>{
    e.preventDefault();

    addTodo( 
      {
        ...newTodo,
        id: uuid(),
        completed: false,
        userId: currentUser.id,
        createdAt: new Date().toLocaleString()
      }
    );

    document.getElementById('add_todo_modal').close();
    setNewTodo( {title:""} )
  }

  // ============================================ edit todo ============================================
  const handleEditTodo =(id, title)=>{
    editTodo(id, title)
  }

  // ============================================ clear all todos ============================================
  const handleClearAllTodos =()=>{
    clearAllTodos();
    document.getElementById('clear_todo_modal').close();
  }
  
  // open add modal
  const inputRef = useRef(null);
  const openAddModal =()=>{
    document.getElementById('add_todo_modal').showModal();

    // wait to load and render all modal elements
    setTimeout(()=>{
      inputRef.current?.focus();
    },1000)
  }
  // open delete modal
  const openDeleteModal =(id)=>{
      setTodoToDelete(id);
      document.getElementById('deleteSingle_todo_modal').showModal();
  }
  // open clear modal
  const openClearModal =()=>{
      document.getElementById('clear_todo_modal').showModal();
  }
  // open edit modal
  const openEditModal =(id, title)=>{
      setTodoToEdit(id);
      setTodoToEditTitle(title);
      document.getElementById('edit_todo_modal').showModal();
  }

  // close modal
  const closeModal = (modalId) => {
  const modal = document.getElementById(modalId);
    if (modal) {
      modal.close();
    } else {
      console.warn(`Modal with id "${modalId}" not found.`);
    }
  };
  

  


  return (
    <>
    <h1 className='text-center text-xl  mb-5'  >All Your Todos</h1>
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100  w-full">
      <table className="table  ">
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
            todos.length > 0 ? (
            todos.map((todo, index)=>(
              <tr  key={todo.id}>
                <th>{index +1}</th>
                <td>{todo.title}</td>
                <td>{todo.createdAt}</td>
                <td> <input type='checkbox'   checked={todo.completed}  onChange={()=>(handleTodoState(todo.id, todo.completed))} />  </td>
                <td   className='flex  items-center flex-row  '>
                  <button type='button'  className='btn btn-success text-white'       onClick={()=>(openEditModal(todo.id, todo.title))} >Edit</button>
                  <button type='button' className='btn btn-error text-white ml-2 sm:ml-2  md:ml-2  md:ml-5  xl:ml-5'   onClick={()=>(openDeleteModal(todo.id))} >Delete</button>
                </td>
              </tr>
            )) )
            : (
                <tr>
                  <td colSpan="5" className="text-center font-bold text-lg ">
                    There Are No Todos Yet ... Let's Create One!
                  </td>
                </tr>
              )
          }
          
        </tbody>
      </table>
    </div>

    <div className='flex flex-col justify-between items-center w-full mt-24 mb-40' >

      <div className='flex items-center justify-between w-full  flex-col  sm:flex-col md:flex-col lg:flex-row xl:flex-row '>

        <div className="text-lg  flex flex-col justify-between items-center mb-4">
          <p className="text-fuchsia-600 border-2 border-fuchsia-600 rounded-lg py-2 px-5 mb-3">📋 Total: {todos.length}</p>
          <p className="text-green-600">✅ Completed: {todos.filter((todo)=>(todo.completed)).length}</p>
          <p className="text-red-600">❌ Not Completed:  {todos.filter((todo)=>(!todo.completed)).length}</p>
        </div>
        
        <div className='flex text-white'>
          <button  className='btn btn-primary text-white'  onClick={openAddModal}>Add New Todo</button>
          <button  className='btn btn-error ml-5 text-white'  onClick={openClearModal}>Delete All Todos</button>
        </div>

      </div>

      <div>
          <button type='button'
            className="btn bg-amber-400 border-2   mt-5"
            onClick={() => sendCompletedTodos(currentUser.email, currentUser.username, todos.filter(todo => todo.completed))}
          >
          Send Completed Todos by Email
        </button>
        </div>

    </div>




    {/* add modal */}
    <dialog id="add_todo_modal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Add New Todo</h3>
        <div className="modal-action block">
          <form method="dialog "  className='flex flex-col items-center justify-between w-full'>
            <input type='text' placeholder='Todo Title .... ' ref={inputRef} className='outline-0 w-100 font-semibold text-md border-2 border-cyan-500  px-3 py-2   rounded-md'  onChange={(e)=>(setNewTodo( {...newTodo, title:e.target.value} ))}  />
            {/* if there is a button in form, it will close the modal */}
            <div  className='mt-10 float-right'>
              <button type="button" className="btn btn-info mr-5"     onClick={() => closeModal('add_todo_modal')} >Cancel</button>
              <button type="button" className="btn btn-primary"       onClick={handleAddNewTodo}>Add</button>
            </div>
          </form>
        </div>
      </div>
    </dialog>




    {/* delete single modal */}
    <dialog id="deleteSingle_todo_modal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Want To Delete this Todo ?</h3>
        <div className="modal-action block float-right">
          <button type="button"   className='btn btn-info mr-5'       onClick={() => closeModal('deleteSingle_todo_modal')}>Cancel</button>
          <button type="button"  className='btn btn-error' onClick={handleDeleteTodos}>Delete</button>
        </div>
      </div>
    </dialog>


    {/* clear todos modal */}
    <dialog id="clear_todo_modal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Want To Clear All Todos ?</h3>
        <div className="modal-action block float-right">
          <button type="button"   className='btn btn-info mr-5'       onClick={() => closeModal('clear_todo_modal')}>Cancel</button>
          <button type="button"   className='btn btn-error' onClick={handleClearAllTodos}>Clear</button>
        </div>
      </div>
    </dialog>


    {/* edit single modal */}
    <dialog id="edit_todo_modal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Edit Todo Title</h3>

        <div className="modal-action block">
          <form method="dialog  flex flex-col items-center justify-between w-full bg-red-300">
            <input type='text' ref={inputRef} className='outline-0 w-100 font-semibold text-md border-2 border-cyan-500  px-3 py-2   rounded-md'  value={todoToEditTitle}  onChange={(e)=>setTodoToEditTitle(e.target.value)}  />

            <div className="modal-action block float-right">
              <button type="button"   className='btn btn-info mr-5'       onClick={() => closeModal('edit_todo_modal')}>Cancel</button>
              <button type="button"  className='btn btn-success' onClick={()=>handleEditTodo(todoToEdit, todoToEditTitle)}>Edit</button>
            </div>
          </form>
        </div>           
      </div>
    </dialog>



    
    </>
  )
}

export default Home