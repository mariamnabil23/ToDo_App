import { useContext } from "react"
import Navbar from "./components/Navbar"
import { ThemeContext } from "./context/ThemeContext"
import "./App.css"

function App() {

  const {dark} = useContext(ThemeContext);

  return (
    <>
      <div className={dark ? "darkMood" : "lightMood"} style={{height: "100vh"}}  >
        <Navbar/>
      </div>
    </>
  )
}

export default App
