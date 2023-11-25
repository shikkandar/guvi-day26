import React from 'react'
import { NavLink } from 'react-router-dom';
import './nav.css'
const navigationItems = ['Home', 'About', 'Committee', 'Events', 'Membership', 'Contact'];
const paths = ['/', '/about', '/committee', '/events', '/membership', '/contact'];
const Nav = () => {
  const navLinksActive=({isActive}) =>{
      return{
        color: isActive ? "white" : "black",
        backgroundColor: isActive ? "#001F4D" : "transparent",
    }
  }
  return (
  
    <div className='nav-main d-flex justify-content-between align-items-center px-3 py-2' >
      <div>
          <h1>Shikkandar</h1>
      </div>
      <div>
        <ul className='d-flex justify-content-around list-unstyled'>
        {navigationItems.map((item,index)=>(
          <li className='p-3' key={index}>
            <NavLink className='p-2 px-3' style={navLinksActive} to={paths[index]}>{item}</NavLink>
          </li>
        ))}
      </ul>
      </div>
    </div>
  )
}

export default Nav