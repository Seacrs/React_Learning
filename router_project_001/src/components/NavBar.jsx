import React from 'react'
import { Link } from "react-router-dom"

import logo from "../assets/logog.png"

export default function NavBar(){
    return (
        <div className='nav-bar'>
            <Link to="/">
                <img src={logo} alt="" />
            </Link>
            <nav>
                <Link to="/about">About</Link>
                <Link to="/vans">Vans</Link>
                <Link to="/host">Host</Link>
            </nav>
        </div>
    )
}