import React, { useState } from "react";
import "./login.css";
import bgImage from "../../assert/LoginSignup/4.jpg";
import Login from "../../components/LoginSignup/Login";
import Signup from "../../components/LoginSignup/Signup";
import ForgotPassword from "../../components/LoginSignup/ForgotPassword";

function LoginSignup() {
  const [pageSelect, setPageSelect] = useState("login");
  return (
    <div className="Screen" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="LoginSignup">
        {pageSelect === "forgot" ? (
          <ForgotPassword pageSelect={setPageSelect} />
        ) : pageSelect === "signup" ? (
          <Signup pageSelect={setPageSelect} />
        ) : (
          <Login pageSelect={setPageSelect} />
        )}
      </div>
    </div>
  );
}

export default LoginSignup;
