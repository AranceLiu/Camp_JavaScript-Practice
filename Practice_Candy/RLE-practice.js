function RLE(data) {
  let result = ""
  let total = 1
  for (let i = 0; i < data.length; i++) {
    if (data[i] == data[i + 1]) {
      total = total + 1
    } else {
      result = result + data[i] + total
      total = 1
    }
  }
  return result
}

console.log(RLE("AAAAAABBBCCDDD")) // A6B3C2D3
console.log(RLE("ABBCDD")) // A1B2C1D2
console.log(RLE("xyzzz")) // x1y1z3
