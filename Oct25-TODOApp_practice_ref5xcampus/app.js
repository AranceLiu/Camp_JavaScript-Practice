document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.querySelector("#taskInput");
  const addbtn = document.querySelector("#addBtn");
  const todoList = document.querySelector(".todo-list");

  const createTaskItem = () => {
    const todoItem = `<li class="todo-item">
  <span class="item">${taskInput.value}</span>
  <button class="closeBtn">X</button>
</li>`;
    todoList.insertAdjacentHTML("afterbegin", todoItem);
    taskInput.value = "";
    taskInput.focus();
  };

  addbtn.addEventListener("click", () => {
    createTaskItem();
  });

  taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      createTaskItem();
    }
  });

  todoList.addEventListener("click", (e) => {
    if (e.target.nodeName === "BUTTON") {
      e.target.parentNode.remove();
    }
  });
});
