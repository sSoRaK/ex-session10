// bài 2
let number1 = Number(prompt("Nhập số thứ nhất"));
let number2 = Number(prompt("Nhập số thứ hai"));
let number3 = Number(prompt("Nhập số thứ ba"));
let min = number1;
if (min > number2) {
  min = number2;
}
if (min > number3) {
  min = number3;
}
let max = number1;
if (max < number2) {
  max = number2;
}
if (max < number3) {
  max = number3;
}
console.log("số nhỏ nhất là " + min);
console.log("số lớn nhất là " + max);
