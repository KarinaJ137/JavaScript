const container = document.querySelector(".container");
const btnCreat = document.getElementById("btn-create-task");
const newTask = document.getElementById("new-task");

//const tasks = container.childNodes; // колекция живая
let tasks = document.querySelectorAll(".task");

//добавление новой задачи
btnCreat.addEventListener("click", function(event){
    event.preventDefault(); //отменяем поведение по умолчанию - форма не обнавляет страницу
    let text = newTask.value;
    const task = document.createElement("div");
    task.classList.add("task");
    task.innerHTML = `<span>${text}</span>`;
    container.append(task);
    tasks = document.querySelectorAll(".task");
    console.log(tasks);
})

//Удаление всех задач
const btnRemove = document.getElementById("btn-remove");
btnRemove.addEventListener("click", function(){
    container.innerHTML = "";
    tasks = document.querySelectorAll(".task");
    console.log(tasks);
})


