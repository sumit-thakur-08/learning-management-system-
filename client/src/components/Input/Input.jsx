const Input = ({
  type = "text",
  placeholder = "",
  value,
  onChange,
  name,
  className = "",
  ...rest
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`
        w-full px-4 py-2 rounded-md border
        border-lightBg
        bg-light
        text-fontColor
        placeholder:text-spanColor
        focus:outline-none focus:ring-2 focus:ring-accentColor
        ${className}
      `}
      {...rest}
    />
  );
};

export default Input;
