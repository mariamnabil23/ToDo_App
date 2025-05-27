import { useContext } from "react"
import Navbar from "./components/Navbar"
import { ThemeContext } from "./context/ThemeContext"
import "a"

function App() {

  const {dark} = useContext(ThemeContext);

  return (
    <>
      <div className={dark ? "darkMood" : "lightMood"}   >
        <Navbar/>
      </div>
    </>
  )
}

export default App
