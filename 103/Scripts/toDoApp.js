let toDoArray = [];
let taskNumber = 0;

function addToDo() {
  const addInput = document.getElementById("add-input");
  const addList = document.getElementById("add-list");
  const addCount = document.getElementById("add-count");

  const addNew = addInput.value;
  if (addNew === "") {
    alert("Please Enter a New Task ");
    return;
  }
  taskNumber++;
  toDoArray.push(addNew);

  addInput.value = "";

  const addItem = document.createElement("li");
  addItem.textContent = `${taskNumber}. ${addNew}`;
  addList.appendChild(addItem);

  addCount.textContent = toDoArray.length;

  console.log("Tasks: ", toDoArray);
}
