import React, { useState } from "react";
import "./index.css";
import AddComponent from "../../components/AddComponent";
import Task from "../../components/Task";
import TodoFooter from "../../components/TodoFooter";
import { Data } from "../../utils/constants";

const TodoContainer = () => {
  const [tasksData, setTasksData] = useState([...Data]);
  const [inputVal, setInputVal] = useState("");
  // const [NumPending, setNumPending] = useState(tasksData.length);
  const handleChange = (val) => {
    // console.log(val);
    setInputVal(val);
  };
  const handleClick = (from, index) => {
    switch (from) {
      // Add Tasks
      case "add":
        if (!inputVal) return;
        setTasksData([...tasksData, inputVal]);
        setInputVal("");
        // setNumPending(tasksData.length + 1);
        break;
      // Delete Task
      case "clear_task":
        setTasksData(
          tasksData.filter((item, itemIndex) => {
            // console.log(`itemIndex : ${itemIndex}`);
            return itemIndex !== index;
          })
        );

        // setNumPending(tasksData.length - 1);

        break;
      // Delete All Tasks
      case "clear_all":
        setTasksData([]);
        // setNumPending(0);
        break;
      default:
        break;
    }
  };

  return (
    <div id="TodoContainer">
      <h1>Todo List App</h1>
      <AddComponent
        placeholder={"Add your new todo"}
        onChange={handleChange}
        value={inputVal}
        onClick={() => handleClick("add")}
      />
      <ul className="Task">
        {tasksData.map((item, index) => (
          <Task
            key={index}
            texte={item}
            onClick={() => handleClick("clear_task", index)}
          />
        ))}
      </ul>
      <TodoFooter
        NumPending={tasksData.length}
        onClick={() => handleClick("clear_all")}
      />
    </div>
  );
};

export default TodoContainer;
