import React from 'react'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import { Outlet } from 'react-router-dom';


const Layout = () => {
    return (
        <div>
            <Navbar/>

            <main style={{ padding: '2rem' }}>
                <Outlet /> {/* هنا بتظهر الصفحة حسب المسار */}
            </main>

            <Footer/>
        </div>
    )
}

export default Layout