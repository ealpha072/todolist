let todos = [{
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
}]

let newTodo = todos.map(item=>{
    return item.title
})

console.log(newTodo)

