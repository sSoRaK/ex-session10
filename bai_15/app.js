// bài 15

let amount = Number(prompt("Nhập số tiền gửi"));
let rateOfYear = Number(prompt("Nhập lãi suất năm"));
let months = Number(prompt("Nhập số tháng gửi"));
let interest = 0; // tổng số tiền lãi
let lastetAmount; // tiền lãi mỗi tháng
let rateMonth = rateOfYear / 12;
// tính tiền lãi hàng tháng
for (let index = 1; index <= months; index++) {
  interest = (amount * rateMonth) / 100;
  // cộng tiền lãi
  amount += interest;
}
// in ra tiền nhận sau khi kết thúc gửi: amount
console.log(amount);
// in ra tiền lãi nhận được sau khi kết thúc gửi: interest
console.log(interest);
