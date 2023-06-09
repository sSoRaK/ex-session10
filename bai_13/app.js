// bài 13
let sum = 0;

while (true) {
  const num = Number(prompt("Nhập số nguyên dương"));
  if (num >= 0) {
    sum += num;
  } else {
    // thoát vòng lặp khi num < 0
    break;
  }
}
console.log(sum);
