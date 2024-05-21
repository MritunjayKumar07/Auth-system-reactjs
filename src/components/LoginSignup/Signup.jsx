import React, { useState } from "react";

function Signup({ pageSelect }) {
  const [signup, setSignup] = useState({
    name: "",
    email: "",
  });
  const pageSelectForgot = () => pageSelect("forgot");
  const pageSelectLogin = () => pageSelect("login");

  const handleChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signup);
  };
  return (
    <div className="container">
      <h1>SignUp</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />
        <input
          type="email"
          name="email"
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />
        <div>
          <span onClick={pageSelectForgot}>Forgot Password?</span>
          <span onClick={pageSelectLogin}>Login</span>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Signup;
