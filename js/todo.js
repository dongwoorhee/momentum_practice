const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");
let toDos = [];
const TODOSKEY ="todos";    // set a varible not to make a mistake

console.log("why toDos array isn't initialized");

console.log(toDos,"hello");

function deleteToDo(event) {
    console.log(event);
    const deletList = event.target.parentElement;
    const newToDos = toDos.filter((item)=>{
        return item.id != deletList.id;
    })
    toDos = newToDos;
    saveToDos();
    deletList.remove();
}

function saveToDos(){
    // localStorage.setItem("todos",toDos); //save just a text
    localStorage.setItem("todos",JSON.stringify(toDos));    // save array form as an array
}

function paintToDo(newToDoobj) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    
    span.innerText = newToDoobj.text;
    button.innerText = "❌";
    li.appendChild(span);
    li.appendChild(button);
    li.id = newToDoobj.id;  // give an id
    // console.log(li);
    todoList.appendChild(li);
    toDos.push(newToDoobj);
    console.log(toDos);
    button.addEventListener("click",deleteToDo);
}

function handleTodoSubmit (event) {
    event.preventDefault();
    // console.log(todoInput.value); // for debugging
    const newInput = todoInput.value;
    todoInput.value="";

    const newToDoobj = {
        text: newInput,
        id: Date.now()
    };

    paintToDo(newToDoobj);
    saveToDos();
}

todoForm.addEventListener("submit",handleTodoSubmit);
// eventlistner will handover the event to an argument of functions

const savedToDos = localStorage.getItem(TODOSKEY);
console.log(savedToDos);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    // parsedToDos.forEach(element => {
    //     paintToDo(element);
    // });
    // toDos.length = 0 ;
    // toDos = parsedToDos;
    // i don't need an initialization because every paint item I set a push function.
    parsedToDos.forEach(paintToDo);
}