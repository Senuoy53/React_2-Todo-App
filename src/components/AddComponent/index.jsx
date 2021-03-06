import React from "react";
import "./index.css";
import CustomButton from "../CustomButton";
import CustomInput from "../CustomInput";
// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const AddComponent = ({ placeholder, value, onChange, onClick }) => {
  return (
    <div className="AddComponent">
      <CustomInput
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />

      <CustomButton onClick={onClick} value={value}>
        {<FontAwesomeIcon icon={faPlus} />}
      </CustomButton>
    </div>
  );
};

export default AddComponent;
