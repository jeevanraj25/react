import { useState } from 'react'


function App() {
  const [color, setColor] = useState('olive')


  function addcolor(newcolor){
    setColor(newcolor);
  }

  return (
    <div className='w-full h-screen duration-200 ' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
       <button  onClick={() => addcolor('red')} 
       className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'>
        Red</button>
       <button onClick={() => addcolor('green')} 
       className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'>
        Green</button>
        <button onClick={() => addcolor('blue')} 
       className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'>
        Blue</button>
        <button onClick={() => addcolor('gray')} 
       className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'>
        Gray</button>
        <button onClick={() => addcolor('yellow')} 
       className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'>
        Yellow</button>
      </div>

    </div>
    </div>


  )
}

export default App
