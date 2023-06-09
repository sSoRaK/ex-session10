//  bài 10
// điều kiện SNT chia hết cho 1 và chính nó
const number = parseInt(prompt("Nhập 1 số nguyên n"));
if (number < 2) {
  console.log(`${number} không là số nguyên tố`);
} else {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i == 0) {
      console.log(`${number} không là số nguyên tố`);
      break;
    } else {
      console.log(`${number} là số nguyên tố`);
    }
  }
}
