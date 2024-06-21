import React from "react";

const InputField = ({ id, label, type, value, onChange, required }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onchange}
        required={required}
      />
    </div>
  );
};

export default InputField;
