import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import "../styles/login.css"
import LogImg from '../assets/bg.jpeg'
import axios from 'axios';


const Login = () => {

  const {allUsers, currentUser, handleLogin, handleLogout} = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


  // submit
  const navigate = useNavigate();
  const handleSubmit =(e)=>{
    e.preventDefault();

    // const loginedUser =  allUsers.find( (user)=> (user.username === username && user.password === password) );
    // if(loginedUser){
    //   setError("");
    //   handleLogin(loginedUser);
    //   navigate("/");
    //   sessionStorage.setItem("currentUser", JSON.stringify(loginedUser))
    // }else{
    //   setError("Username or Password not found, You don't have account 🤔");
    // }
axios.get("https://your-mockapi-url/users")
  .then((res) => {
    const loginedUser = res.data.find((user) => (user.username === username && user.password === password));

    if (loginedUser) {
      setError("");
      handleLogin(loginedUser);
      navigate("/");
      sessionStorage.setItem("currentUser", JSON.stringify(loginedUser));
    } else {
      setError("Username or Password not found, You don't have account 🤔");
    }
  })
  .catch((err) => {
    setError("Something went wrong while logging in 😓");
    console.error(err);
  });

  }

  return (
    <div className='mainDiv'>


    <div className="loginbox flex items-center justify-center flex-col  w-80 sm:w-80  md:w-xl  lg:w-3xl xl:w-3xl ">
          <h3 className='text-center text-white text-3xl mb-10 font-bold  titleForm ' >Login From</h3>
          <div className='flex  items-center justify-between  w-full  flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row '>
            <form className='loginForm  w-full'   onSubmit={handleSubmit}>
              <label className="labelForm">Enter Your Name : </label>
              <input type="text" className="inputForm"     required       value={username}  onChange={(e)=>setUsername(e.target.value)} />

              <label className="labelForm">Enter Your Password : </label>
              <input type="password" className="inputForm"   required     value={password}  onChange={(e)=>setPassword(e.target.value)} />

              {error && <p className="text-red-500">{error}</p>}

              <button type="submit" className='loginBtn' >Login</button>

              <div className='text-center'>
                <NavLink to="/register" className='bottomLinks'>Don't Have An Account ? Register Now </NavLink>
              </div>
            </form>
            <img src={LogImg}  className='loginpic   mt-15  lg:mt-0 xl:mt-0 ' />
          </div>
    </div>


    </div>
  )
}

export default Login