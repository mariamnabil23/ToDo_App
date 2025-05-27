import { useContext } from "react"
import { ThemeContext } from "./context/ThemeContext"
import "./App.css"
import Login from "./pages/Login";

function App() {

  const {dark} = useContext(ThemeContext);

  return (
    <>
      <Navbar/>
      <div className={dark ? "app  darkMood" : "app  lightMood"}  >

        <Login/>

      </div>
    </>
  )
}

export default App
