import "./App.css";
import { Route, Routes } from "react-router-dom";

//Pages:-
import LoginSignup from "./screen/login_signup/LoginSignup";
import CreatePassword from "./components/LoginSignup/CreatePassword";
import Home from "./screen/home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="password-create/:email/:code"
          element={<CreatePassword />}
        />
      </Routes>
    </div>
  );
}

export default App;
