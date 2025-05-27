import { useContext } from "react"
import Navbar from "./components/Navbar"


function App() {

  useContext(themecon)

  return (
    <>
      <div   >
        <Navbar/>
      </div>
    </>
  )
}

export default App
