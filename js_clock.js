const clockSection = document.querySelector(".clock");
const getClock = () => {
  const date = new Date();
  const hour = String(date.getHours() % 12);
  const minute = String(date.getMinutes()).padStart(2, "0");
  clockSection.innerHTML = `${hour}:${minute}`;
};

getClock();
setInterval(getClock, 1000);
