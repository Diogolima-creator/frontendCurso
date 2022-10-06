import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './pages/Login'
import './index.css'
import Redirect from './components/Redirect'
import Register from './pages/Register'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path="*" element={<Redirect/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
