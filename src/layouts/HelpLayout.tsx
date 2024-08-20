import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function HelpLayout() {
  return (
    <div className='help-layout'>
        <h1>Help Layout</h1>
        <p>This is for practice</p>
        <nav>
            <NavLink to="contact">Contact</NavLink>        
            <NavLink to="faq">Faq</NavLink> 
        </nav>
        <Outlet />
    </div>

  )
}
