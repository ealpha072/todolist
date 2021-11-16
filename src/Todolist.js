import React from 'react'
import TodoItem from './Todoitem'

const Todolist = (props) => {
    return (
        <div className={"card"}>
            <div className={"card-header"}>
                <h6>Todo List</h6>
            </div>
            <div className={"card-body"}>
                <ul className={"list-group"}>
                    {props.todos.map(todo=>(
                        <TodoItem key={todo.id} todos={todo} onChangeStatus={props.onChangeStatus}/>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Todolist