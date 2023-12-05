// 編號：CANDY-002
// 程式語言：JavaScript
// 題目：請寫一小段程式，印出連續陣列裡缺少的字元

const chars1 = ["a", "b", "c", "d", "f", "g"]
const chars2 = ["O", "Q", "R", "S"]

function missingChar(chars) {
  const chars_num = chars.map((x) => x.charCodeAt())
  const conti = []
  for (let i = 0; i <= chars_num.length; i++) {
    conti.push(chars_num[0] + i)
  }
  const result = conti.find((x) => chars_num.indexOf(x) == -1)
  return String.fromCharCode(result)
}

console.log(missingChar(chars1)) // 印出 e
console.log(missingChar(chars2)) // 印出 P

// 提示：
// 可使用字串的 charCodeAt 方法...
