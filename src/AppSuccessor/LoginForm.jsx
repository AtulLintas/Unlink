import React from "react";
import "./loginForm.css";

const LoginForm = () => {
  return (
    
    <>
      <form action="">
        <div className="user">
        
          <label htmlFor="">User Name</label>
          <input type="text" />
        </div>
        <div className="email">
          <label htmlFor="">Email</label>
          <input type="email" required/>
        </div>
        <div className="Contact">
          
          <label htmlFor="">Contact</label>
          <input type="number" />
        </div>
        <div className="Password">
            <label htmlFor="">Password</label>
            <input type="password" required/>
        </div>
        <div className="submit">
            <button>Click to Submit</button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
