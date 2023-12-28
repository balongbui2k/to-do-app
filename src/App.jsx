/* eslint-disable react-refresh/only-export-components */
import { useEffect, useState } from "react";
import CustomTextInput from "./components/custom-text-input";
import CustomButton from "./components/custom-button";
import TodoScreen from "./pages/todo-screen";
import { taskStatus } from "./utils/constant";
import TaskCard from "./components/task-card";

const generateId = (length = 10) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    id = id + characters.charAt(randomIndex);
  }

  return id;
};

export default function App() {
  const [textChange, setTextChange] = useState({
    nameChange: "",
    newDescription: "",
  });
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks([
      {
        id: "UmqcWWFy14",
        name: "hehe",
        description: "hehehe",
        status: "todo",
      },
    ]);
  }, []);

  const handleChangeName = (e) => {
    setTextChange({ ...textChange, nameChange: e.target.value });
  };
  const handleChangeDescription = (e) => {
    setTextChange({ ...textChange, descriptionChange: e.target.value });
  };

  const handleAddTask = () => {
    if (tasks.some((task) => task.name === textChange.nameChange)) return;
    if (tasks.some((task) => task.description === textChange.descriptionChange))
      return;
    if (!textChange.nameChange.trim() || !textChange.descriptionChange.trim())
      return;

    setTasks([
      ...tasks,
      {
        id: generateId(),
        name: textChange.nameChange,
        description: textChange.descriptionChange,
        status: taskStatus.todo,
      },
    ]);
    setTextChange({ nameChange: "", descriptionChange: "" });
  };

  const handleRemoveTask = (id) => {
    const removeTasks = tasks.filter((task) => task.id !== id);
    setTasks(removeTasks);
  };

  const handleChangeStatus = (id, status) => {
    const newStatus = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          status: status,
        };
      }
      return task;
    });
    setTasks(newStatus);
  };

  const handleEditText = (id, newName, newDescription) => {
    const editedTaskList = tasks.map((task) => {
      if (id === task.id) {
        return {
          ...task,
          name: newName,
          description: newDescription,
        };
      }
      return task;
    });
    setTasks(editedTaskList);
  };

  return (
    <div className="container mx-auto ">
      <div className="flex justify-end my-4">
        <CustomTextInput
          placeholder={"Name"}
          type={"text"}
          value={textChange.nameChange}
          onChange={handleChangeName}
        />
        <CustomTextInput
          placeholder={"Task description"}
          type={"text"}
          value={textChange.descriptionChange}
          onChange={handleChangeDescription}
        />
        <CustomButton name={"Add task"} onClick={handleAddTask} />
      </div>

      <div className="grid grid-cols-3 gap-6">
        <TodoScreen title={"Todo"}>
          {tasks
            .filter((item) => item.status === taskStatus.todo)
            .map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onRemoveTask={() => handleRemoveTask(task.id)}
                onChangeStatus={handleChangeStatus}
                onEditText={handleEditText}
              />
            ))}
        </TodoScreen>
        <TodoScreen title={"In progress"}>
          {tasks
            .filter((item) => item.status === taskStatus.inProgress)
            .map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onRemoveTask={() => handleRemoveTask(task.id)}
                onChangeStatus={handleChangeStatus}
                onEditText={handleEditText}
              />
            ))}
        </TodoScreen>
        <TodoScreen title={"Completed"}>
          {tasks
            .filter((item) => item.status === taskStatus.completed)
            .map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onRemoveTask={() => handleRemoveTask(task.id)}
                onChangeStatus={handleChangeStatus}
                onEditText={handleEditText}
              />
            ))}
        </TodoScreen>
      </div>
    </div>
  );
}
