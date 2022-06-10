// Reverse Triangle/Hills
let s = '';
let n = 5;

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        s += '  ';
    }
    for (let k = i; k < n; k++) {
        s += '* ';
    }
    for (let l = i; l <= n; l++) {
        s += '* ';
    }
    s += '\n';
}
console.log(s);