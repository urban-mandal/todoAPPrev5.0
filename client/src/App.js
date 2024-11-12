import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import LoginPage from "./pages/LoginPage/login";
import TaskCard from "./components/taskcard/TaskCard";
import Home from "./pages/Home/home";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className={styles.app}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={isLoggedIn ? <Home /> : <LoginPage setIsLoggedIn={setIsLoggedIn} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
