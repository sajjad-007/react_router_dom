import React from 'react'
import '../navbar/navbar.css'
import { NavLink } from 'react-router-dom'
import Img from "../../assets/images/nav_logo.png"

const Navbar = () => {
  return (
    <nav id="navbar">
        <div className="container">
            <div className="nav_wrapper">
                <div className="nav_logo">
                    <picture>
                        <img src={Img}alt="not found"/>
                    </picture>
                </div>
                <div className="nav_menu">
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">about</NavLink>
                        </li>
                        <li>
                            <NavLink to="/service">service</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">contact</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="nav_btn">
                    <a href="#" className="commonbtn">contact us</a>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar