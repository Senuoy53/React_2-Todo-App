import React, { useState } from "react";
import "./index.css";
import AddComponent from "../../components/AddComponent";
import Task from "../../components/Task";
import TodoFooter from "../../components/TodoFooter";

const TodoContainer = () => {
  const [tasksData, setTasksData] = useState([
    "Buy a new gaming laptop",
    "Complete a previous task",
    "Create a video for YouTube",
    "Create a new portfolio site",
  ]);
  const [inputVal, setInputVal] = useState();
  const [NumPending, setNumPending] = useState(tasksData.length);
  const handleChange = (val) => {
    // console.log(val);
    setInputVal(val);
    // console.log(inputVal);
  };
  const handleClick = () => {
    if (!inputVal) return;
    // console.log(inputVal);
    // tasksData.push(inputVal);
    // console.log(tasksData);
    setTasksData([...tasksData, inputVal]);
    setInputVal("");
    setNumPending(tasksData.length + 1);
  };

  // Delete Tasks
  const deleteTasks = (index) => {
    // console.log(`index : ${index}`);
    // tasksData.splice(index, 1);
    // console.log(tasksData);
    setTasksData(
      tasksData.filter((item, itemIndex) => {
        // console.log(`itemIndex : ${itemIndex}`);
        return itemIndex !== index;
      })
    );

    setNumPending(tasksData.length - 1);
  };
  // Delete All Tasks
  //   const deleteAllTasks = () => {
  //     setTasksData("");
  //   };

  //   const showTasks = () => {
  //     return tasksData.map((item, index) => (
  //       <Task key={index} item={item} deleteTasks={() => deleteTasks(index)} />
  //     ));
  //   };

  return (
    <div id="TodoContainer">
      <h1>Todo List App</h1>
      <AddComponent
        placeholder={"Add your new todo"}
        onChange={handleChange}
        inputVal={inputVal}
        onClick={handleClick}
      />
      <ul className="Task">
        {tasksData.map((item, index) => (
          <Task
            key={index}
            item={item}
            deleteTasks={() => deleteTasks(index)}
          />
        ))}
        {/* {showTasks()} */}
      </ul>
      {/* <TodoFooter NumPending={NumPending} deleteAllTasks={deleteAllTasks} /> */}
      <TodoFooter NumPending={NumPending} />
    </div>
  );
};

export default TodoContainer;
