import { useContext } from "react"
import { ThemeContext } from "./context/ThemeContext"
import "./App.css"
import { Router,  } from 'react-router-dom';

function App() {

  const {dark} = useContext(ThemeContext);

  return (
    <>
      <div className={dark ? "app  darkMood" : "app  lightMood"}  >



      </div>
    </>
  )
}

export default App
