import React, { useState } from "react";
import styles from "./login.module.css";
import { login, signup } from "../../services/loginApi";
import { useNavigate } from "react-router-dom";
const LoginPage = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const handleChange = (e) => {
    if (e.target.name === "email") setEmail(e.target.value);
    else if (e.target.name === "password") setPassword(e.target.value);
    else if (e.target.name === "name") setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      try {
        login(email, password).then((res) => {
          if (res.error) {
            console.log(res.error);
          } else if (res.message === "Login successful") {
            setIsLoggedIn(true);
            navigate("/");
          }
        });
      } catch (error) {
        console.error("Login error:", error);
      }
    } else {
      signup(email, password, name);
    }
  };
  return (
    <div className={styles.loginPage}>
      <div className={styles.loginContainer}>
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>
        <form
          className={styles.loginForm}
          onChange={handleChange}
          onSubmit={handleSubmit}
        >
          {!isLogin && (
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange}
            />
          )}
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
          <button className={styles.loginButton} type="submit">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <button
          className={styles.loginSwitch}
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "Sign Up" : "Login"}
        </button>
      </div>
      <div className={styles.background}></div>
    </div>
  );
};

export default LoginPage;
