// bài 8
const number = parseInt(prompt("Nhập 1 số nguyên n"));
let sum = 0;
for (let i = 0; i <= number; i++) {
  if (i % 2 === 0) {
    console.log(i);
    sum += i;
  }
}
console.log(sum);
