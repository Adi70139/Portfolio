import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";

const Header = ({ toggle }) => {
  return (
    <div className="Container">
      <Nav>
        <Logo to="/">
           <h2 style={{color:'white', fontFamily:'cursive', fontStyle:'italic', fontWeight
            :'bolder'
           }}>Aditya..</h2>
        </Logo>
        <NavMenu>
          <NavLink className="menu-item" to="projects" smooth={true}>
            Projects
          </NavLink>
          <NavLink className="menu-item" to="about" smooth={true}>
            About
          </NavLink>
          <NavLink className="menu-item" to="contact" smooth={true}>
            Contact
          </NavLink>
        </NavMenu>
        <NavBtn>
        <button 
            onClick={() => window.open('https://drive.google.com/drive/folders/1OmmbExeBSo-XBgKmIk04neODXw2tD5O-?usp=sharing')} 

          >
            Resume
          </button>
        </NavBtn>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
