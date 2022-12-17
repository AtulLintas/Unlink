import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="main_footer_container">
        <div className="sub_footer_container">
          <div className="footer_email">
            <div className="footer_email_text">
              <h2>Work with us</h2>
              <p>
                Let us understand your business objectives, setup initial
                milestones, and plan your software project
              </p>
            </div>
            <div className="footer_input_mail">
              <img
                src={process.env.PUBLIC_URL + "/images/email.svg"}
                alt="email"
              />
              <input type="text" placeholder="Enter Email Address" />
              <button type="submit">Get Started</button>
            </div>
          </div>

          {/* ---------------------footer content----------------------- */}
          <div className="footer_content">
            <div className="card-group footer_card_group">
              <div className="card footer_card">
                <div className="card-body footer_item_list">
                  <h3 className="card-title">Expertise</h3>
                  <ul>
                    <li>AI/ML</li>
                    <li>Mobile Application</li>
                    <li>Web Development</li>
                    <li>Software Quality Assurance</li>
                    <li>Software Project Management</li>
                  </ul>
                </div>
              </div>
              <div className="card footer_card">
                <div className="card-body footer_item_list">
                  <h3 className="card-title">Who we are</h3>
                  <ul>
                    <li>About Us</li>
                    <li>why Choose Us</li>
                    <li>Core Team</li>
                    <li>Technology</li>
                    <li>Sitemap</li>
                  </ul>
                </div>
              </div>
              <div className="card footer_card">
                <div className="card-body footer_item_list">
                  <h3 className="card-title">Resources</h3>
                  <ul>
                    <li>Blog</li>
                    <li>Portfolio</li>
                    <li>Build your Team</li>
                    <li>Start Your Project</li>
                    <li>Contact Us</li>
                  </ul>
                </div>
              </div>
              <div className="card footer_card">
                <div className="card-body footer_item_list">
                  <h3 className="card-title">Technology</h3>
                  <ul>
                    <li>Cloud and DevOps</li>
                    <li>Big Data and Analytics</li>
                    <li>Internet Of Things</li>
                    <li>Cyber Security</li>
                    <li>UI and UX Design</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* ----------------------Copyright section---------------------- */}

          <div className="footer_copyright">
            <div className="copyright_text">
              <h3>
                <span>Unlink</span> Technologies
              </h3>
              <p>
                &#169; copyright 2022 | All rights reserved by unlink
                technologies
              </p>
              <h6>Privacy Policy</h6>
            </div>
            <div className="copyright_social">
              <ul>
                <li>
                  <a href="#">
                    <i className="bi bi-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/atul-kumar-3998241b5"
                    target={"blank"}
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
