// bài 5
let scoreHtml = parseFloat(prompt("Nhập điểm HTML"));
let scoreCss = parseFloat(prompt("Nhập điểm CSS"));
let scoreJs = parseFloat(prompt("Nhập điểm JS"));
let scoreAverage = (scoreHtml + scoreCss + scoreJs) / 3;
if (scoreAverage < 5) {
  console.log("Yếu");
} else if (scoreAverage >= 5 && scoreAverage < 6) {
  console.log("Kém");
} else if (scoreAverage >= 6 && scoreAverage < 7) {
  console.log("Trung Bình");
} else if (scoreAverage >= 7 && scoreAverage < 8) {
  console.log("Khá");
} else if (scoreAverage >= 8 && scoreAverage < 9) {
  console.log("Giỏi");
} else {
  console.log("Xuất sắc");
}
