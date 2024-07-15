import React from 'react'
import { NavLink } from 'react-router-dom'
import Wrapper from '../assets/wrappers/NavBar'



const NavBar = () => {
  return (
    <Wrapper>
        <div className='nav-center'>
            <span className='logo'>MixMaster</span>
            <div className="nav-links">
                <NavLink className="nav-link" to="/">Home</NavLink>
                <NavLink className="nav-link" to="/about">About</NavLink>
                <NavLink className="nav-link" to="/newsletters">News Letters</NavLink>
            </div>
        </div>
    </Wrapper>
    
  )
}

export default NavBar