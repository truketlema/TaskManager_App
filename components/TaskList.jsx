import { useState } from "react";
import TaskItem from "./TaskItem";
import Footer from "./Footer";
import styles from "./TaskList.module.css";
export default function TaskList({
  tasks,
  setTasks,
  editedTask,
  setEditedTask,
}) {
  const [filter, setFilter] = useState("all");

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.done;
    if (filter === "pending") return !task.done;
    return true;
  });
  const sortedTasks = filteredTasks
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  const completedTasksCount = tasks.filter((task) => task.done).length;
  return (
    <div>
      {/* Filter Buttons */}
      <div className={styles.filterContainer}>
        <button
          onClick={() => setFilter("all")}
          className={filter === "all" ? styles.active : ""}
        >
          All
        </button>
        <button
          onClick={() => setFilter("completed")}
          className={filter === "completed" ? styles.active : ""}
        >
          Completed
        </button>
        <button
          onClick={() => setFilter("pending")}
          className={filter === "pending" ? styles.active : ""}
        >
          Pending
        </button>
      </div>
      <div>
        {sortedTasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            tasks={tasks}
            setTasks={setTasks}
            index={index}
            setEditedTask={setEditedTask}
          />
        ))}
        <Footer completedTasksCount={completedTasksCount} />
      </div>
    </div>
  );
}
