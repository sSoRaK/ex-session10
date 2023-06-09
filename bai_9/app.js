//  bài 9
const number = parseInt(prompt("Nhập 1 số nguyên n"));
for (let i = 0; i <= number; i++) {
  if (number % i === 0) {
    console.log(`Các ước số của ${number} là: ${i}`);
  }
}
