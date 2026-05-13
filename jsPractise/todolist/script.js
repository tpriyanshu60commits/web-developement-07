let textInput = document.getElementById("taskInput");
let addButton = document.getElementById("button");
let taskList =document.getElementById("taskList");

addButton.addEventListener("click", function()
{
    let taskValue = textInput.value.trim();
    // console.log(taskValue);
    if(taskValue==="")
    {
        alert("please enter a task");
        return;
    }
    let list = document.createElement("li");
    // console.log(list);
    list.classList.add("mb-2");
    let taskContainer = document.createElement("div");
    taskContainer.className = " d-flex justify-content-between align-items-center";
    // console.log(taskContainer);
    
    let span = document.createElement("span");
    span.innerText = taskValue;
    let deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-danger px-5 me-3 d-flex gap-2 mt-2";

    deleteButton.innerHTML = `<i class="bi bi-trash3"></i> Delete`;

    deleteButton.addEventListener("click" , function()
{
    list.remove();
})

taskContainer.appendChild(span);
taskContainer.appendChild(deleteButton);

list.appendChild(taskContainer);
taskList.appendChild(list);

 taskInput.value = "";





})
