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
                <Link to='/'>Trang chủ</Link>
              </li>
              
              <li>
                <Link to='/'>Về chúng tôi</Link>
              </li>
              
             
              <li>
                <Link to='/'>Liên hệ</Link>
              </li>
            </ul>

           
             
          
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar