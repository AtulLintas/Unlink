import React from "react";
import "./Different.css";
function Different() {
  return (
    <>
      <div className="main_differ_container">
        <h1>
          Why we are Different
          <br />
          from others
        </h1>
        <p>
          Automate your business processes to create efficiencies at a large
          scale delivering hype-growth, backed by data-driven software
          solutions.
        </p>
        <div className="sub_differ_container">
          {/* -----------------Left side btn with hover effect------------- */}

          <div className="btn_differ">
            <div className="differ_btn differ_btn_1">
              <img
                src={process.env.PUBLIC_URL + "/images/w_computer.svg"}
                alt="icon"
              />
              <button type="submit">Modernization</button>
            </div>
            <div className="differ_btn differ_btn_2">
              <img
                src={process.env.PUBLIC_URL + "/images/w_team.svg"}
                alt="icon"
              />
              <button type="submit">Re-Branding</button>
            </div>
            <div className="differ_btn differ_btn_3">
              <img
                src={process.env.PUBLIC_URL + "/images/w_bulb.svg"}
                alt="icon"
              />
              <button type="submit">Development</button>
            </div>
          </div>
          {/*--------------Right side image with some content------------- */}

          <div className="btn_detail_differ">
            <h3>Modernize Legacy Applications</h3>
            <img
              src={process.env.PUBLIC_URL + "/images/img3.svg"}
              alt="image"
            />
            <p>
              Upgrade your business-critical applications with minimal downtime
              to a product that can grow as your business grows with reduced
              maintenance costs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Different;
