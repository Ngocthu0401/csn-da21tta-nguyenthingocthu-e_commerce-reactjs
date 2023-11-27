import React, { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  
  
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className=' d_flex'>
           
          </div>

          <div className='navlink'>
            <ul className=" link f_flex capitalize" >
              {}
              <li>
                <Link to='/'>home</Link>
              </li>
              <li>
                <Link to='/flashDeals'>Flash Deals</Link>
              </li>
              <li>
                <Link to='/user'>user account</Link>
              </li>
              <li>
                <Link to='/vendor'>vendor account</Link>
              </li>
              <li>
                <Link to='/brand'>big brand days</Link>
              </li>
              <li>
                <Link to='/contact'>contact</Link>
              </li>
            </ul>

            <button className='toggle'>
             
              <i className='fas fa-bars open'></i>
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar