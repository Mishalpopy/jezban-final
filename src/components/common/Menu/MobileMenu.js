import React from "react";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  return (
    <>
      <div className=" col-lg-7 col-md-4 d-none d-md-block">
        <div className="main-menu text-center">
          <nav id="mobile-menu mobile-menu-area">
          <ul>
      <li >
        <Link to="/">Home</Link>
 
      </li>
      <li>
        <Link to="/about">About us</Link>
      </li>
      <li className="has-dropdown">
        <Link to="/">Services</Link>
        <ul className="submenu">
        <li>
            <Link to="/mosquito-control">Mosquito Control</Link>
          </li>
          <li>
            <Link to="/cockroach-control">Cockroach Control</Link>
          </li>
          <li>
            <Link to="/ants-control">Ants Control</Link>
          </li>
          <li>
            <Link to="/bug-control">Bedbugs Control</Link>
          </li>
          <li>
            <Link to="/ter-control">TERMITE CONTROL</Link>
          </li>
          <li>
            <Link to="/ro-control">RODENT CONTROL</Link>
          </li>
          <li>
            <Link to="/sna-control">SNAKE CONTROL</Link>
          </li>
          <li>
            <Link to="/type-control">TYPES OF FLIES & CONTROL</Link>
          </li>
    
         
        </ul>
      </li>
      <li>
        <Link to="/cleaning-service">Cleaning Services</Link>
      </li>
      <li>
        <Link to="/contact">Contact us</Link>
      </li>
    </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
