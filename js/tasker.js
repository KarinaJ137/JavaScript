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

const btn1 = document.getElementById("sort1");
function compare (a, b) {
    if (a.querySelector("span").innerHTML > b.querySelector("span").innerHTML) return 1;
    if (a.querySelector("span").innerHTML == b.querySelector("span").innerHTML) return 0;
    if (a.querySelector("span").innerHTML < b.querySelector("span").innerHTML) return -1;
}

btn1.addEventListener("click", function(){
    let newTasks = [...tasks].sort(compare);
    for (let i in newTasks){
        container.append(newTasks[i]);
    }
})

const btn2 = document.getElementById("sort2");
function compareRevers (a, b) {
    if (a.querySelector("span").innerHTML > b.querySelector("span").innerHTML) return 1;
    if (a.querySelector("span").innerHTML == b.querySelector("span").innerHTML) return 0;
    if (a.querySelector("span").innerHTML < b.querySelector("span").innerHTML) return -1;
}

btn2.addEventListener("click", function(){
    let newTasks = [...tasks].sort(compareRevers);
    for (let i in newTasks){
        container.append(newTasks[i]);
    }
})