const date = document.querySelector(".date");
const inputBox = document.querySelector(".inputArea input");
const addBtn = document.querySelector(".inputArea button");
const todoList = document.querySelector(".todolist");
const deleteAllBtn = document.querySelector(".bottom button");
const btnCheckBox = document.querySelector(".todoList li input");
const finishedTasksItem = document.querySelector(".finishedTasks");
const time = document.querySelector(".time");
let finishedTasks = 0;

const DATE = new Date();
date.innerHTML = DATE.toLocaleDateString("es-MX", {
  weekday: "long",
  month: "short",
  day: "numeric",
});

inputBox.onkeyup = () => {
  let userEnterValue = inputBox.value;
  if (userEnterValue.trim() != 0) {
    addBtn.classList.add("active");
  } else {
    addBtn.classList.remove("active");
  }
};

showTasks();
addBtn.onclick = () => {
  let userEnterValue = inputBox.value;
  let getLocalStorageData = localStorage.getItem("New Todo");
  if (getLocalStorageData == null) {
    listaArray = [];
  } else {
    getLocalStorageData = JSON.parse(getLocalStorageData);
  }
  listaArray.push(userEnterValue);
  localStorage.setItem("New Todo", JSON.stringify(listaArray));
  showTasks();
  addBtn.classList.remove("active");
};

function showTasks() {
  let getLocalStorageData = localStorage.getItem("New Todo");
  if (getLocalStorageData == null) {
    listaArray = [];
  } else {
    listaArray = JSON.parse(getLocalStorageData);
  }
  const pendingTaskNumb = document.querySelector(".pendingTask");
  pendingTaskNumb.textContent = listaArray.length;
  if (listaArray.length > 0) {
    deleteAllBtn.classList.add("active");
  } else {
    deleteAllBtn.classList.remove("active");
  }
  let newLiTag = "";
  listaArray.forEach((element, index) => {
    newLiTag += `<li> <input type="checkbox" onclick="btncheckf()">${element}<span class="icon" onclick="deleteTask(${index})"<i class="fa-solid fa-trash"></i></span></li>`;
  });
  todoList.innerHTML = newLiTag;
  inputBox.value = "";
}

function deleteTask(index) {
  let getLocalStorageData = localStorage.getItem("New Todo");
  listaArray = JSON.parse(getLocalStorageData);
  listaArray.splice(index, 1);
  localStorage.setItem("New Todo", JSON.stringify(listaArray));
  showTasks();
}

deleteAllBtn.onclick = () => {
  listaArray = [];
  localStorage.setItem("New Todo", JSON.stringify(listaArray));
  showTasks();
};

function btncheckf(index) {
  let getLocalStorageData = localStorage.getItem("New Todo");
  listaArray = JSON.parse(getLocalStorageData);
  listaArray.splice(index, 1);
  localStorage.setItem("New Todo", JSON.stringify(listaArray));
  showTasks();
  finishedTasks++;
  finishedTasksItem.innerHTML = finishedTasks.toString();
}
