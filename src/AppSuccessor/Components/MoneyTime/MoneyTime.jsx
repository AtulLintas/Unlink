import React from 'react'
import './MoneyTime.css'
import { FaQuoteLeft } from 'react-icons/fa'

const MoneyTime = () => {
  return (
    <>
        <div className="Mony_Time_Container">
            <div className="Money_text">
                <FaQuoteLeft className='Icon'/>
                <h1>Take back your time and keep more of your money</h1>
                <span>-Bustle</span>
                <button>Add to Desktop</button>
            </div>
            <div className="Money_img">
                <img src={process.env.PUBLIC_URL+"/images/coin1.png"} alt="products" />
            </div>
        </div>
    </>
  )
}

export default MoneyTime