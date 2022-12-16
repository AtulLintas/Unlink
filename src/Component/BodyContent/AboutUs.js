import React from "react";
import "./AboutUs.css";
function AboutUs() {
  return (
    <>
      <div className="about_container">
      <div className="about_bg_color">
        <div className="about_sub_container">
        {/* -------------------------Left div image container----------------- */}
          <div className="about_img">
            <div className="about_vertical"></div>
            <div className="about_horizontal"></div>
            <img
              src={process.env.PUBLIC_URL + "/images/person.svg"}
              alt="image"
            />
          </div>
          {/* ------------------------------Right div text container--------------- */}
          <div className="about_content">
            <h2>See, What Our Clients <br /> Said About Us!</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales, ipsum vitae malesuada tempus, urna mauris tempor felis, non porttitor arcu enim vel odio. Proin ligula dui, mattis ut nisi ac, faucibus convallis nisi. Maecenas pretium rutrum orci non imperdiet. Maecenas magna neque, lobortis a enim et, vulputate egestas orci. Morbi laoreet congue ligula quis facilisis. Nullam eget odio dolor. Nam et turpis condimentum ex vehicula sagittis.</p>
            <h4>John Doe</h4>
            <h6>Managing Director</h6>
            <img src={process.env.PUBLIC_URL+"/images/right_arrow.svg"} className="about_left_img left1" alt="arrow" />
            <img src={process.env.PUBLIC_URL+"/images/right_arrow.svg"} className="about_right_img" alt="arrow" />

          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default AboutUs;
