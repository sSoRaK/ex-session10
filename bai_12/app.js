// bài 12
// 3672 -> 2763
let number = Number(prompt("Nhập số nguyên n:"));
let reverseNum = "", // cho reverseNum là chuổi rỗng
  digitsNum;

while (number > 0) {
  digitsNum = number % 10;
  reverseNum += digitsNum; // áp dụng toán tử cộng chuổi, cộng từng giá trị digitsNum vào chuổi rỗng
  number = Math.floor(number / 10);
}
console.log(reverseNum);
