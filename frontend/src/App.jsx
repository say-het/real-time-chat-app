import { useState } from 'react'
import './App.css'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Home from './pages/Home/Home'

function App() {

  return (
    <>
      <div className='p-4 h-screen flex items-center justify-center'>
      {/* <Login/> */}
      {/* <Signup/> */}
      <Home/>
      </div>
    </>
  )
}

export default App
