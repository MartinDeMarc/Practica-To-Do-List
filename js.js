const date = document.querySelector(".date");
const inputBox = document.querySelector(".inputArea input");
const addBtn = document.querySelector(".inputArea button");
const todoList = document.querySelector(".todolist");
const deleteAllBtn = document.querySelector(".bottom button");

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
}
