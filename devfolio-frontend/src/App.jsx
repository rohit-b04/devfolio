import React from 'react'
import NavBar from './ui/NavBar'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <div className='min-h-screen bg-background'>
      <NavBar />
      <HomePage />
    </div>
  )
}

export default App
