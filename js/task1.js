// {
//     //С некоторого момента прошло 234 дня. Сколько полных недель прошло за этот период?
//     let days = 234, week;
//     week = Math.floor(days/7);
//     console.log("Полных недель прошло - ", week);
// }

// {
//     //Дано двузначное число. Получить число, образованное при перестановке цифр заданного числа.
//     let number, d1, d2;
//     number = parseInt(prompt("Введите 2-значное число"));
//     d1 = number % 10;
//     d2 = Math.floor(number/10) % 10;
//     console.log(d1, d2);
// }
// {
//     //Известны сопротивления двух несоединенных друг с другом участков электрической цепи и напряжение на каждом из них. По какому участку протекает меньший ток?
//     let R1, R2, U1, U2, I1, I2, Equality;
//     R1 = parseInt(prompt("Введите сопративление первого участка"));
//     U1 = parseInt(prompt("Введите напряжение первого участка"));
//     R2 = parseInt(prompt("Введите сопративление втрого участка"));
//     U2 = parseInt(prompt("Введите напряжение втрого участка"));
//     I1 = Math.floor(U1 / R1);
//     I2 = Math.floor(U2 / R2);
//     Equality = I1 < I2;
//     console.log(Equality);
// }
// {
//     //Дано трехзначное число. Определить, равен ли квадрат этого числа сумме кубов его цифр.
//     let number1, h1, h2, h3, square, sumCubes;
//     number1 = parseInt(prompt("Введите число"));
//     h1 = number1 / 10;
//     h2 = Math.floor(number1/10) % 10;
//     h3 = Math.floor(number1/100) % 10;
//     square = number1 * number1;
//     sumCubes = Math.pow(h1, 3) + Math.pow(h2, 3) + Math.pow(h3, 3);
//     if (square == sumCubes){
//         console.log("Квадрат числа равен сумме кубов");
//     }
//     else{
//         console.log("Квадрат числа не равен сумме кубов");
//     }
// }
{
    //в) Найти произведение всех целых чисел от 1 до b (значение b вводится с клавиатуры; 1 <= b <= 20);
    let b;
    b = parseInt(prompt("Введите число"));
    if (b < 1 || b >20){
        return;
    }
    else for(let i = 1; i <= b; i++){
        
    }

}