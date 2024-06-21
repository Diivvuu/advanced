import React from "react";

const SelectField = ({ id, label, value, onChange, options, required }) => (
  <div className="mb-4">
    <label className="block mb-1 text-bomb-blast-yellow" htmlFor={id}>{label}</label>
    <select
      id={id}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full px-3 py-2 border-b-2 border-bomb-blast-blue bg-bomb-blast-gray text-bomb-blast-white placeholder-bomb-blast-gray focus:outline-none focus:border-bomb-blast-orange"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export default SelectField;
