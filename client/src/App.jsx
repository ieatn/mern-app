import React, { useContext, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import { AuthContext } from './context/AuthContext'

const ProtectedRoute = ({element}) => {
  const { isAuthenticated } = useContext(AuthContext)
  return isAuthenticated ? element : null
}

function App() {

  return (
    <div className="App">
      <Navbar />
      <ProtectedRoute element={<Home />} />
    </div>
  )
}

export default App
