import React from "react";

const TextAreaField = ({ id, label, value, onChange, minLength, required }) => (
  <div className="mb-4">
    <label className="block mb-1 text-bomb-blast-yellow" htmlFor={id}>{label}</label>
    <textarea
      id={id}
      value={value}
      onChange={onChange}
      minLength={minLength}
      required={required}
      className="w-full px-3 py-2 border-b-2 border-bomb-blast-blue bg-bomb-blast-gray text-bomb-blast-white placeholder-bomb-blast-gray focus:outline-none focus:border-bomb-blast-orange"
    />
  </div>
);

export default TextAreaField;
