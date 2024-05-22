import React, { useEffect, useState } from "react";
import bgImage from "../../assert/LoginSignup/4.jpg";
import "../../screen/login_signup/login.css";
import { createPassword } from "../../API/user";
import { useParams } from "react-router-dom";

function CreatePassword() {
  const { email, code } = useParams();
  const [password, setPassword] = useState({ password: "", newPassword: "" });
  const [passwordChaker, setPasswordChaker] = useState({
    charactersSix: null,
    uppercase: null,
    lowercase: null,
    numbers: null,
    symbols: null,
  });

  const Characters = 6;
  const LowerCase = /[a-z]/;
  const UpperCase = /[A-Z]/;
  const Numbers = /[0-9]/;
  const Symbols = /[!@#$%^&*(),.?":{}|<>]/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPassword({ ...password, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.password !== password.newPassword) {
      alert("Password not matched!");
    }

    if (
      passwordChaker.charactersSix &&
      passwordChaker.uppercase &&
      passwordChaker.lowercase &&
      passwordChaker.numbers &&
      passwordChaker.symbols
    ) {
      if (!email || !code) {
        return <h1>Invalid Link</h1>;
      }
      console.log(password);
      await createPassword({ code, email, password: password.password });
    }
  };

  const getColor = (condition) => {
    if (condition === null) return "#fff";
    return condition ? "green" : "red";
  };

  useEffect(() => {
    const pass = password.password;
    setPasswordChaker({
      charactersSix: pass.length >= Characters ? true : null,
      uppercase: UpperCase.test(pass) ? true : null,
      lowercase: LowerCase.test(pass) ? true : null,
      numbers: Numbers.test(pass) ? true : null,
      symbols: Symbols.test(pass) ? true : null,
    });
  }, [password]);

  return (
    <div className="Screen" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="LoginSignup">
        <div className="container">
          <h2>Create Password</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="Create password"
              required
            />
            <input
              type="text"
              name="newPassword"
              onChange={handleChange}
              placeholder="Re-enter password"
              required
              autoComplete="off"
            />
            <ul>
              <li
                style={{
                  color: getColor(passwordChaker.charactersSix),
                }}
              >
                At least 6 characters long.
              </li>
              <li
                style={{
                  color: getColor(passwordChaker.uppercase),
                }}
              >
                Use uppercase letters.
              </li>
              <li
                style={{
                  color: getColor(passwordChaker.lowercase),
                }}
              >
                use lowercase letters.
              </li>
              <li
                style={{
                  color: getColor(passwordChaker.numbers),
                }}
              >
                Use numbers.
              </li>
              <li
                style={{
                  color: getColor(passwordChaker.symbols),
                }}
              >
                Use symbols.
              </li>
            </ul>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreatePassword;
