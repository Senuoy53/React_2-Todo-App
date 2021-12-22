import React from "react";
import "./index.css";
// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { tasksData } from "../../utils/constants";
import CustomButton from "../CustomButton";
const Task = () => {
  return (
    <ul className="Task">
      {tasksData.map((item, index) => (
        <li key={index}>
          {item}
          <span>
            <CustomButton contenu={<FontAwesomeIcon icon={faTrash} />} />
          </span>
        </li>
      ))}

      {/* <li>Buy a new gaming laptop <span><FontAwesomeIcon icon={faTrash}/></span></li>
            <li>Complete a previous task <span><FontAwesomeIcon icon={faTrash}/></span></li>
            <li>Create a video for YouTube <span><FontAwesomeIcon icon={faTrash}/></span></li>
            <li>Create a new portfolio site <span><FontAwesomeIcon icon={faTrash}/></span></li> */}
    </ul>
  );
};

export default Task;
