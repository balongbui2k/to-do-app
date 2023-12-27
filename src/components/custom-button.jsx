const CustomButton = ({ name, onClick }) => {
  return (
    <button
      className="text-white bg-black hover:opacity-80 rounded-[6px] text-[12px] px-2 py-1.5"
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default CustomButton;
