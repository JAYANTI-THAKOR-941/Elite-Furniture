import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'
import Register from './pages/Register'
import Login from './pages/Login'
import Header from './components/Header'
import Collections from './pages/Collections'

const App = () => {
  return (
    <div>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/my-products' element={<Products/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/collections' element={<Collections/>} />
        </Routes>
      
    </div>
  )
}

export default App