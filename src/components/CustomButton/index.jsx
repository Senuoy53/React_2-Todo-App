import React from "react";
import "./index.css";

// Bootstrap
import { Button } from "react-bootstrap";

const CustomButton = ({ children, value, onClick }) => {
  return (
    <Button onClick={onClick} className={`${value ? "active" : "inactive"}`}>
      {children}
    </Button>
  );
};

export default CustomButton;
