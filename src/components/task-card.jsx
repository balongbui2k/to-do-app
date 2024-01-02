import { useEffect, useState } from "react";
import { taskStatus } from "../utils/constant";
import { IconClose } from "./icons";

const TaskCard = ({ task, onRemoveTask, onEditText, onChangeStatus }) => {
  const [isEditing, setEditing] = useState(false);
  const [textEdit, setTextEdit] = useState({ newName: "", newDescription: "" });

  const handleChangeNewName = (e) => {
    setTextEdit({ ...textEdit, newName: e.target.value });
  };

  const handleChangeNewDescription = (e) => {
    setTextEdit({ ...textEdit, newDescription: e.target.value });
  };

  const handleSubmit = () => {
    if (!textEdit.newName.trim() || !textEdit.newDescription.trim()) return;

    onEditText(task.id, textEdit.newName, textEdit.newDescription);
    setEditing(false);
  };

  useEffect(() => {
    setTextEdit({ newName: task.name, newDescription: task.description });
  }, []);

  const editingTemplate = (
    <div className="flex flex-col space-y-2 ">
      <label className="text-gray-700">New name for {task.name}</label>
      <input
        id={task.id}
        className="border border-gray-400 p-2 rounded"
        type="text"
        onChange={handleChangeNewName}
        defaultValue={task.name}
      />
      <label className="text-gray-700">New name for {task.description}</label>
      <input
        id={task.id}
        className="border border-gray-400 p-2 rounded"
        type="text"
        defaultValue={task.description}
        onChange={handleChangeNewDescription}
      />
      <div className="flex space-x-2">
        <button
          type="button"
          className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-1 px-2 rounded"
          onClick={() => setEditing(false)}
        >
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded"
        >
          Save
        </button>
      </div>
    </div>
  );

  const viewTemplate = (
    <div className="flex flex-col space-y-2">
      <label className="text-gray-700 text-md font-bold">{task.name}</label>
      <label className="text-gray-700 text-sm">{task.description}</label>
      <div className="p-2 left-[260px] grid grid-cols-3 z-10 gap-6">
        <button
          type="button"
          className="bg-rose-400 hover:bg-rose-400/80 text-white p-1 rounded"
          onClick={() => setEditing(true)}
        >
          Edit
        </button>
        {task.status !== taskStatus.todo && (
          <button
            className="bg-blue-500 hover:bg-blue-500/80 text-white p-1 rounded"
            onClick={() => onChangeStatus(task.id, taskStatus.todo)}
          >
            Todo
          </button>
        )}

        {task.status !== taskStatus.inProgress && (
          <button
            className="bg-yellow-500 hover:bg-yellow-500/80 text-white p-1 rounded"
            onClick={() => onChangeStatus(task.id, taskStatus.inProgress)}
          >
            Inprogress
          </button>
        )}

        {task.status !== taskStatus.completed && (
          <button
            className="bg-green-500 hover:bg-green-500/80 text-white p-1  rounded"
            onClick={() => onChangeStatus(task.id, taskStatus.completed)}
          >
            Completed
          </button>
        )}
      </div>
    </div>
  );

  return (
    <div className="relative border border-black-400 rounded-lg mx-4 my-4 drop-shadow-md p-4 bg-white">
      <div
        className="absolute top-0 right-0 p-1 hover:opacity-70 cursor-pointer "
        onClick={onRemoveTask}
      >
        <IconClose />
      </div>
      {isEditing ? editingTemplate : viewTemplate}
    </div>
  );
};

export default TaskCard;
