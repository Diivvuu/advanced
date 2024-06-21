import React from "react";

const InputField = ({ id, label, type, value, onChange, required }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default InputField;
