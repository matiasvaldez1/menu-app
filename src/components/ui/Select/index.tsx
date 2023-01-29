import React, { useState } from "react";

interface Props extends Omit<JSX.IntrinsicElements['select'], 'ref' | 'type'> {
  label?: string;
  options: { value: string; label: string }[];
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  name?: string;
}

const Select: React.FC<Props> = ({
  label,
  options,
  className = "",
  ...props
}) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
    if (props.onChange) props.onChange(e);
  };

  return (
    <div className={`relative rounded-md shadow-sm ${className}`}>
      {label && (
        <label className="block text-sm font-medium leading-5 text-gray-700">
          {label}
        </label>
      )}
      <select
        className="form-select focus:shadow-outline-blue block w-full rounded-md border border-gray-300 bg-white py-3 px-4 leading-5 text-gray-900 placeholder-gray-500 transition duration-150 ease-in-out focus:border-blue-300 focus:outline-none active:bg-gray-50 active:text-gray-800"
        value={value}
        onChange={handleChange}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
