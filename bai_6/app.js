// bài 6
let a = parseInt(prompt("Nhập độ dài cạnh a"));
let b = parseInt(prompt("Nhập độ dài cạnh b"));
let c = parseInt(prompt("Nhập độ dài cạnh c"));

if (a + b > c && a + c > b && b + c > a) {
  if (a == b && a == c) {
    console.log(`a= ${a}, b= ${b}, c= ${c} là 3 cạnh của tam giác đều`);
  } else if (a == b || b == c || a == c) {
    console.log(`a= ${a}, b= ${b}, c= ${c} là 3 cạnh của tam giác cân`);
  } else if (
    a * a + b * b == c * c ||
    a * a + c * c == b * b ||
    b * b + c * c == a * a
  ) {
    console.log(`a= ${a}, b= ${b}, c= ${c} là 3 cạnh của tam giác vuông`);
  } else if (
    (a * a + b * b == c * c && a == b) ||
    (a * a + c * c == b * b && a == c) ||
    (b * b + c * c == a * a && b == c)
  ) {
    console.log(`a= ${a}, b= ${b}, c= ${c} là 3 cạnh của tam giác vuông cân`);
  } else {
    console.log(`a= ${a}, b= ${b}, c= ${c} là 3 cạnh của tam giác thường`);
  }
} else {
  console.log(`a= ${a}, b= ${b}, c= ${c} không thể là 3 cạnh của tam giác`);
}
