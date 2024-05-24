import React, { useState } from "react";
import { userSignUp } from "../../API/user";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!signup.email.includes("@") || !signup.email.includes("."))
      alert(" Enter valid email Id");
    if (signup.name.length <= 3)
      alert("Name shood by grater than three character");

    await userSignUp(signup);
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
        <a href="https://wa.me/919835678727" target="_blank">
          Chat with Mritunjay Kumar
        </a>
      </form>
    </div>
  );
}

export default Signup;
