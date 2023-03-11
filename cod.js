////////// "You are the best QA ever"
var str = "Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr"
var i
var s = ""
var s2 = ""
var s3 = ""
for (i = 0; i < str.length; i = i + 3) {
    s = s + str[i]
}
console.log(s)

///////// Code    YYrrbbuurrbbaarrbbeerrbbttrrbbeerrbbbbrrbbssrrbb  rrbbAArrbbeerrbbeerrbb

for (i = 0; i < str.length; i = i + 2) {
    s2 = s2 + str[i] + str[i]
}
console.log(s2)

//////// decode

for (i = 0; i < s2.length; i = i + 3) {
    s3 = s3 + str[i]
}
console.log(s3)
