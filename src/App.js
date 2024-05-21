import "./App.css";
import { Route, Routes } from "react-router-dom";

//Pages:-
import LoginSignup from "./screen/login_signup/LoginSignup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginSignup />} />
      </Routes>
    </div>
  );
}

export default App;
