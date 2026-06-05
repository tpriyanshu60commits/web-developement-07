document.querySelector(".btn").addEventListener("click", function (event) {
  event.preventDefault();
  let taskvalue = document.getElementById("newTask").value;

  const LI = document.createElement("li");
  LI.classList.add("my-3");

  const DIV = document.createElement("div");
  DIV.classList.add("d-flex", "align-items-center", "gap-3");

  const SPAN1 = document.createElement("span");
  SPAN1.innerText = taskvalue;

  const BUTTON = document.createElement("button");
  BUTTON.classList.add("btn", "btn-danger", "d-flex", "gap-2");

  const I = document.createElement("i");
  I.classList.add("bi", "bi-trash3-fill");

  const SPAN2 = document.createElement("span");
  SPAN2.innerText = "Delete";

  BUTTON.appendChild(I);
  BUTTON.appendChild(SPAN2);
  DIV.appendChild(SPAN1);
  DIV.appendChild(BUTTON);
  LI.appendChild(DIV);
  document.getElementById("orderlist").appendChild(LI);
  BUTTON.onclick = () => {
    LI.remove();
    removeTaskFromLocalStorage(taskvalue);
  };
  document.getElementById("newTask").value = "";
  saveToLocalStorage(taskvalue);
});

function saveToLocalStorage(taskvalue) {
  const TaskArray = JSON.parse(localStorage.getItem("newTaskArray")) || [];
  // console.log(TaskArray);

  TaskArray.push(taskvalue);
  const newTaskArray = JSON.stringify(TaskArray);
  localStorage.setItem("newTaskArray", newTaskArray);
}

function getTaskFromLocalStorage() {
  const savedDataArray = JSON.parse(localStorage.getItem("newTaskArray")) || [];
  // console.log(savedDataArray);
  savedDataArray.forEach((items) => {
    const LI = document.createElement("li");
    LI.classList.add("my-3");

    const DIV = document.createElement("div");
    DIV.classList.add("d-flex", "align-items-center", "gap-3");

    const SPAN1 = document.createElement("span");
    SPAN1.innerText = items;

    const BUTTON = document.createElement("button");
    BUTTON.classList.add("btn", "btn-danger", "d-flex", "gap-2");

    const I = document.createElement("i");
    I.classList.add("bi", "bi-trash3-fill");

    const SPAN2 = document.createElement("span");
    SPAN2.innerText = "Delete";

    BUTTON.appendChild(I);
    BUTTON.appendChild(SPAN2);
    DIV.appendChild(SPAN1);
    DIV.appendChild(BUTTON);
    LI.appendChild(DIV);
    document.getElementById("orderlist").appendChild(LI);
    BUTTON.onclick = () => {
      LI.remove();
      removeTaskFromLocalStorage(items);
    };
  });
}
getTaskFromLocalStorage();

function removeTaskFromLocalStorage(taskItem) {
  const taskArray = JSON.parse(localStorage.getItem("newTaskArray")) || [];
  console.log(taskArray);

  const newTaskArray = taskArray.filter((items) => items != taskItem);
  console.log(newTaskArray);
  localStorage.setItem("newTaskArray",JSON.stringify(newTaskArray));
  
}
