const form = document.querySelector(".form");
const input = document.querySelector("#task");
const container = document.querySelector(".tasks-container");

form.onsubmit = (e) => {
  if (input.value === "") return; 
  let task = input.value;
  let taskDiv = document.createElement("div");
  let delBtn = document.createElement("button");
  taskDiv.textContent = task;
  delBtn.textContent = "Delete";
  container.append(taskDiv);
  taskDiv.append(delBtn);
  delBtn.onclick = () => {
    taskDiv.remove();
  };
  e.preventDefault();
  input.value = "";
};
