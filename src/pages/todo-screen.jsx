const TodoScreen = ({ title, children }) => {
  return (
    <div className="bg-gray-100 ">
      <p className="text-center bg-rose-300 mb-1">{title}</p>
      <div>{children}</div>
    </div>
  );
};
export default TodoScreen;
