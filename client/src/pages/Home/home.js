import TaskCard from "../../components/taskcard/TaskCard";
import styles from "./home.module.css";
import React, { useState, useEffect } from "react";
import Dashboard from "./views/Dashboard";
import Tasks from "./views/Tasks";
import Projects from "./views/Projects";
import Calendar from "./views/Calendar";
const Home = () => {
  const [location, setLocation] = useState("tasks");
  return (
    <div className={styles.home}>
      <div className={styles.sidebar}>
        <div className={styles.user}>
          <div className={styles.userImage}></div>
          <h1>User</h1>
        </div>
        <div className={styles.menu}>
          <h3>Menu</h3>
          <div className={styles.menuItems}>
            <button
              onClick={() => setLocation("dashboard")}
              className={`${
                location === "dashboard"
                  ? styles.buttonActive
                  : styles.buttonNotActive
              } ${location === "dashboard" ? "" : styles.buttonHover}`}
            >
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    stroke={location === "dashboard" ? "white" : "#000000"}
                    stroke-width="2"
                    d="M4 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5ZM14 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5ZM4 16a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3ZM14 13a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-6Z"
                  ></path>{" "}
                </g>
              </svg>
              <h2>Dashboard</h2>
            </button>
            <button
              onClick={() => setLocation("tasks")}
              className={`${
                location === "tasks"
                  ? styles.buttonActive
                  : styles.buttonNotActive
              } ${location === "tasks" ? "" : styles.buttonHover}`}
            >
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 32 32"
                data-name="Layer 1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                fill={location === "tasks" ? "white" : "#000000"}
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <title></title>
                  <path
                    class="cls-1"
                    d="M25,7H23.82A3,3,0,0,0,21,5H20a3,3,0,0,0-3-3H15a3,3,0,0,0-3,3H11A3,3,0,0,0,8.18,7H7A2,2,0,0,0,5,9V28a2,2,0,0,0,2,2H25a2,2,0,0,0,2-2V9A2,2,0,0,0,25,7ZM11,7h1a2,2,0,0,0,2-2,1,1,0,0,1,1-1h2a1,1,0,0,1,1,1,2,2,0,0,0,2,2h1a1,1,0,0,1,1,1V9H10V8A1,1,0,0,1,11,7ZM25,28H7V9H8a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2h1Z"
                  ></path>
                  <path
                    class="cls-1"
                    d="M22,13H10a1,1,0,0,0,0,2H22a1,1,0,0,0,0-2Z"
                  ></path>
                  <path
                    class="cls-1"
                    d="M22,18H10a1,1,0,0,0,0,2H22a1,1,0,0,0,0-2Z"
                  ></path>
                  <path
                    class="cls-1"
                    d="M16,23H10a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z"
                  ></path>
                  <path
                    class="cls-1"
                    d="M15.29,6.71A1,1,0,0,0,16,7l.19,0a.6.6,0,0,0,.19-.06.56.56,0,0,0,.17-.09l.16-.12a1,1,0,0,0,.21-.33A1,1,0,0,0,17,6a1.36,1.36,0,0,0,0-.2.64.64,0,0,0-.06-.18.76.76,0,0,0-.09-.18l-.12-.15a1,1,0,0,0-1.42,0A1,1,0,0,0,15,6a1,1,0,0,0,.08.38A1,1,0,0,0,15.29,6.71Z"
                  ></path>
                </g>
              </svg>
              <h2>Tasks</h2>
            </button>
            <button
              onClick={() => setLocation("projects")}
              className={`${
                location === "projects"
                  ? styles.buttonActive
                  : styles.buttonNotActive
              } ${location === "projects" ? "" : styles.buttonHover}`}
            >
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 28 28"
                fill={location === "projects" ? "white" : "#000000"}
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    stroke-width="2"
                    d="M12.3 12C12.1343 12 12 12.1343 12 12.3V12.7C12 12.8657 12.1343 13 12.3 13H19.7C19.8657 13 20 12.8657 20 12.7V12.3C20 12.1343 19.8657 12 19.7 12H12.3Z"
                  ></path>
                  <path
                    stroke-width="2"
                    clip-rule="evenodd"
                    d="M23.5 5H21V2.375C21 1.61561 20.3956 1 19.65 1H4.35C3.60442 1 3 1.61561 3 2.375V21.625C3 22.3844 3.60442 23 4.35 23H7V25.5C7 26.3284 7.67157 27 8.5 27H23.5C24.3284 27 25 26.3284 25 25.5V6.5C25 5.67157 24.3284 5 23.5 5ZM4.8 3.83333C4.8 3.28105 5.24772 2.83333 5.8 2.83333H18.2C18.7523 2.83333 19.2 3.28105 19.2 3.83333V5H8.5C7.67157 5 7 5.67157 7 6.5V21.1667H5.8C5.24772 21.1667 4.8 20.719 4.8 20.1667V3.83333ZM10 7C9.44772 7 9 7.44772 9 8V24C9 24.5523 9.44772 25 10 25H22C22.5523 25 23 24.5523 23 24V8C23 7.44772 22.5523 7 22 7H10Z"
                    fill-rule="evenodd"
                  ></path>
                </g>
              </svg>
              <h2>Projects</h2>
            </button>
            <button
              onClick={() => setLocation("calendar")}
              className={`${
                location === "calendar"
                  ? styles.buttonActive
                  : styles.buttonNotActive
              } ${location === "calendar" ? "" : styles.buttonHover}`}
            >
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                stroke={location === "calendar" ? "white" : "#000000"}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M3 9H21M7 3V5M17 3V5M6 12H8M11 12H13M16 12H18M6 15H8M11 15H13M16 15H18M6 18H8M11 18H13M16 18H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
                    stroke-width="2"
                    stroke-linecap="round"
                  ></path>{" "}
                </g>
              </svg>
              <h2>Calendar</h2>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.main}>
        {location === "dashboard" && <Dashboard />}
        {location === "tasks" && <Tasks />}
        {location === "projects" && <Projects />}
        {location === "calendar" && <Calendar />}
      </div>
    </div>
  );
};

export default Home;
