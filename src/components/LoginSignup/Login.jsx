import React, { useState } from "react";

function Login({ pageSelect }) {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const pageSelectSignup = () => pageSelect("signup");
  const pageSelectForgot = () => pageSelect("forgot");
  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(login);
  };
  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="Enter your password"
          required
        />
        <div>
          <span onClick={pageSelectForgot}>Forgot Password?</span>
          <span onClick={pageSelectSignup}>Sign Up</span>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;