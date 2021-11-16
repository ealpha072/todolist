import React, {useState} from 'react'
import CreateTodo from './CreateTodo'
import Todolist from './Todolist'

const Cardbody  = () => {
    const [todos, setTodo] = useState({title:'Use cream for my body'})

    return(
        <>
            <CreateTodo />
            <Todolist todos={todos}/>
        </>
    )
}

export default Cardbody