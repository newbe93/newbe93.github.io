const hello = document.querySelector(".hello");
const nameForm = document.getElementById("name_form");
const infoSection = document.querySelector(".info");
const prompter = document.querySelector(".prompt");
const greeting = document.querySelector(".greeting");
const NAME_KEY = "name";
const HIDDEN_CLASS = "hidden";

const paintGreeting = () => {
  const username = localStorage.getItem(NAME_KEY);
  greeting.innerHTML = `Hello, ${username}`;
  infoSection.classList.add(HIDDEN_CLASS);
  prompter.classList.remove(HIDDEN_CLASS);
};

const submitHandle = (event) => {
  event.preventDefault();
  const name = document.querySelector(".name").value;
  localStorage.setItem(NAME_KEY, name);
  paintGreeting();
};

const savedUsername = localStorage.getItem(NAME_KEY);
if (savedUsername === null) {
  infoSection.classList.remove(HIDDEN_CLASS);
  nameForm.addEventListener("submit", submitHandle);
  prompter.classList.add(HIDDEN_CLASS);
} else {
  paintGreeting();
}
