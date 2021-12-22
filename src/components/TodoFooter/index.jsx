import React from "react";
import CustomButton from "../CustomButton";
import "./index.css";

const TodoFooter = ({ NumPending }) => {
  return (
    //   <div class="footer">
    //             <span>You have <span id="pendingNumb">4</span> pending tasks</span>
    //             <button>Clear All</button>
    //         </div>
    <div className="TodoFooter">
      <span>
        You have <span id="NumPending">{NumPending}</span> pending tasks
      </span>
      <CustomButton contenu="Clear All" />
    </div>
  );
};

export default TodoFooter;
