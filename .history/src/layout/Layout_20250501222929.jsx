import React from 'react'
import Navbar from "./components/Navbar"
import Footer from "./components/Navbar"

import { Outlet } from 'react-router-dom';
import Footer from './../../.history/src/components/Footer_20250501222845';


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