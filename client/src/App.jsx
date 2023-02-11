import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Login />
    </div>
  )
}

export default App
