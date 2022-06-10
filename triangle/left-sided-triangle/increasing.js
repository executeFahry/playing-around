// Increasing Left Sided Triangle
let s = '';
let n = 5;

for (let i = 1; i <= n; i++) {
    for (let a = 1; a <= i; a++) {
        s += '* ';
    }
    s += '\n';
}
console.log(s);