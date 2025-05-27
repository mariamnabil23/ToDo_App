import { useContext } from "react"
import Navbar from "./components/Navbar"
import { ThemeContext } from "./context/ThemeContext"


function App() {

  const {dark} = useContext(ThemeContext);

  return (
    <>
      <div className={dark ? "dark"}   >
        <Navbar/>
      </div>
    </>
  )
}

export default App
