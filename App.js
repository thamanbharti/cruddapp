import React from 'react'
import './App.css'
import Read from './components/read'
import Create from './components/create'
function App() {
  return (
    <div className='main'>
      <h1>React Pokemon Crud App</h1>
       {/* <Create/> */}
       <Read/>
    </div>
  )
}

export default App