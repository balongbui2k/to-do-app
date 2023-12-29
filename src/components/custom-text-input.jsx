const CustomTextInput = ({ placeholder, type, value, onChange }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="border border-solid border-gray-400 rounded "
    />
  );
};
export default CustomTextInput;
