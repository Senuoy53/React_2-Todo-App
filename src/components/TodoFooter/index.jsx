import React from "react";
import CustomButton from "../CustomButton";
import "./index.css";

const TodoFooter = ({ NumPending, onClick }) => {
  return (
    <div className="TodoFooter">
      <span>
        {console.log(!!NumPending)}
        You have <span id="NumPending">{NumPending}</span> pending tasks
      </span>
      {/* Conditional rendering */}
      {!!NumPending && <CustomButton onClick={onClick}>Clear All</CustomButton>}
    </div>
  );
};

export default TodoFooter;
