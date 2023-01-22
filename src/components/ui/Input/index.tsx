import React, { useState } from 'react';

export interface Props
  extends Omit<JSX.IntrinsicElements['input'], 'ref' | 'type'> {
  label?: string;
  type?: 'text' | 'password' | 'email';
  placeholder?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string
}

const Input: React.FC<Props> = ({ label, type = 'text', placeholder = '', className = '', ...props }) => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (props.onChange) props.onChange(e);
  };

  return (
    <div className={`relative rounded-md shadow-sm ${className}`}>
      {label && <label className="block text-sm font-medium leading-5 text-gray-700">{label}</label>}
      <input
        className="form-input py-3 px-4 block w-full leading-5 transition duration-150 ease-in-out bg-white border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        {...props}
      />
    </div>
  );
};

export default Input;
