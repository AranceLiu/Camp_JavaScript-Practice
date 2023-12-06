// 程式碼寫在這裡
// 提示：BMI = 體重(kg) / 身高(m) 平方

document.addEventListener("DOMContentLoaded", () => {
  const Height = document.querySelector("#bodyHeight");
  const Weight = document.querySelector("#bodyWeight");
  const result = document.querySelector("#resultText");
  const btn = document.querySelector("button");

  btn.addEventListener("click", () => {
    let h = Number(Height.value / 100);
    let w = Number(Weight.value);
    let bmi = w / h ** 2;
    result.textContent = Math.round(bmi * 100) / 100;
  });
});
