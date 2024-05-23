import "./App.css";
import Cookies from "js-cookie";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

// Pages
import LoginSignup from "./screen/login_signup/LoginSignup";
import CreatePassword from "./components/LoginSignup/CreatePassword";
import Home from "./screen/home/Home";

function App() {
  const [userFound, setUserFound] = useState(null);
  const accessToken = Cookies.get("accessToken");
  const userInfo = localStorage.getItem("userInfo");

  useEffect(() => {
    if (accessToken && userInfo) {
      setUserFound(true);
    } else {
      setUserFound(false);
    }
  }, [accessToken, userInfo]);

  if (!userFound) {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginSignup />} />
          <Route
            path="password-create/:email/:code"
            element={<CreatePassword />}
          />
        </Routes>
      </div>
    );
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
