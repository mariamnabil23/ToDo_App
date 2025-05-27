import React, { useContext, useEffect } from 'react'
import Theme from './Theme'
import { AuthContext } from '../context/AuthContext';
import { Typewriter } from 'react-simple-typewriter';
// import useTypewriter from '../customHooks/useTypewriter';

const Navbar = () => {

  const {allUsers, currentUser, handleLogin, handleLogout} = useContext(AuthContext)

  // const animatedName = useTypewriter(currentUser.username);


  return (
    <>
      <div className="px-10 py-2   bg-base-100 shadow-sm flex justify-between items-center"  style={{color: "rgb(0, 0, 91)"}}>

        <div className='leftSide  hidden sm:flex md:flex lg:flex xl:flex' >
          <img src={currentUser.image}   className='w-15 h-15  rounded-2xl' />
        </div>
        <a className="btn btn-ghost text-sm  sm:text-sm md:text-md lg:text-2xl xl:text-2xl p-0">
          Hello,
          <Typewriter
            words={[currentUser.username]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={120}
            deleteSpeed={80}
            delaySpeed={1500}
          />
          </a>

          {/* another way by using custom hook */}
          {/* <h1 className='text-xl'> {`Hello, ${animatedName} |`} </h1> */}

        <div className='rightSide  flex items-center ' >
          <Theme/>
        <button className='btn btn-error ml-5' onClick={handleLogout} >logout</button>
        </div>
      </div>
    </>
  )
}

export default Navbar