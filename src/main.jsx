import ReactDOM from 'react-dom/client'
import React from 'react'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Stairs from './Components/Common/Stairs.jsx'
import NavContext from './context/NavContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavContext>
        <Stairs>
          <App />
        </Stairs>
      </NavContext>
    </BrowserRouter>
  </React.StrictMode>
)