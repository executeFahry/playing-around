// Triangle/Hills
let n = 5;
let s = '';

for (let i = 1; i <= n; i++) {
  for (let j = i; j <= n; j++) {
    s += '  ';
  }
  for (let k = 1; k < i; k++) {
    s += '* ';
  }
  for (let l = 1; l <= i; l++) {
      s += '* '
  }
  s += '\n';
}
console.log(s);