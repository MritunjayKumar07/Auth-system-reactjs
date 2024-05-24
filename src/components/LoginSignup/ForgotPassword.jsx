import React, { useState } from "react";
import { userForgotPassword } from "../../API/user";

function ForgotPassword({ pageSelect }) {
  const [email, setEmail] = useState("");
  const pageSelectLogin = () => pageSelect("login");
  const pageSelectSignup = () => pageSelect("signup");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.includes("@") || !email.includes("."))
      alert(" Enter valid email Id");
    console.log(email);
    await userForgotPassword({ email });
  };
  return (
    <div className="container">
      <h1>Forgot</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <div>
          <span onClick={pageSelectLogin}>Login</span>
          <span onClick={pageSelectSignup}>Sign Up</span>
        </div>
        <button type="submit">Submit</button>
        <a href="https://wa.me/919835678727" target="_blank">Chat with Mritunjay Kumar</a>
      </form>
    </div>
  );
}

export default ForgotPassword;
