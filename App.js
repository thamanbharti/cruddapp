import React from 'react'
import './App.css'
import Read from './components/read'
import Create from './components/create'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Update from './components/update'
function App() {
  return (
    <div className='main'>
      <h1>React Pokemon Crud App</h1>
       <Create/>
       {/* <Update />
      

       <Read/> */}

       
    </div>
  )
}

export default App