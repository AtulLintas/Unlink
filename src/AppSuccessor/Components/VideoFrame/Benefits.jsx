import React from 'react'
import './Benefits.css'
import {FaRss, Rupee} from "react-icons/fa"

const Benefits = () => {
  return (
        <>
            <div className="Benefits_container">
            <div className="Video">
                <div className="Benefits_item">
                    <div className='benefits'><h1 >What our members are getting</h1></div>
                    <div className="benefits_list">
                        <div>
                            <h1>786 Rs</h1>
                            <h5>Average Yearly Saving</h5>
                        </div>
                        <div>
                            <h1>25%</h1>
                            <h5>Average Discount</h5>
                        </div>
                        <div>
                            <h1>25000+</h1>
                            <h5>Participating Merchants</h5>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
  )
}

export default Benefits