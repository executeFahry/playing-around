// Decreasing Left Sided Triangle
// 1st way
let s = '';
let n = 5;

for (let i = 1; i <= n; i++) {
    for (let a = i; a <= n; a++) {
        s += '* ';
    }
    s += '\n';
}
console.log(s);

// // 2nd way
// let s = '';
// let n = 5;
// for (let i = n; i >= 1; i--) { 
//     for (let j = 1; j <= i; j++) { 
//         s += '* ';
//     }
//     s += '\n';
// }
// console.log(s);
