import { useState } from 'react'
import './App.css'
import Lander from './pages/Landingpage/Lander.jsx'
import Login from './pages/Login.jsx'
import { BrowserRouter ,Route , Routes } from 'react-router-dom'
import Source_dashboard from './pages/Source/Source_dashboard.jsx'
function App() {

  return (
    <div>
        <BrowserRouter>
          <Routes>
            {/* <Route path='/register' element={<Login/>} /> */}
            <Route path='/' element={<Lander/>}/>
            <Route path='/login' element={<Login/>} />
            <Route path='/Source_dashboard' element={<Source_dashboard/>} />
          </Routes>
        </BrowserRouter>
    </div>

  )
}

export default App
