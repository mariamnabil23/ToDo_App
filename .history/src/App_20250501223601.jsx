import { useContext } from "react"
import { ThemeContext } from "./context/ThemeContext"
import "./App.css"
import { Router, Routes, Route } from 'react-router-dom';

import Home from "../"

function App() {

  const {dark} = useContext(ThemeContext);

  return (
    <>
      <div className={dark ? "app  darkMood" : "app  lightMood"}  >

      <Router>
        <Routes>
          <Route path="/"  element={ <Home/> } />
        </Routes>
      </Router>

      </div>
    </>
  )
}

export default App
