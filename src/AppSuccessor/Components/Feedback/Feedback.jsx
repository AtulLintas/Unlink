import React from "react";
import "./Feedback.css";
import { FaRegStar, FaStar, FaStarHalf, FaUser } from "react-icons/fa";

const Feedback = () => {
  return (
    <>
      <div className="feed_container">
        <div className="User1">
          <div className="feed_header">
            <div className="user_logo">
              <FaUser />
            </div>
            <h2>Daisy Zoy</h2>
            <div className="star">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalf />
              <FaRegStar />
            </div>
          </div>
          <div className="feed_content">
            <p>
              "This extension is so helpful. I love that I can add items to the
              DropList to watch their prices so I can decide the optimal time to
              buy. Great all around."
            </p>
          </div>
        </div>
        <div className="User2">
          <div className="feed_header">
            <div className="user_logo">
              <FaUser />
            </div>
            <h2>Daisy Zoy</h2>
            <div className="star">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalf />
              <FaRegStar />
            </div>
          </div>
          <div className="feed_content">
            <p>
              "This extension is so helpful. I love that I can add items to the
              DropList to watch their prices so I can decide the optimal time to
              buy. Great all around."
            </p>
          </div>
        </div>
        <div className="User3">
          <div className="feed_header">
            <div className="user_logo">
              <FaUser />
            </div>
            <h2>Daisy Zoy</h2>
            <div className="star">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalf />
              <FaRegStar />
            </div>
          </div>
          <div className="feed_content">
            <p>
              "This extension is so helpful. I love that I can add items to the
              DropList to watch their prices so I can decide the optimal time to
              buy. Great all around."
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
