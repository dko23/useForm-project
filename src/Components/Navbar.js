import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {


    const navlinkStyles = ({isActive}) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive? 'none':'underline'
        }
}





  return (
      <div>
          
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
     <a class="navbar-brand" href="#">MARS</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
         <li class="nav-item">
         <NavLink style={navlinkStyles}to='/'><a className="nav-link active" aria-current="page" href="#">Home</a></NavLink>
          </li>
          <li class="nav-item">
         <NavLink style={navlinkStyles} to='/about'><a className="nav-link" href="#">About</a></NavLink>
          </li>
          <li class="nav-item">
            <NavLink style={navlinkStyles} to='/product'> <a class="nav-link" href="#">Product</a></NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>

          </div>
  )
}
