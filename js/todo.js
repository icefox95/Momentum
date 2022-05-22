//Const
const toDoForm = document.getElementById("todo-form")
const toDoInput = toDoForm.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list")
let toDos = []

const TODOS_KEY = "todos"

//Function
function handleToDoSubmit(event){
    event.preventDefault()
    const newToDo = toDoInput.value
    toDoInput.value = ""
    const newToDoObj = {
        text:newToDo,
        id: Date.now(),
    }
    toDos.push(newToDoObj)
    paintToDo(newToDoObj)
    saveToDos()
}

function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(toDos))
}

function deleteToDo(event){
    const li = event.target.parentElement
    li.remove()
    toDos = toDos.filter((toDo)=>toDo.id !== parseInt(li.id))
    saveToDos()
}

function paintToDo(newToDo){
    const li = document.createElement("li")
    li.id = newToDo.id
    const span = document.createElement("span")
    const button = document.createElement("button")
    button.innerText = "❌"
    button.addEventListener("click", deleteToDo)
    li.appendChild(span)
    li.appendChild(button)
    span.innerText = newToDo.text
    toDoList.appendChild(li)

}

function doFilter(){
    return true
}


//AddEventListener
toDoForm.addEventListener('submit',handleToDoSubmit)



const savedToDos = localStorage.getItem(TODOS_KEY)

//함수 짧게 쓰는 법. arrow function
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos)
    toDos = parsedToDos
    parsedToDos.forEach(paintToDo)
}
