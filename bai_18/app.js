// bài 18
// in ra các số từ 1 - 100
// chia hết cho 3: Fizz
// chia hết cho 5: Buzz
// chia hết cho 3 và 5: FizzBuzz
// B1: duyệt các số từ 1 - 100
// B2: check chia hết cho 3
// B3: check chia hết cho 5
// B4: result

for (let i = 1; i <= 100; i++) {
  let checkFizz = false;
  if (i % 3 === 0) {
    checkFizz = true; // chia hết cho 3
  }
  let checkBuzz = false;
  if (i % 5 === 0) {
    checkBuzz = true;
  }
  // result
  if (checkFizz && !checkBuzz) {
    console.log("checkFizz");
  } else if (!checkFizz && checkBuzz) {
    console.log("checkBuzz");
  } else if (checkFizz && checkBuzz) {
    console.log("checkFizzBuzz");
  }
}
