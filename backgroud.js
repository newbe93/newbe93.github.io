const img = ["0.jpg", "1.jpg", "2.jpg"];

const randomImg = img[Math.floor(Math.random() * img.length)];

const container = document.querySelector(".container");
container.style.backgroundImage = `url(./img/${randomImg})`;
