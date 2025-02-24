import React from 'react'
import LoginPage from './components/LoginPage'
import Home from './components/Home'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter>
    <div>
     <Routes>
  
  <Route  path='LoginPage' element={<LoginPage/>}/>
  <Route  path='*' element={<LoginPage/>}/>
  <Route  path='Home' element={<Home/>}/>

     </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
