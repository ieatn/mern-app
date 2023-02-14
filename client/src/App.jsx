import React, { createContext, useContext, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { useNavigate } from 'react-router-dom'

export const TokenContext = createContext(null)
// export const TokenContext = createContext([])

const ProtectedRoute = ({element}) => {
  const [token] = useContext(TokenContext)
  return token ? element() : useNavigate('/login')
}

function App() {
  // create context using createContext hook
  // declare a random piece of data state, put inside context provider
  // get the state using useContext hook
  const [token, setToken] = useState(null)

  return (
    <div className="App">
      <Navbar />
      <TokenContext.Provider value={[token, setToken]}>
        <ProtectedRoute element={<Home />} />
      </TokenContext.Provider>
    </div>
  )
}

export default App
