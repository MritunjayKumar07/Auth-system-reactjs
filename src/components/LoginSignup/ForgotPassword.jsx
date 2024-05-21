import React, { useState } from "react";

function ForgotPassword({ pageSelect }) {
  const [email, setEmail] = useState("");
  const pageSelectLogin = () => pageSelect("login");
  const pageSelectSignup = () => pageSelect("signup");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
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
      </form>
    </div>
  );
}

export default ForgotPassword;
