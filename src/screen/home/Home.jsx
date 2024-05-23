import React from "react";
import { userLogout } from "../../API/user";

function Home() {
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const handleLogOut = async () => {
    await userLogout();
  };
  return (
    <div>
      <h1>Home page {user.name.toUpperCase()}</h1>
      <button onClick={handleLogOut}>Logout</button>
    </div>
  );
}

export default Home;
