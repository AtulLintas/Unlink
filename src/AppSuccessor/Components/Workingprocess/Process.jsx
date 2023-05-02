import React from "react";
import "./Process.css";

const Process = () => {
  return (
    <>
      <div className="step_container">
        <div className="EasyBar">It's as easy as 1, 2, 3</div>
        {/* Step1 */}
        <div className="step1">
          <div className="text">
            <h1>01</h1>
            <h3>Add 25 Din for free</h3>
            <p>
              It only takes two clicks to add Honey to Chrome, Safari, Firefox,
              Edge, or Opera.
            </p>
          </div>
          <div className="image images">
            <img
              src={process.env.PUBLIC_URL + "/images/man1.png"}
              alt="man1"
              className="step1image"
            />
          </div>
        </div>
        {/* Stage2 */}
        <div className="step2">
          <div className="image">
            <img
              src={process.env.PUBLIC_URL + "/images/eshop.jpg"}
              alt="image"
            />
          </div>
          <div className="text">
            <h1>02</h1>
            <h3>Find savings in seconds</h3>
            <p>
              While you shop on your computer, Honey will find working promo
              codes across the Internet.
            </p>
          </div>
        </div>
        {/* Stage3 */}
        <div className="step3">
          <div className="text">
            <h1>03</h1>
            <h3>Save instantly</h3>
            <p>
              With one click, Pacchees Din will apply some of the best deals to
              your cart. It's that easy!
            </p>
          </div>
          <div className="image">
            <img
              src={process.env.PUBLIC_URL + "/images/Offerbox.jpg"}
              alt="image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Process;
