/*let voz = 65
let cena = 100

if (voz < 2) {
    console.log(cena / 10);
}
if (2 <= voz && voz <= 18) {
    console.log(cena / 2);
}

if (voz > 18 && voz < 65) {
    console.log(cena / 100 * 60);
}

if (voz => 65) {
    console.log(cena / 100 * 60);
}
else (console.log(voz));


*/
// Напишите программу для расчета стоимости билетов.
// Для пассажиров старше 18 лет - полная цена,
// для младенцев младше 2 лет - 10 % стоимости,
// для детей от 2 - х до 18ти лет - 50 % стоимости,
// для пенсионеров старше 65 лет - 60 % стоимости>

let voz = 65
let cena = 100

if (voz < 2) {
    console.log(cena / 10);  // можно просто переменную считать и console.log один в конце
}
else if (voz < 18) {
    console.log(cena / 2);
}

else if (voz < 65) {
    console.log(cena / 100 * 60);
}

else {
    console.log(cena / 100 * 60);
}


// 