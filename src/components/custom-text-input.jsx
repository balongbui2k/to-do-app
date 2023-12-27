const CustomTextInput = ({ placeholder, type, value, onChange }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="border border-solid border-gray-400 rounded p-1 mr-2"
    />
  );
};
export default CustomTextInput;