import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './pages/Login'
import './index.css'
import Redirect from './components/Redirect'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path="*" element={<Redirect/>} />
          <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
