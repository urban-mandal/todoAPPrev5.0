import axios from "axios";

const login = async (email, password) => {
  try {
    const response = await axios.post("http://localhost:3001/auth/login", {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    return error.response.data;
  }
};

const signup = async (email, password, name) => {
  const response = await axios.post("http://localhost:3001/auth/signup", {
    email,
    password,
    name,
  });
  return response.data;
};

export { login, signup };
