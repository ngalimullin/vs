a = [")", ")", "(", "(", ")", ")", ")", ")", "(", "(", "(", "(", "(", "(", "(", "(", "(", "(", "(", "(", "(", "(", "(", "(", "(", "(", "("]
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

    console.log("надо еще )")
}
if (d % 2 == 1) {
    console.log("надо еще (")
}

if (c > d) {

    console.log("надо еще )", c - d)
}
if (d > c) {
    console.log("надо еще (", d - c)
}



console.log(")c", c)
console.log("(d", d)
