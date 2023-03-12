let arr = ["a", "hello", 5, -10, true, "**", false, ["hi", true, 8, "*"]];
//          0      1     2   3     4    5     6              7 
let str = "revre eythyjuyk uyktki yhythythyt"
let count = 0
let sum = 0
// console.log(arr.length) // размер массива
/*

for (i = 0; i < arr.length; i++) {    // если  (i = 0; i < arr.length - 1; i++) вычтит 1 из массива с конца
    // console.log(arr[i]) // текущий элемент массива
    // console.log(i) // i элемент массив
    // console.log(typeof arr[i]) // тип каждого элемента
    if (typeof arr[i] == "number") {   // выводит сколько цифр (number) в массиве
        // count = count + 1 // можно count +=1    count++ - покажет сколько всего цифр в массиве 2 шт
        sum += arr[i] // посчитает сумму всех чисел в массиве
        console.log(sum)
    }

}
*/

/*
let arr2 = ["a", "hello", 995, 888, true, "**", false, ["hi", true, 8, "*"]];


for (i = 0; i < arr2.length; i++) {
    if (i % 2 == 0) {
        console.log(arr2[i]);  //все четные массива
    }

}
*/

/*
sum2 = ""
for (i = 0; i < arr.length; i++)
    if (typeof arr[i] == "string") {     // можно добавить условие (typeof arr[i] == "string" && arr[i].length > 3)
        // sum2 = sum2 + arr[i] + " "     // выводим все стринг 
        // console.log(arr[i].length); // сколько символов в каждом элементе
        if (arr[i].length > 3) {
            console.log(arr[i]); // элемент массива с более 3 символами можно выше
        }
    }
console.log(sum2);

*/

for (let i = arr.length - 1; i >= 0; i--) {   // в обратной последовательности

    console.log(arr[i]); // 
}

