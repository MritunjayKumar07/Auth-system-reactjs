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
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred in forgot password. Please try again.");
  }
};

const userValidation = async () => {
  try {
  } catch (error) {}
};

const userLogout = async () => {
  try {
  } catch (error) {}
};

export {
  userSignUp,
  createPassword,
  userForgotPassword,
  userLogin,
  userValidation,
  userLogout,
};
