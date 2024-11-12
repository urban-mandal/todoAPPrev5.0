import { comparePassword, hashPassword } from "../services/authServices.js";
import getHashedPassword from "../services/getHashedPassword.js";
import { addUser } from "../services/AddUser.js";

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const hashedPassword = (await getHashedPassword(email)).hashed_password;
    console.log("Hashed password:", hashedPassword);
    const isPasswordCorrect = await comparePassword(password, hashedPassword);
    if (isPasswordCorrect) {
      res.status(200).json({ message: "Login successful" });
    } else {
      res.status(200).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Login error details:", error.message);
    console.error("Full error:", error);
    res.status(500).json({ error: "Failed to login", details: error.message });
  }
};

export const signup = async (req, res) => {
  try {
    const { email, password, name } = req.body;
    console.log("Received signup request for:", email);

    if (!email || !password || !name) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    const hashedPassword = await hashPassword(password);
    const result = await addUser(email, hashedPassword, name);
    console.log("Add user result:", result);

    res.status(200).json({ message: "User added successfully" });
  } catch (error) {
    console.error("Signup error details:", error.message);
    console.error("Full error:", error);
    res.status(500).json({
      error: "Failed to create user",
      details: error.message,
    });
  }
};

export { login };
