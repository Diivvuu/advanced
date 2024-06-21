import React from "react";

const TextAreaField = ({ id, label, value, onChange, minLength, required }) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <textarea
      id={id}
      value={value}
      onChange={onChange}
      minLength={minLength}
      required={required}
    />
  </div>
);

export default TextAreaField;
