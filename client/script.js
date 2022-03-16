const searchBtn = document.querySelector("#search");
const randomBtn = document.querySelector("#random");
const url = "localhost:3000/";
const takeMeToMyResults = function (text) {
  fetch(`${url}${text}`)
    .then((resp) => resp.json())
    .then((data) => console.log(data));
};

searchBtn.addEventListener("submit", takeMeToMyResults);
