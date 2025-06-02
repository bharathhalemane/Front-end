//accessing add button and save button
let addTodoButton = document.getElementById("addTodoButton");
let saveButton = document.getElementById("saveButton");

//creating function line through and deleting todo
function todoChanges(checkBoxId, labelId, todoId) {
  let checkboxElement = document.getElementById(checkBoxId);
  let labelElement = document.getElementById(labelId);
  labelElement.classList.toggle("checked");

  let todoObjectIndex = todoList.findIndex(function (eachTodo) {
    let eachTodoId = "todo" + eachTodo.uniqueNo;
    if (eachTodoId === todoId) {
      return true;
    } else {
      return false;
    }
  });
  let todoObject = todoList[todoObjectIndex];
  if (todoObject.isChecked === false) {
    todoObject.isChecked = true;
  } else {
    todoObject.isChecked = false;
  }
}

function deletingTodo(todoId) {
  let todoElement = document.getElementById(todoId);
  todoItemsContainer.removeChild(todoElement);
  let deletedTodoItemIndex =
    todoList.findIndex(function (eachTodo) { //creating function
      let eachTodoId = "todo" + eachTodo.uniqueNo;
      if (eachTodoId === todoId) {
        return true;
      } else {
        return false;
      }
    });
  todoList.splice(deletedTodoItemIndex, 1);
}

//getting todo list from local storage
function getTodoListFromLocalStorage() {
  let stringifiedTodoList = localStorage.getItem("todoList");     //getting todo list from local storage
  let parsedTodoList = JSON.parse(stringifiedTodoList);           //parsing todo list
  if (parsedTodoList === null) {
    return [];
  } else {
    return parsedTodoList;
  }
}

//removing todoItem in localStorage and updating todoList
// function removingTodoList(uniqueNo) {
//   let newTodoList = todoList.filter(
//     item => item.uniqueNo !== uniqueNo
//   );
//   todoList = newTodoList;
// }

//creating todo list and todo count
let todoList = getTodoListFromLocalStorage();
let todoCount = 0;

//creating and appending todo
function createAndAppendTodo(todo) {
  //creating elements
  let checkBoxId = "checkBox" + todo.uniqueNo;
  let labelId = "label" + todo.uniqueNo;
  let todoId = "todo" + todo.uniqueNo;
  let todoItemsContainer = document.getElementById("todoItemsContainer"); //getting todoItemsContainer
  let todoElement = document.createElement("li"); //creating li element
  todoElement.id = todoId;
  todoElement.classList.add("todo-item");
  todoItemsContainer.appendChild(todoElement);

  let inputElement = document.createElement("input");  //creating input element
  inputElement.type = "checkbox";
  inputElement.id = checkBoxId;
  inputElement.checked = todo.isChecked;
  todoElement.appendChild(inputElement);

  inputElement.onclick = function () {  //event listener for checkbox
    todoChanges(checkBoxId, labelId, todoId);               //calling todoChanges function
  };

  let taskContainerElement = document.createElement("div");   //creating div element for task container
  taskContainerElement.classList.add("task-container");       //adding class to task container
  todoElement.appendChild(taskContainerElement);

  let labelElement = document.createElement("label");         //creating label element for todo text
  labelElement.setAttribute("for", checkBoxId);
  labelElement.textContent = todo.text;
  labelElement.id = labelId;
  if (todo.isChecked === true) {
    labelElement.classList.add("checked");
  }
  taskContainerElement.appendChild(labelElement);


  let taskContainerElement2 = document.createElement("div");  //creating div element for task container2 which container icon element
  taskContainerElement2.classList.add("task-container2");

  let iconELement = document.createElement('i');         //creating icon element
  iconELement.classList.add("fa-solid", "fa-trash");
  iconELement.onclick = function () {                      //event listener for icon element
    deletingTodo(todoId);                                  //calling deletingTodo function
    // removingTodoList(todo.uniqueNo);                       //calling removingTodoList function
  }

  taskContainerElement2.appendChild(iconELement);
  todoElement.appendChild(taskContainerElement2);
}

//adding todo
function onAddTodo() {
  let inputEl = document.getElementById("taskInput");
  let inputValue = inputEl.value;
  if (inputValue === "") {
    alert("Enter Valid Text");            //alert if input value is empty
    return;
  }
  todoCount = todoCount + 1;

  let newTodo = {
    text: inputValue,
    uniqueNo: todoCount,
    isChecked: false
  };
  todoList.push(newTodo);
  createAndAppendTodo(newTodo);
  inputEl.value = "";
}

//looping through todo list
for (let todo of todoList) {
  createAndAppendTodo(todo);
}

//event listener for add button and save button
addTodoButton.onclick = function () {
  onAddTodo();
}

saveButton.onclick = function () {
  localStorage.setItem("todoList", JSON.stringify(todoList));
}


