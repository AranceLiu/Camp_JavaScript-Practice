const input = document.querySelector("#inp")
const output = document.querySelector("#out")
console.log(input.value)

input.addEventListener("keyup", () => {
  if (Number(input.value)) {
    output.value = input.value * 32.4
  } else if (input.value == "") {
    output.value = ""
  } else {
    output.value = "請輸入數字型態的美金"
  }
})

output.addEventListener("keyup", () => {
  if (Number(output.value)) {
    input.value = output.value / 32.4
  } else if (output.value == "") {
    input.value = ""
  } else {
    input.value = "請輸入數字型態的台幣"
  }
})
