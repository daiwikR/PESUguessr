import './App.css'
import {BrowserRouter as Router, Route , Routes } from "react-router-dom"
import Navbar from '../src/components/Navbar';
import Signup from '../src/pages/Signup';
import Login from '../src/pages/Login';
import axios from 'axios'
import {Toaster} from 'react-hot-toast'
import Gameplay from '../src/pages/Gameplay'
import Home from '../src/pages/Home'
import Footer from '../src/components/Footer'




axios.defaults.baseURL = 'http://localhost:8001'
axios.defaults.withCredentials = true

function App() {
  return (
    <>
    <Navbar/>
    <Toaster position='bottom-right' toastOptions={{duration: 2000}}/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/gameplay" element={<Gameplay/>}/>
    </Routes>
    <Footer/>
    </>

  )
}

export default App;
