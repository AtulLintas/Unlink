import React, { useEffect, useState } from "react";
import "./ScrollBack.css";
import { FaArrowUp } from "react-icons/fa";

const ScrollBack = () => {
    const [isVisible, setIsVisible] = useState(true);

  const ScrollUp = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

const ListenToScroll= () => {
    let minHeighthidden = 250;

    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > minHeighthidden){
            setIsVisible(true);
    }else{
        setIsVisible(true);
    }
};

    useEffect(() => {
        window.addEventListener("scroll", ListenToScroll)
    }, []);
  };
  return (
    <div>
    {isVisible &&
     (<div className="Scroll_Back" onClick={ScrollUp}>
      <FaArrowUp className="Scroll_Icon" />
    </div>)}
    </div>
  );
};

export default ScrollBack;
