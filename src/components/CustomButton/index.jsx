import React from "react";
import "./index.css";

// Bootstrap
import { Button } from "react-bootstrap";

const CustomButton = ({ contenu, onClick, deleteAllTasks }) => {
  return (
    // <button><i class="fas fa-plus"></i></button>
    //  <Button><FontAwesomeIcon icon={faPlus}/></Button>
    // <Button
    //   onClick={() => {
    //     onClick();
    //     deleteAllTasks();
    //   }}
    // >
    //   {contenu}
    // </Button>
    <Button onClick={onClick}>{contenu}</Button>
  );
};

export default CustomButton;
