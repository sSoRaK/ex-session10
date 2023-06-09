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
  validValue nhiên liệu: number (5000 - 30000]
  validValue phi hành gia: number (1 - 7]
*/
let resource, pilot;
do {
  resource = Number(prompt("Nhập vào số nhiên liệu"));
  if (isNaN(resource)) {
    console.log("Nhập lại số nhiên liệu là một số");
  } else {
    if (resource < 5000 || resource > 30000) {
      console.log("Nhập lại số nguyên liệu trong khoảng 5000 - 30000");
    } else {
      pilot = Number(prompt("Nhập vào số phi hành gia"));
      if (isNaN(pilot)) {
        console.log("Nhập lại số phi hành gia là một số");
      } else {
        if (pilot < 1 || pilot > 7) {
          console.log("Nhập lại số phi hành gia 1 - 7");
        } else {
          break;
        }
      }
    }
  }
} while (true);
// // B2: tính độ cao tối đa và nhiên liệu còn lại
// // B2.1: 1 lần tăng độ cao 50km thì cần bao nhiên liệu?
let resource50km = 100 * pilot;
// // B2.2: tàu con thoi tăng độ cao bao nhiêu lần?
let times = Math.floor(resource / resource50km);
// // B2.3: độ cao tối đa tàu đạt được
let maxHeight = resource * times;
// // B2.4: số nhiên liệu còn lại của tàu
let resourceRemainder = maxHeight - resource;
// // B3: result
console.log(resource);
console.log(pilot);
console.log("1 lần tăng độ cao 50km thì cần " + resource50km + " nhiên liệu");
console.log("tàu con thoi tăng độ cao được " + times + " lần");
console.log("độ cao tối đa tàu đạt được: " + maxHeight);
console.log("số nhiên liệu còn lại của tàu: " + resourceRemainder);
