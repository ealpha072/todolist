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
        //render(todos)
        savelocalStorage(todos)
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

function savelocalStorage(todos){
    localStorage.setItem('todos',JSON.stringify(todos));
    //to use local storage, we need a key and value. We name our key to do
    //our value is the array itself..
    //json.stringify converts our array to a string
    render(todos);
}

function getFromStore(){
    let data = localStorage.getItem('todos');

    if(data){todos = JSON.parse(data)
        render(todos)
    };
}

getFromStore();

form.addEventListener('click',(e)=>{
    e.preventDefault();
    addToDo(input.value);
})
