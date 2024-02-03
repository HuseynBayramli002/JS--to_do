let todoInput = document.querySelector(".todo__input");
let todos = document.querySelector(".todos");

let editedTask = false;
let idCount = 1

todoInput.addEventListener("keypress", function (e) {
    if (!editedTask) {
        if (e.key === "Enter") {
            if (todoInput.value != "") {
                todos.innerHTML = `
                <li class="todos__new">
                <div class="todos__list">
                    <input type="checkbox"  class="todos__check" >
                    <p class="todos__item" id="${idCount}">${todoInput.value}</p>
                </div>
                <div class="todos__correct">
                    <img class="todo__chance" onclick="todoEdit(${idCount})" src="./assets/img/pen-to-square-regular.svg" alt="">
                    <img class="todo__delete" onclick="todoDelete(this)" src="./assets/img/Combined Shape 2.svg" alt="">
                </div>
                </li>
                ` + todos.innerHTML
                todoInput.value = ""
                idCount++
            }
        }
    } else {

    }

});
function todoDelete(e) {
    e.parentElement.parentElement.remove();

};

function todoEdit(e) {
    editedTask = true
    if (editedTask) {
        let p = document.getElementById(e)
        todoInput.value = p.textContent
        todoInput.addEventListener("keypress", function (b) {
            if (b.key === "Enter") {
                p.textContent = todoInput.value
                todoInput.value = ''
                editedTask = false
            }
        })
    }
}
