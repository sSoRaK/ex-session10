// bài 16
// Nhập vào 3 số, in ra dấu (+) hoặc (-) của tích 3 số
// B1: nhập vào 3 số num1, num2, num3
let num1 = +prompt("Nhập số nguyên num3");
let num2 = +prompt("Nhập số nguyên num2");
let num3 = +prompt("Nhập số nguyên num3");
// B2: tính tích của 3 số result
let result = num1 * num2 * num3;
// B3: result < 0 -> (-), result > 0 -> (+), result = 0 -> 0
if (result < 0) {
  console.log("tích của ba số là: - ");
} else if (result > 0) {
  console.log("tích của ba số là: + ");
} else {
  console.log("tích của ba số là: 0");
}
