import { useContext } from "react"
import { ThemeContext } from "./context/ThemeContext"
import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home"
import Profile from "./pages/Profile"
import NotFound from "./pages/NotFound"


function App() {

  const {dark} = useContext(ThemeContext);

  return (
    <>
      <div className={dark ? "app  darkMood" : "app  lightMood"}  >

      <Router>
        <Routes>
          <Route path="/"  element={ <Home/> } />
          <Route path="/profile"  element={ <Profile/> } />

        </Routes>
      </Router>

      </div>
    </>
  )
}

export default App
