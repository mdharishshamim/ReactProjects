import {useState} from 'react';

function App() {
  const [color, setColor] = useState('olive');

  return (
    <div className='w-full h-screen duration-200'
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap bottom-12 justify-center inset-x-0 px-2">
        <div className='flex flex-wrap justify-center gap-3 shadow-lg
         bg-white px-3 py-2 rounded-xl'>
          <button 
          onClick={()=>{setColor('white')}}
          className='outline-none px-4 py-1 rounded-full text-black shadow-sm bg-white'>White</button>
          <button 
          onClick={()=>{setColor('violet')}}
          className='outline-none px-4 py-1 rounded-full text-white shadow-sm bg-violet-500'>Violet</button>
          <button 
          onClick={()=>{setColor('indigo')}}
          className='outline-none px-4 py-1 rounded-full text-white shadow-sm bg-indigo-600'>Indigo</button>
          <button 
          onClick={()=>{setColor('blue')}}
          className='outline-none px-4 py-1 rounded-full text-white shadow-sm bg-blue-700'>Blue</button>
          <button 
          onClick={()=>{setColor('green')}}
          className='outline-none px-4 py-1 rounded-full text-white shadow-sm bg-green-600'>Green</button>
          <button 
          onClick={()=>{setColor('yellow')}}
          className='outline-none px-4 py-1 rounded-full text-white shadow-sm bg-yellow-400'>Yellow</button>
          <button 
          onClick={()=>{setColor('orange')}}
          className='outline-none px-4 py-1 rounded-full text-white shadow-sm bg-orange-500'>Orange</button>
          <button 
          onClick={()=>{setColor('red')}}
          className='outline-none px-4 py-1 rounded-full text-white shadow-sm bg-red-700'>Red</button>
          <button 
          onClick={()=>{setColor('grey')}}
          className='outline-none px-4 py-1 rounded-full text-white shadow-sm bg-gray-600'>Gray</button>
          <button 
          onClick={()=>{setColor('black')}}
          className='outline-none px-4 py-1 rounded-full text-white shadow-sm bg-black'>Black</button>    
         </div>
      </div>
    </div>
  )
}

export default App
