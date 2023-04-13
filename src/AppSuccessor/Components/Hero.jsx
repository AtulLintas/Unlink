import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="Hero_Container">
        <div className="hero_div_container">
          <div className="Hero_text">
            <h1>Online savings, simplified</h1>
            <p>
              25 Din has joined the PhonePe family. Use it to find discounts at
              over 30,000 retailers online. Plus, Coin is free.
            </p>
            <button>Collect Coins</button>
          </div>
          <div className="hero_img">
            <img
              src={process.env.PUBLIC_URL + "/images/products.png"}
              alt="products"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
