//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Listeners
todoButton.addEventListener('click', addTodo);


//Functions
function addTodo(event) {
    // console.log("hello world");
    //Prevent form from submitting
    // event.preventDefault;
    //Todo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = 'hey';
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    //CHECK MARK BUTTON
    const completedButton = document.createElement('button');
    completedButton.innerText = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //CHECK TRASH BUTTON
    const trashdButton = document.createElement('button');
    trashdButton.innerText = '<i class="fas fa-trash"></i>';
    trashdButton.classList.add("complete-btn");
    todoDiv.appendChild(trashdButton);

    //Append to list
    todoList.appendChild(todoDiv);
}