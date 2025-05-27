import React from 'react'
import Theme from './Theme'

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-200 shadow-sm flex justify-between items-center">
        <a className="btn btn-ghost text-xl">daisyUI</a>

<Theme/>

        <button className='btn btn-error'>logout</button>
      </div>
    </>
  )
}

export default Navbar