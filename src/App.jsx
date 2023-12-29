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
        name: "hehe",
        description: "hehehe",
        status: "todo",
      },
      {
        id: "147YaYxkwk",
        name: "ádas",
        description: "longqwqe",
        status: "todo",
      },
      {
        id: "GOySsmt5WE",
        name: "adad",
        description: "ádasd",
        status: "todo",
      },
      {
        id: "vZLa4x95NQ",
        name: "âfa",
        description: "daasdasd",
        status: "todo",
      },
      {
        id: "u4z7E55dgZ",
        name: "ấdfas",
        description: "àdasfd",
        status: "todo",
      },
      {
        id: "FUZI3GYdl2",
        name: "ADa",
        description: "ADadDS",
        status: "todo",
      },
      {
        id: "CorMp5gvSf",
        name: "SDSD",
        description: "SDSDS",
        status: "todo",
      },
      {
        id: "I9Yvnkll5s",
        name: "ÁDA",
        description: "ADASD",
        status: "todo",
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
    if (!name.trim() && !description.trim()) return;

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
  console.log("tasks:", tasks);

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
    <div className="container mx-auto">
      <div
        className="my-4 gap-4 mobile:flex-col sticky top-0 p-2 bg-white z-50
                  mobile:mx-3 mobile:flex
                  tablet:flex tablet:mx-3
                  surface:flex surface:mx-3
                  laptop:flex laptop:gap-4 laptop:mx-3 laptop:justify-end
                  desktop:flex desktop:mx-3 desktop:justify-end
                  lg-desktop:flex lg-desktop:mx-3 lg-desktop:justify-end "
      >
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

      <div
        className="grid grid-cols-3 gap-4
                  mobile:mx-3 mobile:grid-cols-1
                  tablet:grid-cols-1 tablet:grid
                  surface:grid-cols-1 surface:grid
                  laptop:grid-cols-2 laptop:grid laptop:mx-3
                  desktop:grid desktop:grid-cols-3 desktop:mx-3"
      >
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
