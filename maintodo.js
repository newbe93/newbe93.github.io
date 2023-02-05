const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector(".todo-input");
const askSection = document.querySelector(".ask");
const mainTodoSection = document.querySelector(".main-todo");
const span = mainTodoSection.querySelector("span");
const btn = mainTodoSection.querySelector("button");

const MAINTODO_KEY = "main-todo";

const savedMainTodo = localStorage.getItem(MAINTODO_KEY);

const onClick = () => {
  localStorage.removeItem(MAINTODO_KEY);
  span.innerHTML = "";
  askSection.classList.remove("hidden");
  mainTodoSection.classList.add("hidden");
};

const paintTodo = () => {
  const mainTodo = localStorage.getItem(MAINTODO_KEY);
  span.innerHTML = `${mainTodo}`;
  askSection.classList.add("hidden");
  mainTodoSection.classList.remove("hidden");
  btn.classList.remove("hidden");
  btn.addEventListener("click", onClick);
};

const onSubmit = (event) => {
  event.preventDefault();
  const mainTodo = todoInput.value;
  localStorage.setItem(MAINTODO_KEY, mainTodo);
  todoInput.value = "";
  paintTodo();
};
if (savedMainTodo === null) {
  // todo form rendering
  todoForm.addEventListener("submit", onSubmit);
  askSection.classList.remove("hidden");
} else {
  // localstorage에서 데이터 가져와서 Todo List rendering
  paintTodo();
}
