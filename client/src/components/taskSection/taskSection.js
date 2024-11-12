import React, { useState } from "react";
import styles from "./taskSection.module.css";
import TaskCard from "../taskcard/TaskCard";
const TaskSection = (props) => {
  const [taskSectionTitle, setTaskSectionTitle] = useState(
    props["sectionTitle"]
  );
  console.log(taskSectionTitle);
  return (
    <div className={styles.taskSection}>
      <div className={styles.taskSectionHeader}>
        <div className={styles.taskSectionHeaderTitle}>
          <div className={styles.taskSectionHeaderTitleCircle}>
          <div className={`${styles.circle} ${styles[taskSectionTitle]}`}></div>
          <h3>{taskSectionTitle}</h3>
          </div>
          <button className={styles.taskSectionHeaderButton}>
            <svg
              width="15px"
              height="15px"
              viewBox="0 0 24 24"
              fill="transparent"
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
                  d="M12 6V18"
                  stroke="#1A40FF"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M6 12H18"
                  stroke="#1A40FF"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
            Add Task
          </button>
        </div>
        <div></div>
      </div>
      <TaskCard
        priority="Low"
        title="Task 1"
        description="Description 1"
        dueDate="2024-01-01"
      />
      <TaskCard
        priority="Medium"
        title="Task 2"
        description="Description 2"
        dueDate="2024-01-02"
      />
      <TaskCard
        priority="High"
        title="Task 3"
        description="Description 3"
        dueDate="2024-01-03"
      />
      <TaskCard
        priority="Low"
        title="Task 4"
        description="Description 4"
        dueDate="2024-01-04"
      />
      <TaskCard
        priority="Medium"
        title="Task 5"
        description="Description 5"
        dueDate="2024-01-05"
      />
    </div>
  );
};

export default TaskSection;
