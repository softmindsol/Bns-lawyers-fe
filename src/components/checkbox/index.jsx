import "./style.css";
const Checkbox = ({ checked, onChange, label, name, className = "" }) => {
  return (
    <label
      htmlFor={name}
      className={`flex cursor-pointer items-center space-x-2 ${className}`}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        id={name}
        name={name}
        className="ui-checkbox"
      />
      {label && (
        <span className="ml-2 text-[14px] font-medium leading-6 text-[#0A2540]">
          {label}
        </span>
      )}
    </label>
  );
};

export default Checkbox;
