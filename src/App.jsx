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
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks([
      {
        id: "UmqcWWFy14",
        name: "asda",
        description: "asdad",
        status: "todo",
      },
      {
        id: "iDpH0wQLq8",
        name: "a",
        description: "ab",
        status: "inProgress",
      },
      {
        id: "le4GMFqIV7",
        name: "b",
        description: "vc",
        status: "inProgress",
      },
      {
        id: "cm8CqoDqJp",
        name: "f",
        description: "sf",
        status: "todo",
      },
      {
        id: "Fqky3zOBkI",
        name: "ad",
        description: "dg",
        status: "todo",
      },
      {
        id: "AJZibqn9DQ",
        name: "AD",
        description: "Dsdfgsd",
        status: "completed",
      },
      {
        id: "p05AdsR4qH",
        name: "ASFA",
        description: "SDFGSG",
        status: "completed",
      },
      {
        id: "I4LmQx6D3T",
        name: "ssf",
        description: "sdfsf",
        status: "inProgress",
      },
      {
        id: "o3t7P8CMjX",
        name: "ASDsd",
        description: "aSDf",
        status: "completed",
      },
    ]);
  }, []);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleAddTask = () => {
    if (tasks.some((task) => task.name === name)) return;
    if (tasks.some((task) => task.description === description)) return;
    if (!name.trim() && !description.trim()) {
      return alert("Name và Description không được để trống");
    }

    setTasks([
      ...tasks,
      {
        id: generateId(),
        name,
        description,
        status: taskStatus.todo,
      },
    ]);
    setName("");
    setDescription("");
  };

  const handleRemoveTask = (id) => {
    const removeTasks = tasks.filter((task) => task.id !== id);
    console.log("removeTasks:", removeTasks);
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
          value={name}
          onChange={handleChangeName}
        />
        <CustomTextInput
          placeholder={"Task description"}
          type={"text"}
          value={description}
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
