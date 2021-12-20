import React from 'react'
import './index.css'
import CustomButton from '../CustomButton'
import CustomInput from '../CustomInput'
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { todoInput } from '../../utils/constants';
import { tasksData } from '../../utils/constants';
const AddComponent = () => {
    const handleClick = () => {
        tasksData.push(todoInput[0]);
        console.log(tasksData);
        
        
    }
    return(
        <div className="AddComponent">
            <CustomInput/>
            <CustomButton contenu={<FontAwesomeIcon icon={faPlus} onClick={handleClick}/>}/>
        </div>
    )
}

export default AddComponent 