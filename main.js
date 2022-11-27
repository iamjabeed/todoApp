// MODEL
let todos = [{
  title: "eat",
  dueDate: "2022-11-27",
  id: 'id1'
},
{
  title: "code",
  dueDate: "2022-11-27",
  id: 'id2'
},
{
  title: "sleep",
  dueDate: "2022-11-27",
  id: 'id3'
},
{
  title: "repeat",
  dueDate: "2022-11-27",
  id: 'id4'
}];
// CREATE TODO 

function createTodo(title, dueDate) {
  const id = new Date().getTime();

  todos.push({
    title: title,
    dueDate: dueDate,
    id: id
  });
  saveTodo();
}
// DELETE TODO 
function removeTodo(idToDelete) {
  todos = todos.filter(function (todo) {
    // if the id of this todo matches idToDelete, return false
    // else, return true
    if (todo.id == idToDelete) {
      return false;
    }
    else {
      return true;
    }
  });
  saveTodo();
}

render();

function saveTodo() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

// CONTROLLER 
function addToDo() {
  const textbox = document.getElementById("todo-item");
  const title = textbox.value;
  const datePicker = document.getElementById("date-picker");
  const dueDate = datePicker.value;
  createTodo(title, dueDate);

  render();
}
function deleteTodo(event) {
  const deleteButton = event.target;
  const idToDelete = deleteButton.id;
  removeTodo(idToDelete);

  render();
}


// VIEW 
function render() {
  // reset
  document.getElementById("todo-list").innerHTML = "";
  todos.forEach(function (todo) {
    const element = document.createElement('div');
    element.innerText = todo.title + " " + todo.dueDate;

    const deleteButton = document.createElement("button");  //  delete button 
    deleteButton.innerText = "delete";
    deleteButton.style = "margin-left:14px;"
    deleteButton.onclick = deleteTodo;
    deleteButton.id = todo.id;
    element.appendChild(deleteButton);

    const todoList = document.getElementById("todo-list");
    todoList.appendChild(element);
  });
}










// excercises

// function doneBtn() {
//   let btn = document.getElementById("todo-button");
//   btn.innerText = "done";
// }


// let count = 0;
// function inccoutnt() {
//   count = count + 1;
//   let counter = document.getElementById("counter");
//   counter.innerText = count;
// }