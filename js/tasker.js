const container = document.querySelector(".container");
const btnCreat = document.getElementById("btn-create-task");
const newTask = document.getElementById("new-task");

//const tasks = container.childNodes; // колекция живая
let tasks = document.querySelectorAll(".task");

//добавление новой задачи
btnCreat.addEventListener("click", function(event){
    event.preventDefault();//отменяем повдение по умолчанию - форма не обнавляет страницу
    let text = newTask.value;
    const task = document.createElement("div");
    task.classList.add("task");
    task.innerHTML = `<span>${text}</span>
                        <i class="bi bi-pencil-fill btn-edit" tabindex="0"></i>
                        <i class="bi bi-trash3-fill btn-remove" tabindex="0"></i>`;
    container.append(task);
    tasks = document.querySelectorAll(".task");
    console.log(tasks);
});

//Удаление всех задач
const btnRemove = document.getElementById("btn-remove");
btnRemove.addEventListener("click", function(){
    container.innerHTML = "";
    tasks = document.querySelectorAll(".task");
    console.log(tasks);
})

//Удаление задачи
let btnsRemove = document.querySelectorAll(".btn-remove");
for (let btn of btnsRemove){
    btn.addEventListener("click", ()=>{
        console.log("remove");
    })
}

//удаление и редоктирование задачи
container.addEventListener("click", (event)=>{
    let btn = event.target;
    //удаление
    if(btn.classList.contains("btn-remove")){
        btn.closest(".task").outerHTML = "";
    }
    //редактирование
    if(btn.classList.contains("btn-edit")){
        btn.closest(".task").querySelector("span").setAttribute("contenteditable", "true");
        btn.closest(".task").querySelector("span").focus({focusVisible:true});
    }
})

//Пример всплытия
// let i = 0;
// const tags = document.querySelectorAll("*");
// for(let tag of tags){
//     tag.addEventListener("click", (event)=>{
//         i++;
//         console.log("этап "+ i);
//         console.log("целевой элемент:");
//         console.log(event.target);
//         console.log("элемент на котором сработало событие:");
//         console.log(event.currentTarget);
//     });
// }



const btnSort1 = document.getElementById("sort1");
function compare (a, b) {
    if (a.querySelector("span").innerHTML > b.querySelector("span").innerHTML) return 1;
    if (a.querySelector("span").innerHTML == b.querySelector("span").innerHTML) return 0;
    if (a.querySelector("span").innerHTML < b.querySelector("span").innerHTML) return -1;
}

btnSort1.addEventListener("click", function(){
    let newTasks = [...tasks].sort1(compare);
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
    let newTasks = [...tasks].sort2(compareRevers);
    for (let i in newTasks){
        container.append(newTasks[i]);
    }
})

