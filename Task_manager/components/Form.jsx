import { useEffect, useState } from "react";
import styles from "./Form.module.css";

export default function Form({ tasks, setTasks, editedTask, setEditedTask }) {
  const [task, setTask] = useState(
    editedTask || { title: "", description: "", dueDate: "", done: false }
  );
  useEffect(() => {
    if (editedTask) {
      setTask(editedTask);
    }
  }, [editedTask]);

  const addOrEditTask = (e) => {
    e.preventDefault();
    const title = task.title || "";
    const description = task.description || "";
    if (title.trim() !== "" && description.trim() !== "") {
      if (editedTask) {
        const updatedTasks = tasks.map((t) =>
          t === editedTask ? { ...t, ...task } : t
        );

        setTasks(updatedTasks);
        setEditedTask(null);
      } else {
        setTasks([...tasks, task]);
      }

      setTask({ title: "", description: "", dueDate: "", done: false });
    }
  };
  return (
    <div>
      <form className={styles.InputForm} onSubmit={addOrEditTask}>
        <div>
          <input
            className={styles.Inputt}
            type="text"
            placeholder="Enter your task"
            onChange={(e) => setTask({ ...task, title: e.target.value })}
            value={task.title}
          />
        </div>
        <div>
          <input
            className={styles.inputDescription}
            type="text"
            placeholder="Task Description"
            onChange={(e) => setTask({ ...task, description: e.target.value })}
            value={task.description}
          />
        </div>
        <div>
          <input
            className={styles.inputDate}
            type="date"
            onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
            value={task.dueDate}
          />
        </div>
        <div>
          <label>
            Done:
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => setTask({ ...task, done: !task.done })}
            />
          </label>
        </div>
        <button className={styles.buttonn} type="submit">
          {editedTask ? "Save changes" : "Add"}
        </button>
      </form>
    </div>
  );
}
