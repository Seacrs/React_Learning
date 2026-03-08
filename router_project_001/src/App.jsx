import React from 'react'
import { BrowserRouter, Routes, Route }  from "react-router-dom"
import NavBar from './pages/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './pages/Footer'
import Vans from './pages/Vans'

import "./server"

export default function App(){
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/vans" element={<Vans />}></Route>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}