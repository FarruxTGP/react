import React from 'react'
import './Navbar.css'
function Navbar() {
  function alertChiqar(){
      alert("salom dunyo")
  }
  return (
    <div>
        <nav>
            <h1>Hello</h1>
            <ul>
                <li id='navbar'>
                    <a href="#">
                    Home
                    </a>
                </li>
                <li>
                    <a href="#">
                    Servis    
                    </a>
                </li>
                <li>
                    <a href="#">
                    Contact    
                    </a>
                </li>
                <li>
                   <button onClick={alertChiqar}>Salom</button>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar