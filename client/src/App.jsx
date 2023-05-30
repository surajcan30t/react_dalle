import React from 'react'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import { logo } from './assets'
import { Home, Createpost } from './pages'

const App = () => {
  return (
    <BrowserRouter>
      <header className='w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]'>
        <Link to='/' >
          <img src={logo} alt="logo" className='w-28 object-contain'/>
        </Link>
        <Link to='/Createpost' className='font-inter font-medium bg-blue-400 text-white px-4 py-2 rounded-md '>
          Create
        </Link>
      </header>
      <main className='sm:p-8 px-4 py-8 w-full bg-slate-200 min-h-[calc(100vh-73px)]'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Createpost' element={<Createpost/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App