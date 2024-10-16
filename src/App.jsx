import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './Pages/LandingPage.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import Shop from './Pages/Shop.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Login from './Pages/Login.jsx'
import Signup from './Pages/Signup.jsx'
Navbar
 

export default function App() {
  return (
   <Router>
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/shop' element={<Shop/>}/> 
        <Route path='/about' element={<About/>}/> 
        <Route path='/contact' element={<Contact/>}/> 
        <Route path='/login' element={<Login/>}/> 
        <Route path='/signup' element={<Signup/>}/> 
      </Routes>
   </Router>
  )
};
