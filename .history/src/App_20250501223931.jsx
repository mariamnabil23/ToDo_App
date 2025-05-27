import { useContext } from "react"
import { ThemeContext } from "./context/ThemeContext"
import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from "./layout/Layout";
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import NotFound from "./pages/NotFound"


function App() {

  const {dark} = useContext(ThemeContext);

  return (
    <>
      <div className={dark ? "app  darkMood" : "app  lightMood"}  >

      <BrowserRouter>
        <Routes>
          <Route path="/"  element={ <Layout/> } > </
          <Route path="/profile"  element={ <Profile/> } />

        </Routes>
      </BrowserRouter>

      </div>
    </>
  )
}

export default App
