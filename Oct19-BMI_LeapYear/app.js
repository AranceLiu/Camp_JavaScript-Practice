// #1

function bodyMassIndex(height, weight) {
  return (BMI = Math.round(((weight / (height / 100) ** 2) * 100) / 100));
}

console.log(bodyMassIndex(160, 70));

// #2
function LeapYear(year) {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    return "是閏年";
  } else {
    return "不是閏年";
  }
}
console.log(LeapYear(1100));

// function isLeapYear(year) {
//   return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
// }
// console.log(isLeapYear(2200));
