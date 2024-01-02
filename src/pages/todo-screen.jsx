const TodoScreen = ({ title, children }) => {
  return (
    <div
      className="bg-gray-100
      tablet:mx-3
      surface:mx-3
      laptop:mx-3
      desktop:mx-3
      lg-desktop:mx-3"
    >
      <p className="text-center bg-rose-300 mb-1 text-lg ">{title}</p>
      <div>{children}</div>
    </div>
  );
};
export default TodoScreen;
