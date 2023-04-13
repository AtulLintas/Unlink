import React from "react";
import "./Footer.css";
import { FaRegCopyright, FaRegEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="Footer_Container">
        <div className="Text">
          <h1>Get in Touch</h1>
          <p>
            Let us know if you want to publish your offer in our website or have
            a query
          </p>
        </div>
        <div className="footer_Mail_bar">
          <FaRegEnvelope className="footer_icon" />
          <input type="mail" placeholder="Enter your email" />
          <button>Sign up</button>
        </div>
        <div className="footer_List">
          <div className="footer_About space">
            <h3>About</h3>
            <p>
              25 Din mein paisa double is a web-app that lets you earn cashbacks
              which can be transferred to your bank account.
            </p>
          </div>
          <div className="site_link space">
            <h3>Site links.</h3>
            <ul>
              <li>Intro</li>
              <li>About</li>
              <li>Download</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="footer_contactUs space">
            <h3>Contact Us</h3>
            <p>
              Need help or have a question?
              <br />
              Contact us at: <br />
              <span> xyz123@gmail.com</span>
            </p>
          </div>
        </div>
        <div className="footer_copyright">
          <FaRegCopyright />
          Copyright Pacchees Din 2023
        </div>
      </div>
    </>
  );
};

export default Footer;
      