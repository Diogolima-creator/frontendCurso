import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './pages/Login'
import './index.css'
import Redirect from './pages/Redirect'
import Register from './pages/Register'
import Curso from './pages/Curso'
import Profile from './pages/Profile'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path="*" element={<Redirect/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/curso" element={<Curso/>} />
          <Route path="/profile" element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
