a = [")", ")", "(", "(", ")", "(", ")", "(", "(", "(", ")", ")"]
let c = 0
let d = 0
let b
for (let i = 0; i < a.length; i++) {
    //console.log(a[i])
    b = a[i]
    if (b == ")") {
        //console.log("2135wd")
        c++
    }
    if (b == "(") {
        //console.log("213aregs5wd")
        d++
    }
}
if (c == d) {
    console.log("все гуд")
}


if (c % 2 == 1) {
    console.log("надо еще одну )")
}
if (d % 2 == 1) {
    console.log("надо еще одну (")
}

console.log(")", c)
console.log("(", d)
