import { useContext } from "react"
import Navbar from "./components/Navbar"
import { ThemeContext } from "./context/ThemeContext"
import "./App.css"

function App() {

  const {dark} = useContext(ThemeContext);

  return (
    <>
      <Navbar/>
      <div className={dark ? "app  darkMood" : "app  lightMood"} style={{height: "100vh"}}  >
      </div>
    </>
  )
}

export default App
