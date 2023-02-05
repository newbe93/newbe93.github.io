const toDoPop = document.querySelector(".todo-pop");
const toDo = document.querySelector(".todo");
const toDoPopForm = document.getElementById("todo-pop-form");
const toDoPopList = document.querySelector(".todo-pop-list");
const todoPopInput = toDoPopForm.querySelector("input");
const TODOLIST_KEY = "todo";
let todoList = [];

const saveTodo = () => {
  localStorage.setItem(TODOLIST_KEY, JSON.stringify(todoList));
};

const btnHandle = (event) => {
  const li = event.target.parentElement;

  li.remove();
  todoList = todoList.filter((todo) => todo.id !== parseInt(li.id));
  saveTodo();
};

const paintTodoList = (newTodo) => {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  li.appendChild(span);
  span.innerHTML = newTodo.text;
  const btn = document.createElement("button");
  btn.innerHTML = `❌`;
  btn.addEventListener("click", btnHandle);
  li.appendChild(btn);
  toDoPopList.appendChild(li);
};

const onSubmitHandle = (event) => {
  event.preventDefault();
  const newTodo = todoPopInput.value;
  todoPopInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  todoList.push(newTodoObj);
  paintTodoList(newTodoObj);
  saveTodo();
};

toDoPopForm.addEventListener("submit", onSubmitHandle);
toDo.addEventListener(
  "click",
  (event) => {
    if (event.target !== event.currentTarget) {
      return;
    }
    toDoPop.classList.toggle("hidden");
    event.stopPropagation();
  },
  false
);
const savedToDOs = localStorage.getItem(TODOLIST_KEY);
if (savedToDOs !== null) {
  const parsedToDos = JSON.parse(savedToDOs);
  parsedToDos.map((todo) => {
    paintTodoList(todo);
  });
  todoList = parsedToDos;
} else {
}
