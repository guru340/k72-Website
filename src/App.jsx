import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Project from './pages/Project'
import Agence from './pages/Agence'


const App = () => {
 
  


  return (

    
    <div className='text-white'>
       
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/project' element={<Project />} />
        <Route path='/agence' element={<Agence />} />
      </Routes>
    </div>
  )
}

export default App
