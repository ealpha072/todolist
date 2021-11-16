import React from 'react'
import TodoItem from './Todoitem'

const Todolist = (props) => {
    return (
        <div className={"card"}>
            <div className={"card-header"}>
                <h6>Todo List</h6>
            </div>
            <div className={"card-body"}>
                <ul>
                    <TodoItem todos={props.todos}/>
                </ul>
            </div>
        </div>
    )
}

export default Todolist