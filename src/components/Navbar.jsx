import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/CROPPED 1.png'


function Navbar() {
  const  [ismobile, setmobile] = useState(false);
  return (
    <>
    <nav>
      <ul>
        <li className='logo'>
          <img src={logo} alt="" />
        </li>
        <div className={ismobile?'links-active':'links'}>
        <li><Link to='/' >Home</Link></li>
          <li><Link to='/Shop'>Shop</Link></li>
          <li> 
          <button className='diff-btn'>
            <Link to='/Contact'>Contact us</Link>
          </button>

          </li>

        </div>
        
          <div className='menu-bar'
          onClick={()=>setmobile(!ismobile)}
          >{ismobile? <i className="fa-solid fa-xmark"style={{color: "#2d7221",}}></i>:<i className="fa-solid fa-bars-staggered fa-flip-vertical" style={{color: "#2d7221",}}></i>}
          </div>
        
      </ul>
         
    </nav>
    </>
  )
}

export default Navbar