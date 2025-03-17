import Form from "./Form";
import TaskList from "./TaskList";
import { useState } from "react";
export default function Task() {
  const [tasks, setTasks] = useState([]);
  const [editedTask, setEditedTask] = useState(null);
  return (
    <div>
      <Form
        tasks={tasks}
        setTasks={setTasks}
        editedTask={editedTask}
        setEditedTask={setEditedTask}
      />
      <TaskList
        tasks={tasks}
        setTasks={setTasks}
        editedTask={editedTask}
        setEditedTask={setEditedTask}
      />
    </div>
  );
}
