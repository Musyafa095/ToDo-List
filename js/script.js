const inputBox = document.getElementById['inpuBox'];
const addBtn=document.getElementById['addBtn'];
const todoList=document.getElementById['todoList'];

let editTodo = null;

const addTodo = () => {
  const inputText = inputBox.value.trim();
  if (inputText.length <= 0){
    alert('please enter valid task')
    return false;
  }
  if(addBtn.value === 'Edit'){
    editLocalTodos(editTodo.target.previousElementSibling.innerHTML= inputText);
    editTodo.target.previousElementSibling.innerHTML=inputText;
    addBtn.value = 'Add';
    inputBox.value ="";
  }else {
   const li = document.createElement("li")
   const p = document.createElement("p")
    p.innerHTML = inputText;
    li.appendChild(p);

    //creating edit Btn
    const editBtn = document.createElement("button");
    editBtn.innerText="Edit";
    editBtn.classList.add("btn", "editBtn");
    li.appendChild(editBtn);

    //creating delete Btn
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText="Remove";
    deleteBtn.classList.add("btn", "deleteBtn");
    li.appendChild(deleteBtn);
saveLocalTodos (inputText);
  
  }
} ;

const updateTodo = (e) => {
  
if(e.target.innerHTML === "Remove"){
  todoList.removeChild(e.target.parentElement);
  deleteLocalTodos(e.target.parentElement);
}
if(e.target.innerHTML === "Edit"){
inputBox.value =e.target.previousElementSibling.innerHTML;
inputBox.focus();
addBtn.value = "Edit";
editTodo = e;

}

}


  let todos;
  if (localStorage.getItem("todos")=== null) {
   todos = [];
  } else {
   todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
 const saveLocalTodos = (todo) => {
  let todos;
  if (localStorage.getItem("todos")=== null) {
   todos = [];
  } else {
   todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
 };

 const getLocalTodos = ()=> {
  let todos;
  if (localStorage.getItem("todos")=== null) {
   todos = [];
  } else {
   todos = JSON.parse(localStorage.getItem("todos"));
todos.array.forEach((todo )=> {
  //create p tag
  const li = document.createElement("li")
  const p = document.createElement("p")
   p.innerHTML = todo;
   li.appendChild(p);
   //creating edit Btn
   const editBtn = document.createElement("button");
   editBtn.innerText="Edit";
   editBtn.classList.add("btn", "editBtn");
   li.appendChild(editBtn);
   //creating delete Btn
   const deleteBtn = document.createElement("button");
   deleteBtn.innerText="Remove";
   deleteBtn.classList.add("btn", "deleteBtn");
   li.appendChild(deleteBtn);
   todoList.appendChild(li);
  
});
  }
 };
 //delete todo
 const deleteLocalTodos = (todo) => {
  let todos;
  if (localStorage.getItem("todos")=== null) {
   todos = [];
  } else {
   todos = JSON.parse(localStorage.getItem("todos"));
  }
let todoText = todo.children[0].innerHTML;
let todoIndex = todos.indexOf(todoText);
todos.splice(todoIndex, 1);
localStorage.setItem("todos", JSON.stringify(todos));

console.log(todoIndex);
 }



const editLocalTodos = (todo) => {
  let todos = JSON.parse(localStorage.getItem('todos'));
  let todoIndex = todos.indexOf(todo);
  todos[todoIndex] = inputBox.value;
  localStorage.setItem('todos', JSON.stringify(todos));
};

document.addEventListener("DOMContentLoaded", getLocalTodos );
addBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", updateTodo);

