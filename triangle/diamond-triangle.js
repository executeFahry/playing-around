let n = 5;
let s = '';

for (let i = 1; i < n; i++) { // triangle
    for (let j = i; j <= n; j++) {
        s += '  ';
    }
    for (let k = 1; k < i; k++) {
        s += '* ';
    }
    for (let l = 1; l <= i; l++) {
        s += '* ';
    }
    s += '\n';
}

for (let m = 1; m <= n; m++) { // reverse triangle
    for (let o = 1; o <= m; o++) {
        s += '  ';
    }
    for (let p = m; p <= n; p++) {
        s += '* ';
    }
    for (let q = m; q < n; q++) {
        s += '* ';
    }
    s += '\n';
}

console.log(s);