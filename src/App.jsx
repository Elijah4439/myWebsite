import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Contact from './pages/contact/Contact'
import Home from './pages/home/Home'
import Skills from './pages/skills/Skills'
import Products from './pages/products/Products'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='skills' element = {<Skills/>}/>
        <Route path='products' element = {<Products/>}/>
        <Route path='contact' element = {<Contact/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
