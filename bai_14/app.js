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

// bài 18
// in ra các số từ 1 - 100
// chia hết cho 3: Fizz
// chia hết cho 5: Buzz
// chia hết cho 3 và 5: FizzBuzz
// B1: duyệt các số từ 1 - 100
// B2: check chia hết cho 3
// B3: check chia hết cho 5
// B4: result

// for (let i = 1; i <= 100; i++) {
//   let checkFizz = false;
//   if (i % 3 === 0) {
//     checkFizz = true; // chia hết cho 3
//   }
//   let checkBuzz = false;
//   if (i % 5 === 0) {
//     checkBuzz = true;
//   }
//   // result
//   if (checkFizz && !checkBuzz) {
//     console.log("checkFizz");
//   } else if (!checkFizz && checkBuzz) {
//     console.log("checkBuzz");
//   } else if (checkFizz && checkBuzz) {
//     console.log("checkFizzBuzz");
//   }
// }

// bài 21
/*
tàu con thoi RA:
  input: 
  - 5000 < nhiên liệu <= 30000
  - 1 < phi hành gia <=7
  process: 
  - độ cao = 50km -> 100 (nhiên liệu) * phi hành gia
  output:
  - độ cao tối đa
  - số nhiên liệu còn lại
*/
/*
  B1: nhập vào nhiên liệu vào phi hành gia
  validValue nhiên liệu: number (5000 - 30000)
  validValue phi hành gia: number (1 - 7)
*/
// let resource, pilot;
// do {
//   resource = Number(prompt("Nhập vào số nhiên liệu"));
//   if (isNaN(resource)) {
//     console.log("Nhập lại số nhiên liệu là một số");
//   } else {
//     if (resource < 5000 || resource > 30000) {
//       console.log("Nhập lại số nguyên liệu trong khoảng 5000 - 30000");
//     } else {
//       pilot = Number(prompt("Nhập vào số phi hành gia"));
//       if (isNaN(pilot)) {
//         console.log("Nhập lại số phi hành gia là một số");
//       } else {
//         if (pilot < 1 || pilot > 7) {
//           console.log("Nhập lại số phi hành gia 1 - 7");
//         } else {
//           break;
//         }
//       }
//     }
//   }
// } while (true);
// // B2: tính độ cao tối đa và nhiên liệu còn lại
// // B2.1: 1 lần tăng độ cao 50km thì cần bao nhiên liệu?
// let resource50km = 100 * pilot;
// // B2.2: tàu con thoi tăng độ cao bao nhiêu lần?
// let times = Math.floor(resource / resource50km);
// // B2.3: độ cao tối đa tàu đạt được
// let maxHeight = resource * times;
// // B2.4: số nhiên liệu còn lại của tàu
// let resourceRemainder = maxHeight - resource;
// // B3: result
// console.log(resource);
// console.log(pilot);
// console.log("1 lần tăng độ cao 50km thì cần " + resource50km + " nhiên liệu");
// console.log("tàu con thoi tăng độ cao được " + times + " lần");
// console.log("độ cao tối đa tàu đạt được: " + maxHeight);
// console.log("số nhiên liệu còn lại của tàu: " + resourceRemainder);

// bài 17

// let num1 = Number(prompt("Nhập số thứ nhất"));
// let num2 = Number(prompt("Nhập số thứ hai"));
// let num3 = Number(prompt("Nhập số thứ ba"));
// let max = num1;
// let min = num1;

// if (max < num2) {
//   max = num2;
// }
// if (max < num3) {
//   max = num3;
// }
// if (min > num2) {
//   min = num2;
// }
// if (min > num3) {
//   min = num3;
// }
// console.log(max);
// if (max != num1 && min != num1) {
//   console.log(num1);
// }
// if (max != num2 && min != num2) {
//   console.log(num2);
// }
// if (max != num3 && min != num3) {
//   console.log(num3);
// }
// console.log(min);

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

// bài 20
// in ra các số [-20, 0]
// for (let i = -20; i <= 0; i++) {
//   console.log(i);
// }

// in ra các số lẻ từ [-29, 3]
// for (let j = -29; j <= 3; j++) {
//   if (j % 2 !== 0) {
//     console.log(j);
//   }
// }

// in ra các số chẵn từ [-14, 12]
// for (let k = -14; k <= 12; k += 2) {
//   console.log(k);
// }

// in các số là bội của 3 từ [20, 50]
// for (let t = 20; t <= 50; t++) {
//   if (t % 3 === 0) {
//     console.log(t);
//   }
// }
