import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm flex justify-between items-center">
        <a className="btn btn-ghost text-xl">daisyUI</a>
        <button className='btn btn-error'>logout</button>
      </div>
    </>
  )
}

export default Navbar