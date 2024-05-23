import Cookies from "js-cookie";

function deleteCookie(cookieName) {
  // document.cookie = `${cookieName}=; path/ expires=Thu, 01 Jan 1970 00:00:00 UTC; secure`;
  document.cookie = `${cookieName}=; path/ expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
}

const userSignUp = async (body) => {
  // console.log(body);
  try {
    const res = await fetch("http://localhost:8000/api/v1/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const result = await res.json();
    console.log(result);
    return alert(result.message);
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred in signup. Please try again.");
  }
};

const createPassword = async (body) => {
  // console.log(body);
  try {
    const res = await fetch(
      "http://localhost:8000/api/v1/user/create-password",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    const result = await res.json();
    console.log(result);
    alert(result.message);
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred in create password. Please try again.");
  }
};

const userForgotPassword = async (body) => {
  try {
    const res = await fetch(
      "http://localhost:8000/api/v1/user/forgot-password",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    const result = await res.json();
    console.log(result);
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred in forgot password. Please try again.");
  }
};

const userLogin = async (body) => {
  try {
    const res = await fetch("http://localhost:8000/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const result = await res.json();
    console.log(result);
    if (result.code !== 200) {
      return alert(result.message);
    }
    if (result.code === 200) {
      /*1.The document.cookie property is used to set cookies.
      2.path=/ ensures the cookie is accessible across the entire site.
      3.secure ensures the cookie is sent over secure HTTPS connections only. This is important for sensitive data like tokens. Note that this will only work if your site is served over HTTPS.*/
      // document.cookie = `accessToken=${result.accessToken}; path=/; secure; max-age=18000`;
      // document.cookie = `refreshToken=${result.refreshToken}; path=/; secure; max-age=86400`;
      document.cookie = `accessToken=${result.accessToken}; path=/; max-age=18000`;
      document.cookie = `refreshToken=${result.refreshToken}; path=/; max-age=86400`;
      localStorage.setItem("userInfo", JSON.stringify(result.user));
      window.location.reload();
      return alert(result.message);
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred in forgot password. Please try again.");
  }
};

const userLogout = async () => {
  try {
    const accessToken = Cookies.get("accessToken");
    if (!accessToken) {
      localStorage.clear("userInfo");
      deleteCookie("accessToken");
      deleteCookie("refreshToken");
      alert("Logout successfully !");
      throw new Error("Access token not found!.");
    }

    const result = await fetch("http://localhost:8000/api/v1/user/logout", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log(result);
    if (result.status === 200) {
      localStorage.clear("userInfo");
      deleteCookie("accessToken");
      deleteCookie("refreshToken");
      alert("Logout successfully !");
    }
    window.location.reload();
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred in logout. Please try again.");
  }
};

export {
  userSignUp,
  createPassword,
  userForgotPassword,
  userLogin,
  userLogout,
};
