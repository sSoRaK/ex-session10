// bài 19

for (let number = 100; number < 1000; number++) {
  let digit1 = Math.floor(number / 100); // lấy chữ số hàng trăm
  let digit2 = Math.floor(number / 10) % 10; // lấy chữ số hàng chục
  let digit3 = number % 10; // lấy chữ số hàng đơn vị
  let checkNum = false;
  if (
    Math.pow(digit1, 3) + Math.pow(digit2, 3) + Math.pow(digit3, 3) ==
    number
  ) {
    checkNum = true;
  } else {
    checkNum = false;
  }
  if (checkNum) {
    console.log(`${number} là số Armstrong`);
  }
}
