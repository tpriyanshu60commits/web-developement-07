let taskInput = document.getElementById("taskInput");
let addbutton = document.getElementById("button");
let taskList = document.getElementById("taskList");

addbutton.addEventListener("click", function () {
  let textValue = taskInput.value;
  textValue = textValue.trim();
  if (textValue == "") {
    alert("please add a task");
    return;
  }
  console.log(textValue);

//   let outerContainer = document.createElement("div");
//   outerContainer.className = "container border rounded-2 p-3";
//   // outerContainer.innerText = textValue;
//   // console.log(outerContainer);

//   let orderList = document.createElement("ol");

  let list = document.createElement("li");
  let taskContainer = document.createElement("div");
  taskContainer.className = "d-flex justify-content-between align-items-center";
  // taskContainer.innerText = textValue;
  // console.log(taskContainer);

  let span = document.createElement("span");
  span.innerText = textValue;

  let deleteButton = document.createElement("button");
  deleteButton.className = "btn btn-danger px-5 me-3 d-flex gap-2 mt-2";
  deleteButton.innerHTML  = `<i class="bi bi-trash3"></i> Delete`;

  deleteButton.addEventListener("click", function()
{
    list.remove();
})
taskContainer.appendChild(span);
taskContainer.appendChild(deleteButton);
list.appendChild(taskContainer);
taskList.appendChild(list);
taskInput.value="";
});



