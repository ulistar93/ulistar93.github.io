const toDoForm = document.getElementById("todo-form")
const toDoList = document.getElementById("todo-list")
const toDoInput = toDoForm.querySelector("input")

const TODOS_KEY = "todos"
let toDos = []

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function deleteTodo(event){
    const li = event.target.parentElement
    li.remove()
    toDos = toDos.filter(toDo=> toDo.id !== parseInt(li.id))
    saveToDos()
}

function paintTodo(newTodoObj){
    const li = document.createElement("li")
    li.id = newTodoObj.id
    const span = document.createElement("span")
    const button = document.createElement("button")
    button.innerText = "❌"
    button.className = "button"
    button.addEventListener("click", deleteTodo)
    li.appendChild(span)
    li.appendChild(button)
    span.innerText = newTodoObj.text
    toDoList.appendChild(li)
}

function handleToDoSubmit(event){
    event.preventDefault()
    const newTodo = toDoInput.value
    toDoInput.value = ""
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj)
    paintTodo(newTodoObj)
    saveToDos()
}

toDoForm.addEventListener("submit", handleToDoSubmit)

function sayHello(){
    console.log()
}

const savedToDos = localStorage.getItem(TODOS_KEY)
//console.log(savedToDos)
if (savedToDos != null){
    const parsedToDos = JSON.parse(savedToDos)
    //parsedToDos.forEach((item)=> paintTodo(item))
    toDos = parsedToDos
    parsedToDos.forEach(paintTodo)
}