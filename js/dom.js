// 1 - выбрать элемент (тег) на странице
//1.1. - выбор элемента по id
const h1 = document.getElementById("title");
console.log(h1);
//1.2 - выбор элемента (тега) по селектору
const menu = document.querySelector(".menu");
console.log(menu);
//1.3 - выбор нескольких элементов (тегов) по селектору
const links = document.querySelectorAll("a");
console.log(links);

//2 - работа с контентом (содержимым тегов)
console.log(h1.textContent); //Чтение содержимого, чтение содержимого без тегов
console.log(h1.innerHTML); //Чтение содержимого, чтение содержимого с тегами
console.log(h1.innerText); // Свойства
console.log(h1.outerHTML);
console.log(h1.outerText);

h1.textContent = "Новый заголовок <img src='img/cloudy.svg' alt='logo'>"; //Изменить содержимое, теги воспринимаются как текст
h1.innerHTML = "Новый заголовок <img src='img/cloudy.svg' alt='logo'>"; //Изменить содержимое с тегами

//3 - работа со стилями (атрибутами style)
menu.style.background = "pink";
menu.style.border = "2px green solid";
menu.style.fontSize = "30px";

//4 - работа с классами (атрибут class)
const block = document.getElementById("block");
block.classList.add("border"); // добавление классов
block.classList.add("large");

//block.classList.remove("large"); //удаление класса

console.log(block.classList.contains("border")); //проверяет наличие класса у элемента

//5 - работа сатрибутами (пример src, herf и тд)
const link = document.querySelector(".link");
console.log(link.getAttribute("href")); // сичтываем значение атрибута
link.setAttribute("href", "https://getbootstrap.com/"); //установить или изменить атрибут

//link.removeAttribute("href"); //удаление атрибута

//6 - создание нового элемента
const image = document.createElement("img"); //создаю тег
image.setAttribute("scr", "img/2.jpg");
image.setAttribute("alt", "Лиса");
block.append(image); //добавляем картинку в блок, варианты append, prepend, before, after

//7 - работа с потомками
console.log(document.querySelectorAll("a"));
console.log(menu.querySelectorAll("a"));

//8 - работа с предками
const lastLink = document.querySelector(".menu li:last-child a");
console.log(lastLink);
const parent = lastLink.closest("li"); //взять ближайшего предка с заданным селектором
console.log(parent);

//9 - работа с событиями(например, пользоватеь где то кликнул и что то произошло)
const btn = document.getElementById("btn");
const circle = document.querySelector(".circle");

btn.addEventListener("click", function(){
    //circle.style.transform = "translateX(700px)";
    circle.classList.toggle("move"); //toggle класса нет добавляется, есть используется
});
