//  bài 11
// Điều kiện số hoàn hảo: là số có tổng các ước số bằng chính nó vd 6 = 1 + 2 + 3
// debugger;
let sum = 0;
const number = parseInt(prompt("Nhập 1 số nguyên n"));
for (let i = 0; i < number; i++) {
  if (number % i === 0) {
    // console.log(`Các ước số của ${number} là: ${i}`);
    sum += i; // cộng tất cả các ước số vừa tìm được vào biến sum
  }
  //  so sánh biến sum với number nhập vào đầu bài
  if (sum === number) {
    console.log(number + " là số hoàn hảo");
    break;
  } else {
    console.log(number + " không phải là số hoàn hảo");
  }
}
