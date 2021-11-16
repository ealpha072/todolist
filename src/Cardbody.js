import React, {useState} from 'react'

//import CreateTodo from './CreateTodo'
//import Todolist from './Todolist'

function Todolist({todo}){
    return (
           <div className={"card-header"} style={{marginBottom:"10px", borderRadius:"5px"}}>
               {todo.text}
           </div>
    )
}

function TodoForm(addTodo){
    const [inputText, setInputText] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log('Hello')
    }

    return(
        <div className={"row"}>
            <div className={"col-lg-12 col-md-12 col-sm-12 col-sm-12"}>
                <form onSubmit={handleSubmit}>
                    <div className={"form-group row"}>
                        <label className="col-sm-2 col-form-label">New Todo</label>
                        <div className={"col-sm-7"}>
                            <input type="text" className={"form-control"} placeholder="Add Todo..." required/>
                        </div>
                        <div className={"col-3"}>
                            <button className={"btn btn-primary"}>+ Add</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

const Cardbody  = () => {
    const [todos, setTodos] = useState([
        { id:1, text:'New commits'},
        { id:2, text: "Meet friend for lunch" },
        { id:3, text: "Build really cool todo app" }
    ])

    const addTodo = (text)=>{
        const newTodo = [...todos, {text}]
        setTodos(newTodo)
    }

    return(
        <>
            <TodoForm />
            <div className={"card"}>
                <div className={"card-header"}>
                    <h6>Todo List</h6>
                </div>
                <div className={"card-body"}>
                    {todos.map((todo)=>(
                        <Todolist key={todo.id} todo={todo}/>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Cardbody