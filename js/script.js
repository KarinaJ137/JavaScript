{
let a, b, mul;
a = 5;
b = 7;
mul = a * b;
console.log(mul);
}

{
    // let photoInFolder, photoOnPage, numberOfPage;
    // photoInFolder = parseInt(prompt("Введите кол-во фото в папке", 10));
    // photoOnPage = parseInt(prompt("Введите кол-во фото на одной странице", 10));
    // numberOfPage = Math.ceil(photoInFolder / photoOnPage); //округление
    // alert("кол-во страниц = " + numberOfPage);
}

{
    let a = 1, b;
    b = a++; //увеличивает на единицу, инкремент
    console.log(a, b);
}

{
    // //Дано 4-значное число найти все его цифры
    // let a = 15 % 4; //как пример 15 - яблоки, 4 - человека, остаток деления 3
    // let b = Math.floor(14 % 5);
    // console.log(a, b);

    // let number, d1, d2, d3, d4;
    // number = parseInt(prompt("Введите 4-значное число"));
    // d1 = number % 10;
    // d2 = Math.floor(number/10) % 10;
    // d3 = Math.floor(number/100) % 10;
    // d4 = Math.floor(number/1000) % 10;
    // console.log(d1, d2, d3, d4);
}

// {
//     //Первый способ, найти максимум из трех чисел
//     let x, y, max;
//     x = parseFloat(prompt("Введеите первое число"));
//     y = parseFloat(prompt("Введеите второе число"));
//     z = parseFloat(prompt("Введеите третье число"));
//     if (x >= y && x >= z){
//         max = x;
//     }
//     else if(y >= x && y >=z){
//         max = y;
//     }
//     else{
//         max = z;
//     }
//     alert("max =" + max);
// }
// {
//     //Второй способ решения, найти максимум из трех чисел
//     let x, y, max;
//     x = parseFloat(prompt("Введеите первое число"));
//     y = parseFloat(prompt("Введеите второе число"));
//     max = x;
//     if (y > max){
//         max = y;
//     }
//     if (z > max){
//         max = z;
//     }
//     alert("max =" + max);
// }
{
    //Данны n натуральных чисел. Найти максимум среди них
    let n, a, max;
    n = parseInt(prompt("Введите кол-во чисел"));
    max = parseInt(prompt("Введите число"));
    for(let i = 1; i < n; i++){
        a = parseInt(prompt("Введите число"))
        if (a > max){
            max = a;
        }
    }
    alert("max = " + max)
}
{
    //Данна последовательность натуральных чисел, которая закнчивается вводом числа ноль. Найти максимум среди этой последовательности.
    let  a, max;
    a = parseInt(prompt("Введите число"));
    max = a;
    while(a != 0){
        a = parseInt(prompt("Введите число"))
        if (a > max){
            max = a;
        }
    }
    alert("max = " + max)
}