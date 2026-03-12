import React from 'react'
import { Link, NavLink } from "react-router-dom"

import logo from "../assets/logog.png"

export default function NavBar(){
    return (
        <div className='nav-bar'>
            <Link to="/">
                <img src={logo} alt="" />
            </Link>
            <nav>
                <NavLink 
                        to="/about"
                        className={({isActive})=> isActive ? "active-link": null}
                        >
                            About
                </NavLink>
                <NavLink 
                        to="/vans"
                        className={({isActive})=> isActive ? "active-link": null}
                        >
                            Vans
                </NavLink>
                <NavLink 
                        to="/host"
                        className={({isActive})=> isActive ? "active-link": null}
                        >
                            Host
                </NavLink>
            </nav>
        </div>
    )
}