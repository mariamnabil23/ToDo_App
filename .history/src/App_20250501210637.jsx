import { useContext } from "react"
import Navbar from "./components/Navbar"
import { ThemeContext } from "./context/ThemeContext"


function App() {

  const {dark} = useContext(ThemeContext);

  return (
    <>
      <div   >
        <Navbar/>
      </div>
    </>
  )
}

export default App
