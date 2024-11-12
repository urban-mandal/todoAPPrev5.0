import React from "react";
import styles from "./viewCSS/tasks.module.css";
import TaskSection from "../../../components/taskSection/taskSection";
const Tasks = () => {
  return (
    <div className={styles.tasks}>
      <TaskSection sectionTitle="todo" />
      <TaskSection sectionTitle="progress" />
      <TaskSection sectionTitle="done" />
    </div>
  );
};

export default Tasks;
