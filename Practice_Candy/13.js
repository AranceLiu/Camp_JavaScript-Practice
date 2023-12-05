// 編號：CANDY-013
// 程式語言：JavaScript
// 題目：根據台灣財政部所提供的公司統編驗證規則，計算統一編號是否正確
// https://www.fia.gov.tw/singlehtml/3?cntId=c4d9cff38c8642ef8872774ee9987283

function isValidVatNumber(vat) {
  const logic = [1, 2, 1, 2, 1, 2, 4, 1]
  const result = vat
    .toString()
    .split("")
    .map((elem, ind) => elem * logic[ind])
    .map((e) =>
      e
        .toString()
        .split("")
        .reduce((sum, x) => sum + Number(x), 0)
        .toString()
        .split("")
        .reduce((sum, x) => sum + Number(x), 0)
    )

  if (vat[6] == "7") {
    result.splice(6, 1, 0)
    const result0 = result.reduce((sum, x) => sum + x) % 5 == 0
    result.splice(6, 1, 1)
    const result1 = result.reduce((sum, x) => sum + x) % 5 == 0
    return result0 || result1
  } else {
    return result.reduce((sum, x) => sum + x) % 5 == 0
  }
}

console.log(isValidVatNumber("10458575")) // true
console.log(isValidVatNumber("88117125")) // true
console.log(isValidVatNumber("53212539")) // true
console.log(isValidVatNumber("88117126")) // false
