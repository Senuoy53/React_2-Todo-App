import React from "react";
import "./index.css";

const CustomInput = ({ placeholder, onChange, value }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}

      // value={value}
    />
  );
};

export default CustomInput;
