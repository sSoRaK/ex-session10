// bài 4
let number1 = Number(prompt("Nhập số đầu tiên"));
let number2 = Number(prompt("Nhập số thứ hai"));
let calMethod = prompt("Nhập phương thức tính");
switch (calMethod) {
  case "+":
    console.log(number1 + number2);
    break;
  case "-":
    console.log(number1 - number2);
    break;
  case "*":
    console.log(number1 * number2);
    break;
  default:
    console.log(number1 / number2);
}
