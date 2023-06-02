const form = document.querySelector('.todo_form')
const input = form.querySelector('input')
const ul = document.querySelector('.todo_list')

let todos = []

function saveTodo(){
    localStorage.setItem('todos', JSON.stringify(todos))
}

function removeTodo(e){
    const li = e.target.parentNode
    li.remove()
    const newTodo = todos.filter(todo => todo.id !== parseInt(li.id))
    console.log(newTodo)
    todos = newTodo
    saveTodo()
}



function paintTodo(txt){
    console.log(txt)
    const li = document.createElement('li')
    li.id = todos.length + 1
    const span = document.createElement('span')

    li.innerHTML = txt
    span.innerHTML = 'X'
    span.addEventListener('click', removeTodo)
    li.appendChild(span)
    ul.appendChild(li)
    todos.push({
        id: todos.length + 1,
        txt
    })
    saveTodo()
}

function handleSubmit(e){
    e.preventDefault()
    if(input.value === '') return
    paintTodo(input.value)
    input.value = ''
}

function loadTodo(){
    const loadTodos = localStorage.getItem('todos')
    if(loadTodos !== null){
        const parseTodo = JSON.parse(loadTodos)
        parseTodo.forEach(todo => paintTodo(todo.txt))
    }
}


function init(){
    loadTodo()
    form.addEventListener('submit', handleSubmit)
}

init()