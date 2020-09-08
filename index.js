let todos=[];


//constants
const form =document.querySelector('.add-button');
const input = document.querySelector('.todo-input');
const button = document.querySelector('.add-button');
const list = document.querySelector('.items');



function addToDo(item){
    if(item != ''){
        const todo={
            name:item,
            completed:false
        }
        todos.push(todo)
        render(todos)
    }
}


function render(todos){
    list.innerHTML ='';
    todos.forEach(todo=>{const checked=todo.completed?'checked':null;
        const li = document.createElement('li');
            li.setAttribute('class','todo');
        if(todo.completed===true){
            li.classList.add('checked');
        }
        li.innerHTML= `<input type="checkbox" class="checkbox" ${checked}>
        ${todo.name} <i class="fa fa-trash"></i>`;
        list.append(li);
    });
}

form.addEventListener('click',(e)=>{
    e.preventDefault();
    addToDo(input.value);
})
