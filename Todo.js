const todoInput = document.getElementById("todoinput");
const listContainer = document.getElementById("list-container");
function addTodo(){

    if (todoInput.value === "") {
        alert("You must add task!");
    }
    else {
        let li = document.createElement("li");
        li.textContent = todoInput.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.textContent = "\u00d7";
        li.appendChild(span);
    }
    todoInput.value = "";
}
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false);




