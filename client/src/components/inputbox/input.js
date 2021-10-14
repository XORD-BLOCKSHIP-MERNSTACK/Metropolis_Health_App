import React from 'react';

const Input = (props) => {
  const { value, disabled, type, onChange, placeholder } = props;

  return (
    <input
      value={value}
      disabled={disabled}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
