import React from "react"
import "./index.css"
import AddComponent from '../../components/AddComponent'
import Task from '../../components/Task'
import TodoFooter from "../../components/TodoFooter"
const TodoContainer =  () => {
        return (

            <div id="TodoContainer">
            
                <h1>Todo List App</h1>
                <AddComponent/>
                <Task/>
                <TodoFooter/>
            
            </div>
            
        )
} 

export default TodoContainer