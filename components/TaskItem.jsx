import Task from "./Task";
import styles from "./TaskItem.module.css";
export default function TaskItem({
  task,
  tasks,
  setTasks,
  index,
  setEditedTask,
}) {
  function deleteTask(taskToDelete) {
    setTasks(tasks.filter((t) => t !== taskToDelete));
  }
  const editTask = (taskToEdit) => {
    setEditedTask(task);
  };
  const completedTasksCount = tasks.filter((task) => task.done).length;

  return (
    <div className={styles.TaskItemm}>
      <p key={index}>
        <span className={task.done ? styles.completed : ""}>
          <strong>{task.title}</strong>
        </span>
        <br />
        {task.description}
        <br />
        Due: {task.dueDate}
        <br />
        <span className={styles.countCompleted}></span>
        <span>
          <button
            className={styles.deleteButton}
            onClick={(e) => deleteTask(task)}
          >
            Delete
          </button>
          <button onClick={editTask} className={styles.editButton}>
            🖋️
          </button>
        </span>
      </p>
    </div>
  );
}
