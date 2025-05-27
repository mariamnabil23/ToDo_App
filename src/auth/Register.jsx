import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import "../styles/login.css"
import LogImg from '../assets/bg.jpeg'
import axios from 'axios';
import {v4 as uuid} from 'uuid'




const Register = () => {

  const {allUsers, currentUser, handleLogin, handleRegister, handleLogout} = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [userPhoto, setUserPhoto] = useState("");


  const [error, setError] = useState("");


  // submit
  const navigate = useNavigate();
  

  const handleRegistrationForm =(e)=>{
    e.preventDefault();

    const successRegister = username && password && email ;
    if(successRegister){
      console.log("user are registered");
      setError("");
      navigate("/login");

      const newUser = {
      id: uuid(),
      username: username,
      password: password,
      email: email,
      image: userPhoto,
      }

      console.log(newUser)
      handleRegister(newUser)

      // sessionStorage.setItem("currentUser", JSON.stringify(loginedUser))

    }else{
      setError("Please fill all user data ⚠");
    }

  }



  return (
    <div className='mainDiv'>
    <div className="loginbox flex flex-col  w-80 sm:w-80  md:w-xl  lg:w-3xl xl:w-3xl">

          <h3 className='text-center text-white text-3xl mb-10 font-bold  titleForm ' >Register From</h3>

          <div className='flex  items-center justify-between  w-full  flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row '>

            <form className='loginForm  w-full'   onSubmit={handleRegistrationForm}>
              <label className="labelForm">Enter Your Name : </label>
              <input type="text" className="inputForm"            value={username}  onChange={(e)=>setUsername(e.target.value)} />
              <label className="labelForm">Enter Your Password : </label>
              <input type="password" className="inputForm"        value={password}  onChange={(e)=>setPassword(e.target.value)} />
              <label className="labelForm">Enter Your Email : </label>
              <input type="email" className="inputForm"        value={email}  onChange={(e)=>setEmail(e.target.value)} />
              <label className="labelForm">Upload Your Photo : </label>
              <input type="text" className="inputForm"        value={userPhoto}  onChange={(e)=>setUserPhoto(e.target.value)} />

              {error && <p className="text-red-500">{error}</p>}

              <button type="submit" className='loginBtn' >Register</button>

              <div className='text-center'>
                <NavLink to="/login" className='bottomLinks'>Have An Account ? Login Now </NavLink>
              </div>
            </form>
            <img src={LogImg}  className='loginpic   mt-15  lg:mt-0 xl:mt-0 ' />

          </div>
    </div>
    </div>
  )
}

export default Register