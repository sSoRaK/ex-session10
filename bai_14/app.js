// bài 14
// khai báo biến n
let num = Number(prompt("nhập số nguyên n"));

for (let index = 2; index < num; index++) {
  let checkPrime = true; // true -> num là số nguyên tố
  for (let j = 2; j < Math.sqrt(index); j++) {
    // nếu j là ước của index thì -> index không là số nguyên tố, sau đó đặt checkPrime = false
    if (index % j === 0) {
      checkPrime = false;
      break;
    }
  }
  // khi (flags) checkPrime = true -> index là số nguyên tố
  if (checkPrime) {
    console.log(index);
  }
}
// B1: nhập vào số n
// let n = +prompt("Nhập số nguyên n");
// B2: duyệt các số từ 1 - n -> for(index)
// if (n > 1) {
//   for (let index = 2; index < n; index++) {
// B3: đặt cờ checkPrime = true (số nguyên tố)
//     let checkPrime = true;
// B3.1: duyệt từ 2 -> sqrt(index)
//     for (let j = 2; j <= Math.sqrt(index); j++) {
// B4: kiểm tra index xem có phải số nguyên tố hay không
//       if (index % j === 0) {
//  -> index % j == 0 -> checkPrime = false -> không phải số nguyên tố
//         // j là ước số của index -> index không phải là số nguyên tố
//         checkPrime = false;
//         break;
//       }
//     }
//     // nếu là số nguyên tố -> in ra
//     if (checkPrime) {
//       console.log(index);
//     }
//   }
// } else {
//   console.log("Không có số nguyên tố nào");
// }
