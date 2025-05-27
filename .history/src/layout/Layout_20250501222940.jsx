import React from 'react'
import Navbar from "./components/Navbar"
import Footer from "./components/Footeravbar"

import { Outlet } from 'react-router-dom';


const Layout = () => {
    return (
        <div>
            <Navbar/>

            <main style={{ padding: '2rem' }}>
                <Outlet /> {/* هنا بتظهر الصفحة حسب المسار */}
            </main>


        </div>
    )
}

export default Layout