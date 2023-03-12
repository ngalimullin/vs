let a = 'c';
let b = 'c';

if (a.toUpperCase() === a.toLowerCase() || b.toLowerCase() === b.toLowerCase()) {
    return -1
}
else if (a === a.toLowerCase() && b === b.toLowerCase || a === a.toLowerCase() && b === b.toUpperCase()) {
    return 1
}
else return 0;