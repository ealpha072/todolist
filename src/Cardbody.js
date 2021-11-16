import React, {useState} from 'react'
import CreateTodo from './CreateTodo'
import Todolist from './Todolist'

const Cardbody  = () => {
    const [todos, setTodo] = useState([
        {id:1, title:'Build new ops',completed:true}, 
        {id:2, title:'New commits', completed:false}])
    const handleCompletedChange = (id) =>{
        console.log(id)
    }
    return(
        <>
            <CreateTodo />
            <Todolist todoProp ={todos} handleCompletedChangeProp={handleCompletedChange} />
        </>
    )
}

export default Cardbody