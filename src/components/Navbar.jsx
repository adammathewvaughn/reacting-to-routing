import React from "react";
import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <>
<nav id="myNavbar" className="navbar navbar-light bg-light">
 <Link className="navbar-a" href="/">Home</Link>
  <ul className="nav nav-pills">
    <li className="nav-item">
     <Link className="nav-a m-2" to="/films">Films</Link>
    </li>
    <li className="nav-item">
     <Link className="nav-a m-2" to="/characters">Characters</Link>
    </li>
    {/* <li className="nav-item dropdown">
     <button className="nav-a dropdown-toggle show" data-toggle="dropdown">
        Details
      </button>
      <div className="dropdown-menu">
       <Link className="dropdown-item" href="/charactedetails/:">Character Details</Link>
       <Link className="dropdown-item" href="/filmdetails/:">Film Details</Link>
      </div>
    </li> */}
  </ul>
</nav>
<br></br>
 <a className="navbar-brand" href="/contact">Contact Me!</a>
 </>
  );
};

export default Navbar;



 
