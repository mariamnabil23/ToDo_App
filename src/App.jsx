import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Login from "./auth/Login";
import { AuthContext } from "./context/AuthContext";
import Register from './auth/Register';



function App() {
  // auth
  const { currentUser } = useContext(AuthContext);

  // theme
  const { dark } = useContext(ThemeContext);

  return (
    <div className={dark ? " darkMood  app" : "lightMood  app"}>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={currentUser ? <Layout /> : <Navigate to="/login" />}>
            <Route index element={currentUser ? <Home /> : <Navigate to="/login" />} />
            <Route path="profile" element={currentUser ? <Profile /> : <Navigate to="/login" />} />
          </Route>

          {/* صفحة تسجيل الدخول بدون شرط دخول */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={  <Register />} />


          {/* صفحة غير موجودة */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
