// 程式碼寫在這裡

document.addEventListener("DOMContentLoaded", () => {
  const minus = document.querySelector("#minus");
  const plus = document.querySelector("#plus");
  const counter = document.querySelector("#counter");

  minus.addEventListener("click", () => {
    if (Number(counter.value) > 0) {
      counter.value = Number(counter.value) - 1;
    }
  });

  plus.addEventListener("click", () => {
    counter.value = Number(counter.value) + 1;
  });
});
