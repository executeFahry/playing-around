// Increasing Right Sided Triangle
let s = '';
let n = 5;

for (let i = 1; i <= n; i++) {
    for (let a = i; a <= n; a++) {
        s += '  ';
    }
    for (let b = 1; b <= i; b++) {
        s += '* '
    }
    s += '\n';
}
console.log(s);