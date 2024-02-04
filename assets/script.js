let todoInput = document.querySelector(".todo__input");
let todos = document.querySelector(".todos");
let todoCount = document.querySelector('.todo__count');
let todoInputCheck = document.querySelector('.todo__input__checkbox');
let todosItem = document.querySelectorAll('.todos__item')
let editedTask = false;
let idCount = 1
//! Todo elave elemek
todoInput.addEventListener("keypress", function (e) {
    if (!editedTask && e.key === "Enter") {
        if (todoInput.value != "") {
            let todos__line
            if (todoInputCheck.checked) {
                todos__line = 'todos__line'
            }
            todos.innerHTML = `
                    <li class="todos__new">
                    <div class="todos__list">
                    <input type="checkbox"  class="todos__check" onclick="todoChecked(this)">
                    <p class="todos__item ${todos__line}" id="${idCount}">${todoInput.value}</p>
                    </div>
                    <div class="todos__correct">
                    <img class="todo__chance" onclick="todoEdit(${idCount})" src="./assets/img/pen-to-square-regular.svg" alt="">
                    <img class="todo__delete" onclick="todoDelete(this)" src="./assets/img/Combined Shape 2.svg" alt="">
                    </div>
                    </li>
                    ` + todos.innerHTML
            console.log('problemmmmmmmmmmmmm');
            todoInput.value = ""
            todoNum()
            idCount++
        }
        //! Etid klik onunanda ise dussun 
    } else if (editedTask && e.key === "Enter") {
        document.getElementById(editedTask).textContent = todoInput.value;
        todoInput.value ="";
        editedTask=0
    }
});

//! Elave olunan todo nu silme 
function todoDelete(e) {
    e.parentElement.parentElement.remove();
    idCount--
    todoNum()
};
//! Elave olunan todo nu editleme

function todoEdit(e) {
    editedTask = e;
    console.log(Boolean (e));
    todoInput.value = document.getElementById(editedTask).textContent
}
//! Elave olunan todo nu secmek
function todoChecked(checkbox) {
    console.log(checkbox)
    let checkedText = checkbox.nextElementSibling;
    if (checkbox.checked) {
        checkedText.style.textDecoration = "line-through";
        checkedText.style.color = "red";
    } else {
        checkedText.style.textDecoration = "none";
        checkedText.style.color = "black";
    }
}
//! Elave olunan todo larin sayini gosdermek
function todoNum() {
    todoCount.innerHTML = `${idCount} items left`
}
//! Elave olunan todo larin hamisini silme
function todoClear() {
    todos.innerHTML = ''
    idCount = 0;
    todoCount.innerHTML = `${idCount} items left`
}