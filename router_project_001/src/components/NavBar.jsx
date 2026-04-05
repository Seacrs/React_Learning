import { Link, NavLink } from "react-router-dom"
import avatar from "../assets/avatar-icon.png"
import logo from "../assets/logog.png"

export default function NavBar(){
    function fakeLogOut(){
        localStorage.removeItem("loggedin")
    }
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
                <Link to="login" className="login-link">
                    <img src={avatar} alt=""  className="login-icon"/>
                </Link>
                <button onClick={fakeLogOut}>x</button>
            </nav>
        </div>
    )
}