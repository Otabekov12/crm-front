import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router} from "react-router-dom"
import { LoginProvider } from "./Context/Authentication"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <LoginProvider>
        <App />
      </LoginProvider>
    </Router>
  </React.StrictMode>
)
