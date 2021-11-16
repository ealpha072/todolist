import React from 'react'

const TodoItem = (props) => {
    //const {title, complete} = props.todos
    return (
        <li>{props.todos.title}</li>
    )
}

export default TodoItem