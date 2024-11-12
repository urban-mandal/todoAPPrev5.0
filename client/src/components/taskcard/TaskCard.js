import React, { useState } from "react";
import styles from "./taskcard.module.css";
const TaskCard = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [status, setStatus] = useState(props.status);
  const [priority, setPriority] = useState(props[`priority`]);
  return (
    <div className={styles.taskCard}>
      <div className={styles.status}>
        <div className={styles[`priority${priority}`]}>
          <ul className={styles.priorityList}>
            <li>{priority}</li>
          </ul>
        </div>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="6" cy="12" r="2" fill="currentColor" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
          <circle cx="18" cy="12" r="2" fill="currentColor" />
        </svg>
      </div>
      <div className={styles.info}>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
      <div className={styles.taskCardInfo}>
        <p>{props.dueDate}</p>
      </div>
    </div>
  );
};

export default TaskCard;
