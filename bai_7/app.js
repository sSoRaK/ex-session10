// bài 7
const month = parseInt(prompt("type of month"));
const year = parseInt(prompt("type of year"));
switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log(`tháng ${month}/${year} có 31 ngày`);
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    console.log(`tháng ${month}/${year} có 31 ngày`);
    break;
  default:
    if (
      (month === 2 && year % 4 === 0 && year % 100 !== 0) ||
      year % 400 === 0
    ) {
      alert(`tháng ${month}/${year} có 29 ngày`);
    } else {
      alert(`tháng ${month}/${year} có 28 ngày`);
    }
    break;
}
