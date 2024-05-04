import { useState } from 'react'
import Cards from './components/Cards'
import './App.css'

function App() {
 

  return (
    <>
      <h1 className='text-white bg-green-300 p-3'>HEY</h1>
      <Cards username="jeevan"/>
      <Cards/>
      <Cards/>
    </>
  )
}

export default App
