import React from "react";
import "./index.css";
import CustomButton from "../CustomButton";
import CustomInput from "../CustomInput";
// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const AddComponent = ({ placeholder, onChange, inputVal, onClick }) => {
  return (
    <div className="AddComponent">
      <CustomInput
        placeholder={placeholder}
        onChange={onChange}
        value={inputVal}
      />
      <CustomButton
        contenu={<FontAwesomeIcon icon={faPlus} />}
        onClick={onClick}
      />
    </div>
  );
};

export default AddComponent;
