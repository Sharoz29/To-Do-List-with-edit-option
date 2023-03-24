const form = document.querySelector(".tasks-form");
const input = document.querySelector(".tasks-input");
const submit = document.querySelector(".tasks-submit");
const list = document.querySelector(".task-list");
const tasks = document.querySelector(".tasks");
const allTasks = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const task = input.value;
  if (!task) return;

  const task_div = document.createElement("div");
  task_div.classList.add("task");
  tasks.appendChild(task_div);

  const task_content = document.createElement("div");
  task_content.classList.add("content");
  task_div.appendChild(task_content);

  const task_input = document.createElement("input");
  task_input.classList.add("text");
  task_input.type = "text";
  task_input.value = task;
  task_div.id = +new Date();
  task_input.setAttribute("readonly", "readonly");
  task_content.appendChild(task_input);
  allTasks.push(task_div);

  const task_action = document.createElement("div");
  task_action.classList.add("action");
  task_content.appendChild(task_action);

  const editBtn = document.createElement("button");
  editBtn.innerHTML = "Edit";
  editBtn.classList.add("edit");

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "Delete";
  deleteBtn.classList.add("delete");

  const completeBtn = document.createElement("button");
  completeBtn.innerHTML = "Completed";
  completeBtn.classList.add("complete");

  task_action.appendChild(editBtn);
  task_action.appendChild(deleteBtn);
  task_action.appendChild(completeBtn);

  completeBtn.addEventListener("click", complete);
  editBtn.addEventListener("click", edit);
  deleteBtn.addEventListener("click", deleted);

  function complete() {
    task_input.classList.toggle("strike");
  }
  function deleted() {
    tasks.removeChild(task_div);

    const index = allTasks.findIndex((task) => {
      if (task.id === task_div.id) return task.id;
    });
    allTasks.splice(index, 1);
  }

  function edit() {
    if (editBtn.innerText === "Edit") {
      task_input.removeAttribute("readonly");
      task_input.focus();
      editBtn.innerHTML = "Save";
    } else {
      task_input.setAttribute("readonly", "readonly");
      editBtn.innerHTML = "Edit";
    }
  }
  input.value = "";
});
