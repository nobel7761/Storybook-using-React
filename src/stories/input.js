import React from "react";
import "./input.css";

const Input = ({ type, placeholder, ...rest }) => {
  return (
    <div>
      <input
        type={`${type}`}
        placeholder={`${placeholder}`}
        rest
        className="input"
      />
    </div>
  );
};

export default Input;
