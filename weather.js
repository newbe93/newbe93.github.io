const onGeoOk = (position) => {
  const lat = position.coords.latitude;
  const long = position.coords.longitude;
  const API_KEY = "f6c4244b090e8bb38c5f23b4e317011c";

  console.log(lat, long);
  url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((reponse) => reponse.json())
    .then((data) => {
      const icon = document.querySelector(".weather span:first-child");
      const temp = document.querySelector(".weather span:nth-child(2)");
      const city = document.querySelector(".weather span:last-child");
      const img = document.createElement("img");
      img.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      // icon.innerHTML = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      icon.append(img);
      temp.innerHTML = Math.round(data.main.temp) + `&#8451;`;
      city.innerHTML = data.name;
    });
};

const onGeoError = () => {
  alert("Can't find you. No weather for you.");
};

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
