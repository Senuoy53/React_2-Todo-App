import React, { useState } from "react";
import "./index.css";
import AddComponent from "../../components/AddComponent";
import Task from "../../components/Task";
import TodoFooter from "../../components/TodoFooter";
import { tasksData } from "../../utils/constants";

const TodoContainer = () => {
  const [inputVal, setInputVal] = useState("");
  const handleChange = (val) => {
    // console.log(val);
    setInputVal(val);
    // console.log(inputVal);
  };
  const handleClick = () => {
    if (!inputVal) return;
    console.log(inputVal);
    tasksData.push(inputVal);
    console.log(tasksData);
    setInputVal("");
  };

  return (
    <div id="TodoContainer">
      <h1>Todo List App</h1>
      <AddComponent
        placeholder={"Add your new todo"}
        onChange={handleChange}
        inputVal={inputVal}
        onClick={handleClick}
      />
      <Task />
      <TodoFooter />
    </div>
  );
};

export default TodoContainer;
