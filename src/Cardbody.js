import React, {useState} from 'react'
import CreateTodo from './CreateTodo'
import Todolist from './Todolist'

const Cardbody  = () => {
    const [todos, setTodo] = useState([{
        id:1,
        title:'Use cream for my body',
        completed:true
    },{
        id:2,
        title:'Create new development servers',
        completed:false
    },{
        id:3,
        title:'Install new dependencies for project',
        completed:true
    }])

    const onChangeStatus = (id) =>{
        setTodo(previousState=>{
            previousState = [...todos]
            
        })
    }

    return(
        <>
            <CreateTodo />
            <Todolist todos={todos} onChangeStatus={onChangeStatus}/>
        </>
    )
}

export default Cardbody