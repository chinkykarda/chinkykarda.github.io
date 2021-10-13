import React, { useState } from 'react';
import './Navbar.css';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { NavbarItems } from './NavbarItems';
import ChinkyImage from '../Images/ChinkyImage.jpg';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className='navbar'>
        <Link to='#' className='menu-bars'>
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
        <div className="navbaritems">
          <div class="chip">
            <img src={ChinkyImage} alt="Chinky" width="96" height="96" />
            @chinkykarda
          </div>
          <a href="https://www.linkedin.com/in/chinkykarda/" className="handle"><span><FaIcons.FaLinkedin /></span></a>
          <a href="https://github.com/chinkykarda" className="handle"><span><AiIcons.AiFillGithub /></span></a>
          <a href="https://twitter.com/chinkykarda" className="handle"><span><FaIcons.FaTwitter /></span></a>
          <a href="https://twitter.com/chinkykarda" className="handle"><span><FaIcons.FaGlobe /> </span></a>
        </div>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
          <li className='navbar-toggle'>
            <Link to='#' className='menu-bars'>
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {NavbarItems.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;