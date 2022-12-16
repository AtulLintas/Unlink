import React from 'react'
import './OurServices.css';

function OurServices() {
  return (
    <>
    <div className="os_main_container">
    <div className="os_sub_container">
        <div className="os_container">
        <div className="card os_p">
          <h2>Our Services</h2>
          
          <p>Our ability to look beyond technologies and deliver innovative solutions are not the only things that set us apart. At the core of us lies a growth-oriented culture and set of impeccable values that defines and guide us in this journey to perfection.</p>
          </div>
          {/* -----------------first Servise row----------------------- */}

        <div className="card-group os_item_container">
          <div className="card os_item">
            <div className="card-body os_main_item os_left">
              <img
                src={process.env.PUBLIC_URL + "/images/os_icon.svg"}
                alt="icon"
              />
              <div className="os_item_text">
                <h5 className="card-title">Digital Transformation</h5>
                <h6>Implement a digital-first business strategy to boost your, productivity, through cutting edge technology solutions.</h6>
              </div>
            </div>
          </div>

          <div className="card  os_item ">
            <div className="card-body os_main_item os_mid">
              <img
                src={process.env.PUBLIC_URL + "/images/os_icon.svg"}
                alt="icon"
              />
              <div className="os_item_text">
                <h5 className="card-title">Blockchain Solutions</h5>
                <h6>Enabling businesses to adopt and evolve with Blockchain and its endless possibilities to boost efficiency, security and trust.</h6>
              </div>
            </div>
          </div>

          <div className="card  os_item">
            <div className="card-body os_main_item os_right">
              <img
                src={process.env.PUBLIC_URL + "/images/os_icon.svg"}
                alt="icon"
              />
              <div className="os_item_text">
                <h5 className="card-title">Mobility Enablement</h5>
                <h6>Robust and experiential mobile solutions that help you grow revenue and boost brand engagement.</h6>
              </div>
            </div>
          </div>
        </div>




        {/* -------------------------second Service row------------------------- */}
        <div className="card-group os_item_container">
          <div className="card os_item">
            <div className="card-body os_main_item os_left">
              <img
                src={process.env.PUBLIC_URL + "/images/os_icon.svg"}
                alt="icon"
              />
              <div className="os_item_text">
                <h5 className="card-title">Cloud Services</h5>
                <h6>Implement a digital-first business strategy to boost your, productivity, through cutting edge technology solutions.</h6>
              </div>
            </div>
          </div>

          <div className="card  os_item ">
            <div className="card-body os_main_item os_mid">
              <img
                src={process.env.PUBLIC_URL + "/images/os_icon.svg"}
                alt="icon"
              />
              <div className="os_item_text">
                <h5 className="card-title">Internet of Things</h5>
                <h6>Enabling businesses to adopt and evolve with Blockchain and its endless possibilities to boost efficiency, security and trust.</h6>
              </div>
            </div>
          </div>

          <div className="card  os_item">
            <div className="card-body os_main_item os_right">
              <img
                src={process.env.PUBLIC_URL + "/images/os_icon.svg"}
                alt="icon"
              />
              <div className="os_item_text">
                <h5 className="card-title">AI/ML</h5>
                <h6>Robust and experiential mobile solutions that help you grow revenue and boost brand engagement.</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    </>
  )
}

export default OurServices