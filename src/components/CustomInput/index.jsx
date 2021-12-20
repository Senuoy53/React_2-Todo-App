import React from 'react'
import './index.css'
import { todoInput } from '../../utils/constants'
const CustomInput = () => {
    const HandleChange = (val) => {
        console.log(todoInput)
        todoInput.splice(0,1, val);
        console.log(todoInput);
    }

    return(
        <input type="text" placeholder="Add your new todo" onChange={(e) => HandleChange(e.target.value)}/>
    )
}

export default CustomInput