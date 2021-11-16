import React, {useState} from 'react'

//import CreateTodo from './CreateTodo'
//import Todolist from './Todolist'

function Todolist({todo, index, completeTodo, deleteTodo}){
    return (
           <div id="todoitem" className={"card-header row flex-wrap bg-light"} style={{margin:"10px 10px", borderRadius:"10px"}}>
                <div className={"col"} style={{textDecoration: todo.isCompleted? "line-through":" "}}>
                    <h5>{todo.text}</h5>
                </div>
                <div className={"col"} > 
                    <button className={"btn btn-sm btn-success"} onClick={()=>completeTodo(index)}>Complete</button> 
                    <button className={"btn btn-sm btn-danger ml-2"} onClick={()=>deleteTodo(index)}>Del</button>
                </div>
           </div>
    )
}

function TodoForm({addTodo}){
    const [inputText, setInputText] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(!inputText) return
        addTodo(inputText)
        setInputText('')
    }

    return(
        <div className={"row"}>
            <div className={"col-lg-12 col-md-12 col-sm-12 col-sm-12"}>
                <form onSubmit={handleSubmit}>
                    <div className={"form-group row"}>
                        <label className="col-sm-2 col-form-label">New Todo</label>
                        <div className={"col-sm-7"}>
                            <input type="text" className={"form-control"} placeholder="Add Todo..." required value={inputText} onChange={(e)=>setInputText(e.target.value)}/>
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
        { text:'New commits', isCompleted: false},
        { text: "Meet friend for lunch", isCompleted: true },
        { text: "Build really cool todo app", isCompleted: false }
    ])

    const addTodo = text =>{
        const newTodo = [...todos, {text}]
        setTodos(newTodo)
    }

    const completeTodo = (index)=>{
        const newTodos = [...todos]
        newTodos[index].isCompleted = true
        setTodos(newTodos)
    }

    const deleteTodo = index=>{
        const newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos)
    }

    return(
        <>
            <TodoForm addTodo={addTodo}/>
            <div className={"card"}>
                <div className={"card-header"}>
                    <h6>Todo List</h6>
                </div>
                <div className={"card-body bg-secondary"}>
                    {todos.map((todo, index)=>(
                        <Todolist todo={todo} key={index} index={index} completeTodo={completeTodo} deleteTodo={deleteTodo}/>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Cardbody