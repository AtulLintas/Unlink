import React from "react";
import "./banner.css";

function Banner() {
  return (
    <>
      <div className="main_banner">
        <div className="banner_container">
          <div className="banner_content">
            <h1>
              Your <br />
              <span>Technology</span> partner
            </h1>
            <p>
              We assist companies in elevating their notion of what’s possible
              when our limitless technology expertise is interfaced with an
              inquisitive understanding of their business goals. Let’s talk
              about how we can create something awesome together.
            </p>
            <div className="banner_icon">
              <img
                src={process.env.PUBLIC_URL + "/images/right_arrow.svg"}
                alt="arrow"
              />

              <h4>Set up Consultation</h4>
            </div>
          </div>
          <div className="banner_img">
            <img
              src={process.env.PUBLIC_URL + "/images/img2.svg"}
              alt="image"
            />
          </div>
        </div>
      </div>
      {/* ---------------------Banner Card------------------------------ */}

      <div className="banner_card_container">
        <div className="card-group banner_card_group">
          <div className="card banner_card">
            <div className="card-body banner_card_body">
              <img
                src={process.env.PUBLIC_URL + "/images/computer.svg"}
                alt="icon"
              />

              <h5 className="card-title">Product Engineering</h5>
              <br />
              <p>
                Realize your vision with a tailored software, delivered on-time
                and within your budget.
              </p>
            </div>
          </div>

          <div className="card  banner_card ">
            <div className="card-body banner_card_body">
              <img
                src={process.env.PUBLIC_URL + "/images/team.svg"}
                alt="icon"
              />

              <h5 className="card-title">Smart Team</h5>
              <br />
              <p className="card-text">
                Boost your development with our cross-functional experts.
              </p>
            </div>
          </div>

          <div className="card  banner_card">
            <div className="card-body banner_card_body">
              <img
                src={process.env.PUBLIC_URL + "/images/bulb.svg"}
                alt="icon"
              />

              <h5 className="card-title">Enterprise Solution</h5>
              <br />
              <p className="card-text">
                Create efficiencies at a large scale delivering hyper growth.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="row banner_card_container" >
  <div className="col-sm-3">
    <div className="card card_item">
      <div className="card-body">
      <img src={process.env.PUBLIC_URL+"/images/unlink.svg"} alt="icon" /><br/><br />
        <h5 className="card-title">Product Engineering</h5><br />
        <p className="card-text">Realize your vision with a tailored software, delivered on-time and within your budget.</p>
      </div>
    </div>
  </div>
  <div className="col-sm-3">
    <div className="card card_item">
      <div className="card-body">
      <img src={process.env.PUBLIC_URL+"/images/unlink.svg"} alt="icon" /><br/><br />
        <h5 className="card-title">Smart Team</h5><br />
        <p className="card-text">Boost your development with our cross-functional experts.</p>
      </div>
    </div>
  </div>
  <div className="col-sm-3">
    <div className="card card_item">
      <div className="card-body">
      <img src={process.env.PUBLIC_URL+"/images/unlink.svg"} alt="icon" /><br/><br />
        <h5 className="card-title">Enterprise Solution</h5><br />
        <p className="card-text">Create efficiencies at a large scale delivering hyper growth.</p>
      </div>
    </div>
  </div>
</div> */}
    </>
  );
}

export default Banner;
