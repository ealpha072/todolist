import React, {useState} from 'react'

function Todolist({todo, index, completeTodo, deleteTodo, editTodo}){
    const [editing, setEditing] = useState(false)

    let editMode = {display:''}
    let viewMode = {display:''}
    const completedStyle = {
        textDecoration:"line-through",
        fontStyle: "italic",
        opacity:0.4
    }

    const handleEditing = ()=>{
        setEditing(true)
    }

    const editingDone = (e) =>{
        if(e.key === 'Enter'){
            setEditing(false)
        }
    }

    if(editing){
        viewMode.display = 'none'
    }else{
        editMode.display = 'none'
    }

    return (
           <div id="todoitem" className={"card-header row flex-wrap bg-light"} style={{margin:"10px 10px", borderRadius:"10px"}} onDoubleClick={()=>handleEditing()}>
                <div className={"col"} >
                    <h5 style={todo.isCompleted?completedStyle:null }>{todo.text}</h5>
                    <input type="text" className={"form-control"} style={editMode} value={todo.text} onKeyDown={editingDone} onChange={(e)=>editTodo(e.target.value, index)}/>
                </div>
                <div className={"col"} > 
                    <button className={"btn btn-sm btn-success"} onClick={()=>completeTodo(index)}>Done</button> 
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
                        <div className={"col"}>
                            <input type="text" className={"form-control"} placeholder="Add Todo..." required value={inputText} onChange={(e)=>setInputText(e.target.value)} autoFocus />
                        </div>
                        <div className={"col"}>
                            <button className={"btn btn-primary btn-sm"}>+ Add</button>
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
        newTodos[index].isCompleted = !(newTodos[index].isCompleted)
        setTodos(newTodos)
    }

    const deleteTodo = index=>{
        const newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos)
    }

    const updateTodo = (updatetext, index) => {
        const newTodos = [...todos]
        newTodos[index].text = updatetext
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
                        <Todolist todo={todo} key={index} index={index} completeTodo={completeTodo} deleteTodo={deleteTodo} editTodo={updateTodo} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Cardbody