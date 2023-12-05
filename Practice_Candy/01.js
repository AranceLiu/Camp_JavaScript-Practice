function sumOfSmallestValues(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  return arr[0] + arr[1];
}

const list1 = [19, 5, 42, 2, 77];
const list2 = [23, 15, 59, 4, 17];

console.log(sumOfSmallestValues(list1)); // 印出 7
console.log(sumOfSmallestValues(list2)); // 印出 19
