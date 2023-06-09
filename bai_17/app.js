// bài 17

let num1 = Number(prompt("Nhập số thứ nhất"));
let num2 = Number(prompt("Nhập số thứ hai"));
let num3 = Number(prompt("Nhập số thứ ba"));
let max = num1;
let min = num1;

if (max < num2) {
  max = num2;
}
if (max < num3) {
  max = num3;
}
if (min > num2) {
  min = num2;
}
if (min > num3) {
  min = num3;
}
console.log(max);
if (max != num1 && min != num1) {
  console.log(num1);
}
if (max != num2 && min != num2) {
  console.log(num2);
}
if (max != num3 && min != num3) {
  console.log(num3);
}
console.log(min);
