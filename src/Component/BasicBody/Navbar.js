import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav>
        <div className="navbar">
          {/* -----------------------Logo image------------------------ */}
          <div className="logo">
            <img
              src={process.env.PUBLIC_URL + "/images/unlink.svg"}
              alt="logo"
            />
          </div>
          {/* -----------------------Menu item link--------------------- */}
          <ul>
            <li>
              <a href="#"> About Unknown </a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Expertise</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          {/* -----------------------hamburger btn-------------------- */}
          <div className="mobile_menu">
            <i class="bi bi-list "></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
