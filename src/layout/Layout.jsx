import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';


const Layout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Toaster position="top-right" reverseOrder={false} />

            <Navbar/>

            <main style={{ width: "80%",  margin: "auto", paddingTop: "50px", }}  >
                <Outlet /> 
            </main>

            <Footer/>
        </div>
    )
}

export default Layout