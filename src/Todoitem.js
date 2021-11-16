import React from 'react'

const TodoItem = (props) => {
    const {id, title, completed} = props.todos

    return (
        <li className={"list-group-item"}>
            <input type="checkbox" checked={completed} onChange={() => props.onChangeStatus(id)}/> {title}
        </li>
    )
}

export default TodoItem