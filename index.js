let arr = ["a", "hello", 5, -10, true, "**", false, ["hi", true, 8, "*"]];
//          0      1     2   3     4    5     6              7 
let str = "revre eythyjuyk uyktki yhythythyt"
let count = 0
let sum = 0
// console.log(arr.length) // размер массива
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
