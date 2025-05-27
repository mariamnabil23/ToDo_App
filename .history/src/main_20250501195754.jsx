import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./"
import App from './App.jsx'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { TodoContextProvider } from './context/TodoContext.jsx'
import { ThemeContextProvider } from './context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider> 
      <TodoContextProvider> 
        <ThemeContextProvider>
          <App />
        </ThemeContextProvider> 
      </TodoContextProvider>
    </AuthContextProvider>
  </StrictMode>,
)
