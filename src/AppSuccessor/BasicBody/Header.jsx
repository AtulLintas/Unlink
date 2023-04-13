import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  // Hamburger_btn
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  // Navbar_scroller_change
  const [color, setColor] = useState(false);
  const changecolor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changecolor);

  return (
    <>
      <nav className={color ? "nav Navbar_container-bg" : "nav"}>
        <div className="Content_Box">
          {/* Logo */}
          <div>
            <a>
              <span className="s1">Pacchees Din</span>
              <span className="s2">Mein Paisa Double</span>
            </a>
          </div>
          {/* Menu_Link */}
          <div className={click ? "Menu_Link active" : "Menu_Link"}>
            <ul>
              <li>
                <a href="#">How it works</a>
              </li>
              <li>
                <a href="#">Free Cupon</a>
              </li>
              <li>
                <a href="#">Become a Partner</a>
              </li>
              <li className="List_btn">
                <div className="Login_Btn">
                  <button>Login</button>
                </div>
              </li>
              <li className="coin_Img">
              <div className="Mob_menu_img">
                <img src={process.env.PUBLIC_URL + "/images/handgold.png"} alt="gold" />
              </div>
                </li>
            </ul>
          </div>
          <div className="Btn_container">
            {/* Login_btn */}
            <div className="Hide_btn">
              <div className="Login_Btn">
                <button>Login</button>
              </div>
            </div>
            <div className="hamburger" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
