import { useContext } from "react"
import { ThemeContext } from "./context/ThemeContext"
import "./App.css"
import { Router, Routes, Route } from 'react-router-dom';

function App() {

  const {dark} = useContext(ThemeContext);

  return (
    <>
      <div className={dark ? "app  darkMood" : "app  lightMood"}  >

      <Router>
        
      </Router>

      </div>
    </>
  )
}

export default App
