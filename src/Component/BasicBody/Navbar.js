import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav>
        <div className="navbar">
        <div className="logo">
          <img src={process.env.PUBLIC_URL+"/images/unlink.svg"} alt="logo" />
        </div>
          <ul>
            <li><a href="#">About Unlink</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Expertise</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
