import React from "react";
import { Link } from "react-router-dom";

const Menus = () => {
  return (
    <ul>
      <li >
        <Link to="/">Home</Link>
 
      </li>
      <li>
        <Link to="/about">About us</Link>
      </li>
      <li className="has-dropdown">
        <Link to="/">Pest Control Services</Link>
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
        <Link to="/cleaning-service">CLEANING SERVICE</Link>
      </li>
      <li>
        <Link to="/">Gallery</Link>
      </li>
      <li>
        <Link to="/contact">Contact us</Link>
      </li>
    </ul>
  );
};

export default Menus;
